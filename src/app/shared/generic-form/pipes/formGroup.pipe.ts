import { Pipe, PipeTransform } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

@Pipe({
  name: 'formGroup'
})
export class FormGroupPipe implements PipeTransform {

  transform(value: FormGroup | AbstractControl, ...args: any[]): FormGroup {
    return value as FormGroup;
  }
}
