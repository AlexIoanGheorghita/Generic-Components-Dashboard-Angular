import { FormGroup } from "@angular/forms";
import { Button } from "../../generic-button/models/button.model";
import { GenericFormField } from "../../models/input.model";

export interface GenericFormConfiguration {
  formId: string,
  formGroup: FormGroup,
  formFields: GenericFormField[],
  editable?: boolean,
  formActions?: Button[]
}
