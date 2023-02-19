import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FORM_BUILDER_GROUP_CONFIGURATION } from "../../models/form-builder-config.const";
import { GenericFormField } from "../../models/input.model";
import { FormControlType } from "../models/form-control-type.enum";

@Injectable({ providedIn: 'root' })
export class GenericFormService {
  private formGroup: GenericFormField;

  constructor() {}

  public createGroup(formArrayId: string): GenericFormField {
    if (formArrayId === 'form-type') {
      let group: FormGroup = new FormGroup({});

      let formField: GenericFormField = {
        ...FORM_BUILDER_GROUP_CONFIGURATION,
        formControl: group,
        formFields: [
          ...FORM_BUILDER_GROUP_CONFIGURATION.formFields!.map(item => {
            return {
              ...item,
              formControl: new FormControl('', [Validators.required])
            }
          })
        ]
      };

      for (let field of formField.formFields!) {
        (formField.formControl as FormGroup).addControl(
          field.formFieldId,
          field.formControl
        );
      }

      return formField;

    } else {
      return {
        formFieldId: 'new-form-group',
        formControl: new FormGroup({}),
        formControlType: FormControlType.FORM_GROUP,
        formFields: []
      }
    }
  }

  public getGroup() {
    return this.formGroup;
  }
}
