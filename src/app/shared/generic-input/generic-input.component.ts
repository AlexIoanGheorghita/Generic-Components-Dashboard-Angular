import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { GenericFormField } from '../models/input.model';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericInputComponent implements OnInit, OnDestroy {
  @Input() inputConfig: GenericFormField;
  control: FormControl;
  errorMessage: string | undefined = '';
  statusSub: Subscription;

  constructor(
    private rootFormGroup: FormGroupDirective,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.control = this.rootFormGroup.control.get(this.inputConfig.formFieldId) as FormControl;
    this.errorMessage = this.inputConfig.validations!.find(item => item.validationType === 'required')?.errorMessage;

    this.statusSub = this.control.statusChanges.pipe(distinctUntilChanged()).subscribe(status => {
      if (status === 'INVALID') {
        this.errorMessage = this.inputConfig.validations!.find(item => {
          return item.validationType === Object.keys(this.control.errors!)[0]
        })?.errorMessage;
      }
    })
  }

  ngOnDestroy(): void {
    this.statusSub.unsubscribe();
  }
}
