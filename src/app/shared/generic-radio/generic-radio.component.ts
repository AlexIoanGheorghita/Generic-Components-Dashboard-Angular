import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { GenericFormField } from '../models/input.model';

@Component({
  selector: 'app-generic-radio',
  templateUrl: './generic-radio.component.html',
  styleUrls: ['./generic-radio.component.scss']
})
export class GenericRadioComponent implements OnInit {
  @Input() radioConfig: GenericFormField;
  control: FormControl;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.control = this.rootFormGroup.control.get(this.radioConfig.formFieldId) as FormControl;
  }
}
