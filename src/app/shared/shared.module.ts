import { NgModule } from "@angular/core";
import { GenericDialogModule } from "./generic-dialog/generic-dialog.module";
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from "./header/header.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatSortModule } from "@angular/material/sort";
import { GenericTableModule } from "./generic-table/generic-table.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { GetKeysPipe } from "./pipes/getkey.pipe";
import { GenericFormModule } from "./generic-form/generic-form.module";
import { RouterModule } from "@angular/router";
import { GenericChartModule } from './generic-chart/generic-chart.module';
import { NgChartsModule } from "ng2-charts";
import { GenericStepperComponent } from './generic-stepper/generic-stepper.component';
import { GenericButtonModule } from "./generic-button/generic-button.module";
import { GenericRendererComponent } from './generic-renderer/generic-renderer.component';
import { PlaceholderDirective } from "./directives/placeholder.directive";

@NgModule({
  imports: [
    GenericTableModule,
    GenericDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatStepperModule,
    GenericFormModule,
    NgChartsModule,
    GenericChartModule,
    GenericButtonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    GetKeysPipe,
    GenericStepperComponent,
    PlaceholderDirective,
    GenericRendererComponent
  ],
  exports: [
    GenericTableModule,
    GenericDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatStepperModule,
    GenericFormModule,
    GenericChartModule,
    NgChartsModule,
    HeaderComponent,
    GenericStepperComponent,
    GenericRendererComponent,
    GetKeysPipe
  ]
})
export class SharedModule {

}
