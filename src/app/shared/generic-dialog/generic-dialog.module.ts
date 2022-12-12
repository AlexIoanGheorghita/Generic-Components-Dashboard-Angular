import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { GenericDialogComponent } from "./generic-dialog.component";

@NgModule({
  declarations: [GenericDialogComponent],
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  providers: [],
  exports: [
    GenericDialogComponent,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [GenericDialogComponent]
})
export class GenericDialogModule {}
