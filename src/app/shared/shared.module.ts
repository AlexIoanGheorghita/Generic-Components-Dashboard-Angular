import { NgModule } from "@angular/core";
import { GenericDialogModule } from "./generic-dialog/generic-dialog.module";
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from "./header/header.component";
import { GenericInputComponent } from './generic-input/generic-input.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatSortModule } from "@angular/material/sort";
import { GenericTableModule } from "./generic-table/generic-table.module";
import { GetKeysPipe } from "./pipes/getkey.pipe";

@NgModule({
  imports: [
    GenericTableModule,
    GenericDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    GenericInputComponent,
    GetKeysPipe
  ],
  exports: [
    GenericTableModule,
    GenericDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    HeaderComponent,
    GetKeysPipe
  ]
})
export class SharedModule {

}
