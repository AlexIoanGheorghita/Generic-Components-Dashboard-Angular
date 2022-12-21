import { FormGroup } from "@angular/forms";
import { GenericFormField } from "../../models/input.model";

export interface GenericFormConfiguration {
  formId: string,
  formGroup: FormGroup,
  formFields: GenericFormField[]
}
