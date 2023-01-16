import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { GenericFormField } from '../models/input.model';

@Component({
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericSelectComponent implements OnInit, OnDestroy {
  @Input() selectConfig: GenericFormField;
  control: FormControl;
  isMultiple: boolean = false;
  errorMessage: string| undefined;
  private statusSub: Subscription;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    if (this.selectConfig.fieldDataType === 'checkbox') {
      this.isMultiple = true;
    }
    this.control = this.rootFormGroup.control.get(this.selectConfig.formFieldId) as FormControl;

    this.errorMessage = this.selectConfig.validations.find(item => item.validationType === 'required')?.errorMessage;

    this.statusSub = this.control.statusChanges.pipe(distinctUntilChanged()).subscribe(status => {
      if (status === 'INVALID') {
        this.errorMessage = this.selectConfig.validations.find(item => {
          return item.validationType === Object.keys(this.control.errors!)[0]
        })?.errorMessage;
      }
    })
  }

  ngOnDestroy(): void {
    this.statusSub.unsubscribe();
  }
}
