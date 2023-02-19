import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, Input, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StepperConfiguration } from './models/stepper-configuration.model';
import { StepperService } from './services/stepper.service';

@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericStepperComponent implements OnInit {
  @Input() set stepperConfig(config: StepperConfiguration) {
    this.config = this.initStepperConfig(config);
  }
  @ViewChild('stepper', { static: false }) stepper: MatStepper;
  config: StepperConfiguration;
  selectedIndex: number = 0;

  constructor(
    private stepperService: StepperService
  ) {}

  ngOnInit(): void {
    console.log(this.config.steps);
  }

  private initStepperConfig(config: StepperConfiguration): StepperConfiguration {
    config = {
      ...config,
      steps: config.steps.map(step => {
        for (let button of step.buttons) {
          switch (button.role) {
            case 'next':
              button.action = () => this.onNextStep();
              break;
            case 'back':
              button.action = () => this.onPreviousStep();
              break;
            default:
              button.action = () => this.onNextStep();
          }
        }
        return step;
      })
    }

    return config;
  }

  onNextStep(): void {
    console.log(this.selectedIndex);
    if (this.selectedIndex < this.config.steps.length - 1) {
      if (this.config.steps[this.selectedIndex].control.valid) {
        this.selectedIndex++;
        if (!this.config.steps[this.selectedIndex].control.touched) {
          console.log(this.config.steps[0].config.componentConfig.formGroup.value['component-selector']);
          this.config.steps[this.selectedIndex] = this.stepperService.configureStep(this.selectedIndex, this.config.steps[0].config.componentConfig.formGroup.value['component-selector']);
        }
        this.stepper.next();
      }
    }
  }

  onPreviousStep(): void {
    this.selectedIndex--;
    console.log(this.selectedIndex);
    this.stepper.previous();
  }
}
