import { TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentType } from 'src/app/components/dashboard/models/component-type.enum';
import { Button } from '../../generic-button/models/button.model';
import { ComponentRendererConfig } from '../../generic-renderer/models/renderer-config.model';

export interface StepConfig {
  title: string,
  errorMessage?: string,
  // content: {
  //   template: TemplateRef<any>,
  //   data: { value: any, type: ComponentType }
  // },
  config: ComponentRendererConfig,
  control: FormGroup,
  buttons: Button[]
}

export interface StepperConfiguration {
  stepperId: string,
  steps: StepConfig[]
}
