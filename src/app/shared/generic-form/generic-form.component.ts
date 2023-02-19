import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GenericFormConfiguration } from './models/generic-form-configuration.model';
import { FormFieldTypeEnum } from '../models/input-types.enum';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlType } from './models/form-control-type.enum';
import { GenericFormField } from '../models/input.model';
import * as _ from 'lodash';
import { GenericFormService } from './services/generic-form.service';

interface Data {
  data: any
}

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericFormComponent implements OnInit, Data{
  @Input() formConfiguration: GenericFormConfiguration;
  @Input() data: any;

  constructor(
    private formService: GenericFormService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  public get FormFieldTypeEnum(): typeof FormFieldTypeEnum {
    return FormFieldTypeEnum;
  }

  public get FormControlType(): typeof FormControlType {
    return FormControlType;
  }

  public getFormGroup(fieldId: any): FormGroup {
    return this.formConfiguration.formGroup.get(fieldId) as FormGroup;
  }

  public getFormArray(fieldId: any): FormArray {
    return this.formConfiguration.formGroup.get(fieldId) as FormArray;
  }

  onPushToFormArray(formArrayId: string): void {
    let formArray: GenericFormField = this.formConfiguration.formFields.find(field => {
      return field.formFieldId === formArrayId
    })!;

    let index = formArray.formFields!.length;
    let formGroup = this.formService.createGroup(formArrayId);
    console.log(formGroup);

    if (formGroup.formControlActions && formGroup.formControlActions.length > 0) {
      formGroup.formControlActions = formGroup.formControlActions!.map(item => {
        if (item.role === 'delete') {
          return {
            ...item,
            action: () => this.onDeleteFormArrayItem(formArrayId, index)
          }
        } else {
          return item;
        }
      })
    }

    this.formConfiguration.formFields[0].formFields?.push(formGroup);
    (<FormArray>this.formConfiguration.formGroup.get(formArrayId)).push(formGroup.formControl as FormGroup);
  }

  onDeleteFormArrayItem(formArrayId: string, itemIndex: number): void {
    this.formConfiguration.formFields[0].formFields?.splice(itemIndex, 1);
    (<FormArray>this.formConfiguration.formGroup.get(formArrayId)).removeAt(itemIndex);
  }

  private initForm() {
    for (let field of this.formConfiguration.formFields) {

      // if field === FormControl:
      // this.formConfiguration.formGroup.addControl(
      //   field.formFieldId,
      //   field.formControl
      // );

      // if field === FormGroup:
      // we iterate through its formFields and add them

      // if field === FormArray:
      // create a formArray with one group (we don't need to iterate through its formFields because it does not have any formFields)

      switch (field.formControlType) {
        case FormControlType.FORM_CONTROL:
          this.formConfiguration.formGroup.addControl(
            field.formFieldId,
            field.formControl
          );
          break;

        case FormControlType.FORM_GROUP:
          for (let subField of field.formFields!) {
            (field.formControl as FormGroup).addControl(
              subField.formFieldId,
              subField.formControl
            );
          }

          this.formConfiguration.formGroup.addControl(
            field.formFieldId,
            (field.formControl as FormGroup)
          );
          break;

        case FormControlType.FORM_ARRAY:
          // let formArray = new FormArray<any>([]);
          // let group = field.formFields![0].formControl;
          // let copy = _.cloneDeep(field.formFields![0].formControl);
          // console.log(group);
          // console.log(copy);

          // this.formService.Group = _.cloneDeep(field.formFields![0]);
          // console.log(field.formFields![0]);
          // console.log(this.formService.Group);
          for (let subField of field.formFields!) {
            // let group = new FormGroup({});
            if (subField.formControlActions && subField.formControlActions.length > 0) {
              subField.formControlActions = subField.formControlActions.map(item => {
                if (item.role === 'delete') {
                  return {
                    ...item,
                    action: () => this.onDeleteFormArrayItem(field.formFieldId, field.formFields!.indexOf(subField))
                  }
                } else {
                  return item;
                }
              })
            }

            for (let innerField of subField.formFields!) {
              (subField.formControl as FormGroup).addControl(
                innerField.formFieldId,
                innerField.formControl
              );
            }

            (field.formControl as FormArray).push((subField.formControl as FormGroup));
          }

          this.formConfiguration.formGroup.addControl(
            field.formFieldId,
            (field.formControl as FormArray)
          );
          break;
        default:
          console.log("Not a valid control type");
      }
    }
  }
}
