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

@NgModule({
  imports: [
    GenericDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [HeaderComponent, GenericInputComponent, GenericTableComponent],
  exports: [
    GenericDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    HeaderComponent,
    GenericTableComponent
  ]
})
export class SharedModule {

}
