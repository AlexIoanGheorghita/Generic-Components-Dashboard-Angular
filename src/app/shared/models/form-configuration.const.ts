import { FormControl, FormGroup, Validators } from "@angular/forms";
import { GenericFormConfiguration } from "../generic-form/models/generic-form-configuration.model";
import { EyeColor } from "./eye-color.enum";
import { Gender } from "./gender.enum";
import { HairColor } from "./hair-color.enum";
import { Hobbies } from "./hobbies.enum";
import { InputDataTypes } from "./input-data-types.enum";
import { FormFieldTypeEnum } from "./input-types.enum";
import { SkinColor } from "./skin-color.enum";

const hairColor = Object.values(HairColor).map(item => {
  return {
    label: item,
    value: item
  }
});

const skinColor = Object.values(SkinColor).map(item => {
  return {
    label: item,
    value: item
  }
});

const eyeColor = Object.values(EyeColor).map(item => {
  return {
    label: item,
    value: item
  }
});

const gender = Object.values(Gender).map(item => {
  return {
    label: item,
    value: item
  }
});

const hobbies = Object.values(Hobbies).map(item => {
  return {
    label: item,
    value: item
  }
});

export const FORM_CONFIGURATION: GenericFormConfiguration = {
  formId: 'add-item-form',
  formGroup: new FormGroup({}),
  formFields: [
    {
      formFieldId: 'name',
      formControl: new FormControl('', [Validators.required]),
      title: 'Name',
      placeholder: 'Enter name',
      value: '',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Name field is required'
        }
      ],
      fieldType: FormFieldTypeEnum.INPUT,
      fieldDataType: InputDataTypes.TEXT
    },
    {
      formFieldId: 'height',
      formControl: new FormControl('', [Validators.required]),
      title: 'Height',
      placeholder: 'Enter height',
      value: '',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Height field is required'
        }
      ],
      fieldType: FormFieldTypeEnum.INPUT,
      fieldDataType: InputDataTypes.NUMBER
    },
    {
      formFieldId: 'mass',
      formControl: new FormControl('', [Validators.required]),
      title: 'Mass',
      placeholder: 'Enter mass',
      value: '',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Mass field is required'
        }
      ],
      fieldType: FormFieldTypeEnum.INPUT,
      fieldDataType: InputDataTypes.NUMBER
    },
    {
      formFieldId: 'hair_color',
      formControl: new FormControl('', [Validators.required]),
      title: 'Hair Color',
      placeholder: 'Enter hair color',
      value: HairColor.NOTAPPLICABLE,
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Hair color field is required'
        }
      ],
      fieldType: FormFieldTypeEnum.SELECT,
      fieldDataType: InputDataTypes.TEXT,
      selectItems: hairColor
    },
    {
      formFieldId: 'skin_color',
      formControl: new FormControl('', [Validators.required]),
      title: 'Skin Color',
      placeholder: 'Enter skin color',
      value: SkinColor.NOTAPPLICABLE,
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Skin color field is required'
        }
      ],
      fieldType: FormFieldTypeEnum.SELECT,
      fieldDataType: InputDataTypes.TEXT,
      selectItems: skinColor
    },
    {
      formFieldId: 'eye_color',
      formControl: new FormControl('', [Validators.required]),
      title: 'Eye Color',
      placeholder: 'Enter eye color',
      value: EyeColor.NOTAPPLICABLE,
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Eye color field is required'
        }
      ],
      fieldType: FormFieldTypeEnum.SELECT,
      fieldDataType: InputDataTypes.TEXT,
      selectItems: eyeColor
    },
    {
      formFieldId: 'birth_year',
      formControl: new FormControl('', [Validators.required]),
      title: 'Birth Year',
      placeholder: 'Enter birth year',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Birth year field is required'
        }
      ],
      fieldType: FormFieldTypeEnum.INPUT,
      fieldDataType: InputDataTypes.DATE,
    },
    {
      formFieldId: 'gender',
      formControl: new FormControl('', [Validators.required]),
      title: 'Gender',
      placeholder: 'Enter gender',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Gender field is required'
        }
      ],
      fieldType: FormFieldTypeEnum.RADIO,
      selectItems: gender
    },
    {
      formFieldId: 'hobbies',
      formControl: new FormControl('', [Validators.required]),
      title: 'Hobbies',
      placeholder: 'Enter hobbies',
      required: true,
      disabled: false,
      validations: [
        {
          validationType: 'required',
          errorMessage: 'Hobbies field is required'
        }
      ],
      fieldType: FormFieldTypeEnum.SELECT,
      fieldDataType: InputDataTypes.CHECKBOX,
      selectItems: hobbies
    },
  ],
  formActions: [
    {
      text: 'Add Person',
      config: {
        color: '#FFFFFF',
        backgroundColor: '#4d4dff',
        fontSize: 16,
        borderRadius: 5
      },
      action: () => {
        console.log('Add');
      }
    }
  ]
}
