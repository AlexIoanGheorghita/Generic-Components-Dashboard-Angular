import { NgModule } from "@angular/core";
import { GenericDialogModule } from "./generic-dialog/generic-dialog.module";
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from "./header/header.component";
import { GenericInputComponent } from './generic-input/generic-input.component';
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatSortModule } from "@angular/material/sort";
import { GenericTableModule } from "./generic-table/generic-table.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { GetKeysPipe } from "./pipes/getkey.pipe";
import { GenericSelectComponent } from './generic-select/generic-select.component';
import { GenericFormModule } from "./generic-form/generic-form.module";

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
    GenericFormModule
  ],
  declarations: [
    HeaderComponent,
    GetKeysPipe,
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
    GenericFormModule,
    HeaderComponent,
    GetKeysPipe
  ]
})
export class SharedModule {

}
