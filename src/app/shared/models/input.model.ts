import { FormControl, ValidatorFn } from "@angular/forms";
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
  formControl: FormControl,
  title: string,
  placeholder: string,
  value?: string,
  required: boolean,
  disabled: boolean,
  validations: FormFieldValidation[],
  fieldType: FormFieldTypeEnum,
  fieldDataType?: InputDataTypes,
  selectItems?: {
    label: string,
    value: string
  }[]
}

export interface FormFieldValidation {
  validationType: ValidatorFn,
  errorMessage: string
}
