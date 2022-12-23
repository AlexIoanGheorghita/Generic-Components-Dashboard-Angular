import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericFormConfiguration } from 'src/app/shared/generic-form/models/generic-form-configuration.model';
import { InputDataTypes } from 'src/app/shared/models/input-data-types.enum';
import { FormFieldTypeEnum } from 'src/app/shared/models/input-types.enum';
import { FORM_CONFIGURATION } from 'src/app/shared/models/form-configuration.const';

// export const FORM_CONFIGURATION: GenericFormConfiguration = {
//   formId: 'add-item-form',
//   formGroup: new FormGroup({}),
//   formFields: [
//     {
//       formFieldId: 'name',
//       formControl: new FormControl('', [Validators.required]),
//       title: 'Name',
//       placeholder: 'Enter name',
//       value: '',
//       required: true,
//       disabled: false,
//       validations: [
//         {
//           validationType: 'required',
//           errorMessage: 'Name field is required'
//         }
//       ],
//       fieldType: FormFieldTypeEnum.INPUT,
//       fieldDataType: InputDataTypes.TEXT
//     }
//   ]
// }

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  formConfig: GenericFormConfiguration = FORM_CONFIGURATION;

  constructor() {}
}
