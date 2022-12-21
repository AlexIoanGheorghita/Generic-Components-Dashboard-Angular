import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { GenericInputComponent } from "../generic-input/generic-input.component";
import { GenericSelectComponent } from "../generic-select/generic-select.component";
import { GenericFormComponent } from "./generic-form.component";

@NgModule({
  declarations: [
    GenericFormComponent,
    GenericInputComponent,
    GenericSelectComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    CommonModule
  ],
  exports: [
    GenericFormComponent,
    ReactiveFormsModule
  ]
})
export class GenericFormModule {}
