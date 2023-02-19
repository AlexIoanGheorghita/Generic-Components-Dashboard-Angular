import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputDataTypes } from 'src/app/shared/models/input-data-types.enum';
import { FormFieldTypeEnum } from 'src/app/shared/models/input-types.enum';
import { GenericFormField } from 'src/app/shared/models/input.model';
import { ComponentType } from './models/component-type.enum';
import {
  GridsterItem,
  GridsterItemComponent,
  GridsterPush,
  GridsterConfig,
  CompactType,
  GridType
} from 'angular-gridster2';
import { GenericFormConfiguration } from 'src/app/shared/generic-form/models/generic-form-configuration.model';
import { GenericDialogService } from 'src/app/shared/generic-dialog/services/generic-dialog.service';
import { GenericDialogFactoryService } from 'src/app/shared/generic-dialog/services/generic-dialog-factory.service';
import { HeaderService } from 'src/app/shared/header/services/header.service';
import { StepConfig, StepperConfiguration } from 'src/app/shared/generic-stepper/models/stepper-configuration.model';
import { GenericFormComponent } from 'src/app/shared/generic-form/generic-form.component';
import { StepperService } from 'src/app/shared/generic-stepper/services/stepper.service';
import { FormControlType } from 'src/app/shared/generic-form/models/form-control-type.enum';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  grid!: GridsterItem[];
  gridOptions: GridsterConfig;
  itemToPush: GridsterItemComponent
  selectConfig: GenericFormField;

  componentBuilderFormConfig: GenericFormConfiguration;
  stepperConfig: StepperConfiguration;
  matDialog: GenericDialogService;

  @ViewChild('componentDialog', { static: false }) componentDialog: TemplateRef<any>;
  // @ViewChild('step1', { static: false }) stepOne: TemplateRef<any>;
  // @ViewChild('step2', { static: false }) stepTwo: TemplateRef<any>;

  constructor(
    private dialogFactoryService: GenericDialogFactoryService,
    private headerService: HeaderService,
    private stepperService: StepperService
  ) {}

  ngOnInit() {
    this.headerService.title.next('Dashboard');

    this.gridOptions = {
      compactType: CompactType.None,
      gridType: GridType.ScrollVertical,
      minCols: 8,
      maxCols: 8,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.grid = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 0, x: 2 },
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 3, rows: 2, y: 1, x: 4 },
      { cols: 1, rows: 1, y: 4, x: 5 },
      { cols: 1, rows: 1, y: 2, x: 1 },
      { cols: 2, rows: 2, y: 5, x: 5 },
      { cols: 2, rows: 2, y: 3, x: 2 },
      { cols: 2, rows: 1, y: 2, x: 2 },
      { cols: 1, rows: 1, y: 3, x: 4 },
      { cols: 1, rows: 1, y: 0, x: 6 }
    ]
  }

  initItem(item: GridsterItem, itemComponent: GridsterItemComponent): void {
    this.itemToPush = itemComponent;
  }

  addItem(): void {
    this.grid.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }

  removeItem($event: MouseEvent | TouchEvent, item: GridsterItem): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.grid.splice(this.grid.indexOf(item), 1);
  }

  removeSideEffects($event: MouseEvent | TouchEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
  }

  addComponent($event: MouseEvent | TouchEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.initSelect();
    this.stepperConfig = this.stepperService.initStepper(
      'component-builder-stepper',
      this.initFirstStep(),
      ['Create a component', 'Configure component', 'Complete configuration']
    );
    this.matDialog = this.dialogFactoryService.open(
      {
        title: 'Create a component',
        template: this.componentDialog
      },
      {
        minWidth: 100,
        minHeight: 200
      }
    );
  }

  // private initStepper(id: string, stepOne: StepConfig, steps: number, stepTitle: string[]): void {
  //   this.stepperService.initStepper('component-builder-stepper',)

  //   this.stepperConfig = {
  //     stepperId: 'component-builder-stepper',
  //     steps: [
  //       {
  //         title: 'Choose a component type',
  //         errorMessage: 'You need to choose a component type',
  //         config: {
  //           componentDataType: GenericFormComponent,
  //           componentConfig: this.componentBuilderFormConfig,
  //           componentInput: 'formConfiguration'
  //         },
  //         // content: {
  //         //   template: this.stepOne,
  //         //   data: { value: this.componentBuilderFormConfig, type: ComponentType.FORM }
  //         // },
  //         control: this.componentBuilderFormConfig.formGroup,
  //         buttons: [
  //           {
  //             text: 'Next',
  //             role: 'next',
  //             config: {
  //               color: '#FFFFFF',
  //               backgroundColor: '#4d4dff',
  //               fontSize: 16,
  //               borderRadius: 5
  //             },
  //             action: () => {
  //               console.log('Next');
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         title: 'Choose a component type',
  //         errorMessage: 'You need to choose a component type',
  //         config: {
  //           componentDataType: GenericFormComponent,
  //           componentConfig: this.componentBuilderFormConfig,
  //           componentInput: 'formConfiguration'
  //         },
  //         // content: {
  //         //   template: this.stepTwo,
  //         //   data: { value: this.componentBuilderFormConfig, type: ComponentType.FORM }
  //         // },
  //         control: this.componentBuilderFormConfig.formGroup,
  //         buttons: [
  //           {
  //             text: 'Back',
  //             role: 'back',
  //             config: {
  //               color: '#FFFFFF',
  //               backgroundColor: '#4d4dff',
  //               fontSize: 16,
  //               borderRadius: 5
  //             },
  //             action: () => {
  //               console.log('Back');
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // }

  private initSelect(): void {
    this.componentBuilderFormConfig = {
      formId: 'select-component-form',
      formGroup: new FormGroup({}),
      formFields: [
        {
          formFieldId: 'component-selector',
          formControl: new FormControl(null, [Validators.required]),
          formControlType: FormControlType.FORM_CONTROL,
          title: 'Component',
          placeholder: 'Select a component',
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
          selectItems: Object.values(ComponentType).map(item => {
            return {
              label: item,
              value: item
            }
          })
        },
      ]
    }
  }

  private initFirstStep(): StepConfig {
    return {
      title: 'Choose a component type',
      errorMessage: 'You need to choose a component type',
      config: {
        componentDataType: GenericFormComponent,
        componentConfig: this.componentBuilderFormConfig,
        componentInput: 'formConfiguration'
      },
      // content: {
      //   template: this.stepOne,
      //   data: { value: this.componentBuilderFormConfig, type: ComponentType.FORM }
      // },
      control: this.componentBuilderFormConfig.formGroup,
      buttons: [
        {
          text: 'Next',
          role: 'next',
          config: {
            color: '#FFFFFF',
            backgroundColor: '#4d4dff',
            fontSize: 16,
            borderRadius: 5
          },
          action: () => {
            console.log('Next');
          }
        }
      ]
    }
  }
}
