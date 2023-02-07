import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ComponentType } from "src/app/components/dashboard/models/component-type.enum";
import { Button } from "../../generic-button/models/button.model";
import { GenericFormComponent } from "../../generic-form/generic-form.component";
import { ComponentRendererConfig } from "../../generic-renderer/models/renderer-config.model";
import { FORM_CONFIGURATION } from "../../models/form-configuration.const";
import { InputDataTypes } from "../../models/input-data-types.enum";
import { FormFieldTypeEnum } from "../../models/input-types.enum";
import { StepConfig, StepperConfiguration } from "../models/stepper-configuration.model";
import { ChartTypeRegistry } from "chart.js";

declare const chartType: ChartTypeRegistry;

@Injectable({ providedIn: 'root' })
export class StepperService {
  stepperConfig: StepperConfiguration;

  constructor(private formBuilder: FormBuilder) {}

  // Ideally we would get the stepperId, and then, based on the component chosen in step 1, the stepId.
  // Based on the stepId, we would make an HTTP request for the configuration of that step.
  public configureStep(stepIndex: number, componentType?: ComponentType): StepConfig {
    let config: ComponentRendererConfig = {
      componentDataType: GenericFormComponent,
      componentConfig: {},
      componentInput: 'formConfiguration'
    };

    if (stepIndex < this.stepperConfig.steps.length) {
      switch (componentType) {
        case ComponentType.FORM:
          config.componentConfig = FORM_CONFIGURATION;
          break;
        case ComponentType.TABLE:
          config.componentConfig = {
            formId: 'form-configuration-form',
            formGroup: new FormGroup({}),
            formFields: [
              {
                formFieldId: 'columns-number',
                formControl: new FormControl(null, [Validators.required, Validators.max(20)]),
                title: 'Number of columns',
                placeholder: '',
                required: true,
                disabled: false,
                validations: [
                  {
                    validationType: 'required',
                    errorMessage: 'This field is required'
                  }
                ],
                fieldType: FormFieldTypeEnum.INPUT,
                fieldDataType: InputDataTypes.NUMBER,
              },
            ]
          }

          break;
        case ComponentType.CHART:
          config.componentConfig = {
            formId: 'form-configuration-form',
            formGroup: new FormGroup({}),
            formFields: [
              {
                formFieldId: 'chart-type',
                formControl: new FormControl(null, [Validators.required]),
                title: 'Number of columns',
                placeholder: '',
                required: true,
                disabled: false,
                validations: [
                  {
                    validationType: 'required',
                    errorMessage: 'This field is required'
                  }
                ],
                fieldType: FormFieldTypeEnum.SELECT,
                fieldDataType: InputDataTypes.TEXT,
                selectItems: Object.keys(chartType).map(key => {
                  return {
                    label: key,
                    value: key
                  }
                })
              },
            ]
          }
          break;
        default:
          config.componentConfig = FORM_CONFIGURATION;
          break;
      }
    }


    this.stepperConfig.steps[stepIndex] = {
      ...this.stepperConfig.steps[stepIndex],
      control: config.componentConfig.formGroup,
      config
    }

    return this.stepperConfig.steps[stepIndex];
  }

  // we should initialize it using a stepper ID, but we do not have a back-end
  // Therefore, we initialize the stepper with one step, the first one, while leaving the other steps empty
  public initStepper(stepperId: string, stepOne: StepConfig, stepTitles: string[]): StepperConfiguration {
    let emptySteps: StepConfig[] = [];
    let defaultButton: Button = {
      text: 'Back',
      role: 'back',
      config: {
        color: '#FFFFFF',
        backgroundColor: '#4d4dff',
        fontSize: 16,
        borderRadius: 5
      },
      action: () => {
        console.log('Back');
      }
    };

    for (let i = 1; i < stepTitles.length; i++) {
      let buttons: Button[] = [];

      if (i < stepTitles.length) {
        buttons = [
          defaultButton,
          {
            ...defaultButton,
            text: 'Next',
            role: 'next',
            action: () => {
              console.log('Next');
            }
          }
        ]
      } else if (i === stepTitles.length) {
        buttons = [
          defaultButton,
          {
            ...defaultButton,
            text: 'Complete',
            role: 'complete',
            action: () => {
              console.log('Complete');
            }
          }
        ]
      };

      console.log(i, buttons);

      emptySteps.push({
        title: stepTitles[i],
        errorMessage: '',
        config: {
          componentDataType: GenericFormComponent,
          componentConfig: {
            formId: '',
            formGroup: this.formBuilder.group({ tempGroup: [''] }),
            formFields: []
          },
          componentInput: 'formConfiguration'
        },
        control: this.formBuilder.group({ tempGroup: [''] }),
        buttons: buttons
      });
    }

    this.stepperConfig = {
      stepperId,
      steps: [
        {
          title: stepOne.title,
          errorMessage: stepOne.errorMessage,
          config: stepOne.config,
          control: stepOne.control,
          buttons: stepOne.buttons
        },
        ...emptySteps
      ]
    }

    return this.stepperConfig;
  }
}
