import { Component, Input } from '@angular/core';
import { GenericFormField } from '../models/input.model';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent {
  @Input() inputConfig: GenericFormField;
}
