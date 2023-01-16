import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GenericFormConfiguration } from './models/generic-form-configuration.model';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericFormComponent implements OnInit {
  @Input() formConfiguration: GenericFormConfiguration;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {

    for (let field of this.formConfiguration.formFields) {
      // let validators: ValidatorFn[] = field.validations.map(validation => {
        //   return validation.validationType
        // });

      this.formConfiguration.formGroup.addControl(
        field.formFieldId,
        field.formControl
      );
    }
  }
}
