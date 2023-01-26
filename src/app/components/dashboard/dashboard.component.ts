import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  matDialog: GenericDialogService;

  @ViewChild('componentDialog', { static: false }) componentDialog: TemplateRef<any>;

  constructor(
    private dialogFactoryService: GenericDialogFactoryService
  ) {}

  ngOnInit() {
    this.initSelect();

    this.gridOptions = {
      compactType: CompactType.None,
      gridType: GridType.Fixed,
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
    this.matDialog = this.dialogFactoryService.open(
      {
        title: 'Create a component',
        template: this.componentDialog
      },
      {
        minWidth: 100,
        minHeight: 200
      }
    )

    // this.grid.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }

  removeItem($event: MouseEvent | TouchEvent, item: GridsterItem): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.grid.splice(this.grid.indexOf(item), 1);
  }

  private initSelect(): void {
    this.componentBuilderFormConfig = {
      formId: 'add-item-form',
      formGroup: new FormGroup({}),
      formFields: [
        {
          formFieldId: 'component-selector',
          formControl: new FormControl(null, []),
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
      ],
      formActions: [
        {
          text: 'Add Component',
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
  }
}
