import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { GetKeyPipe } from "../pipes/getkey.pipe";
import { GetValuePipe } from "../pipes/getvalue.pipe";
import { GenericTableComponent } from "./generic-table.component";

@NgModule({
  declarations: [
    GenericTableComponent,
    GetKeyPipe,
    GetValuePipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    GenericTableComponent
  ]
})
export class GenericTableModule {}
