import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { GenericInputComponent } from "../generic-input/generic-input.component";
import { GenericSelectComponent } from "../generic-select/generic-select.component";
import { GenericFormComponent } from "./generic-form.component";
import { GenericRadioComponent } from "../generic-radio/generic-radio.component";
import { GenericButtonModule } from "../generic-button/generic-button.module";
import { FormGroupPipe } from "./pipes/formGroup.pipe";

@NgModule({
  declarations: [
    GenericFormComponent,
    GenericInputComponent,
    GenericSelectComponent,
    GenericRadioComponent,
    FormGroupPipe
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GenericButtonModule,
    CommonModule
  ],
  providers: [
    MatDatepickerModule
  ],
  exports: [
    GenericFormComponent,
    GenericInputComponent,
    GenericSelectComponent,
    GenericRadioComponent,
    FormGroupPipe,
    ReactiveFormsModule
  ]
})
export class GenericFormModule {}
