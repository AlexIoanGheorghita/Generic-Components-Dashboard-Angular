import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormControlType } from "../generic-form/models/form-control-type.enum";
import { InputDataTypes } from "./input-data-types.enum";
import { FormFieldTypeEnum } from "./input-types.enum";
import { GenericFormField } from "./input.model";

export const FORM_BUILDER_GROUP_CONFIGURATION: GenericFormField = {
  formFieldId: 'add-form-item-group',
  formControl: new FormGroup({}),
  formControlType: FormControlType.FORM_GROUP,
  formFields: [
    {
      formFieldId: 'id',
      formControl: new FormControl('', [Validators.required]),
      formControlType: FormControlType.FORM_CONTROL,
      title: 'Field Id',
      placeholder: 'Enter id of the field',
      value: '',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Field Id is required'
        }
      ],
      fieldType: FormFieldTypeEnum.INPUT,
      fieldDataType: InputDataTypes.TEXT
    },
    {
      formFieldId: 'title',
      formControl: new FormControl('', [Validators.required]),
      formControlType: FormControlType.FORM_CONTROL,
      title: 'Field Title',
      placeholder: 'Enter title of the field',
      value: '',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Field title is required'
        }
      ],
      fieldType: FormFieldTypeEnum.INPUT,
      fieldDataType: InputDataTypes.TEXT
    },
    {
      formFieldId: 'placeholder',
      formControl: new FormControl('', [Validators.required]),
      formControlType: FormControlType.FORM_CONTROL,
      title: 'Field Placeholder',
      placeholder: 'Enter a placeholder for the field',
      value: '',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Field placeholder is required'
        }
      ],
      fieldType: FormFieldTypeEnum.INPUT,
      fieldDataType: InputDataTypes.TEXT
    },
    {
      formFieldId: 'required',
      formControl: new FormControl('', [Validators.required]),
      formControlType: FormControlType.FORM_CONTROL,
      title: 'Required',
      value: '',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Specify if the field will be required'
        }
      ],
      fieldType: FormFieldTypeEnum.RADIO,
      fieldDataType: InputDataTypes.TEXT,
      selectItems: [
        {
          label: 'Yes',
          value: 'Yes'
        },
        {
          label: 'No',
          value: 'No'
        }
      ]
    },
    {
      formFieldId: 'field-type',
      formControl: new FormControl('', [Validators.required]),
      formControlType: FormControlType.FORM_CONTROL,
      title: 'Field Type',
      value: '',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Field type is required'
        }
      ],
      fieldType: FormFieldTypeEnum.SELECT,
      fieldDataType: InputDataTypes.TEXT,
      selectItems: Object.values(FormFieldTypeEnum).map(item => {
        return {
          label: item,
          value: item
        }
      })
    },
  ],
  formControlActions: [
    {
      text: 'Delete',
      config: {
        color: '#FFFFFF',
        backgroundColor: 'red',
        fontSize: 16,
        borderRadius: 5
      },
      role: 'delete',
      action: () => {
        console.log('Delete');
      }
    }
  ]
}
