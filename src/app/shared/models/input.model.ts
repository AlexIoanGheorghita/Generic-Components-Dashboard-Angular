import { FormArray, FormControl, FormGroup, ValidatorFn } from "@angular/forms";
import { Button } from "../generic-button/models/button.model";
import { FormControlType } from "../generic-form/models/form-control-type.enum";
import { InputDataTypes } from "./input-data-types.enum";
import { FormFieldTypeEnum } from "./input-types.enum";

// export interface InputConfig {
//     inputType: FormFieldTypeEnum,
//     dataType?: InputDataTypes,
//     name: string,
//     text: string,
//     placeholder?: string,
//     value?: string
// }

export interface GenericFormField {
  formFieldId: string,
  formControl: FormControl | FormGroup | FormArray,
  formControlType: FormControlType,
  formFields?: GenericFormField[],
  title?: string,
  placeholder?: string,
  value?: string | number | string[],
  required?: boolean,
  disabled?: boolean,
  validations?: FormFieldValidation[],
  fieldType?: FormFieldTypeEnum,
  fieldDataType?: InputDataTypes,
  selectItems?: {
    label: string,
    value: string
  }[],
  formControlActions?: Button[]
}

export interface FormFieldValidation {
  validationType: string,
  errorMessage: string
}
