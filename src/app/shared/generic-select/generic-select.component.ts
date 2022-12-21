import { Component, Input } from '@angular/core';
import { GenericFormField } from '../models/input.model';

@Component({
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.scss']
})
export class GenericSelectComponent {
  @Input() selectConfig: GenericFormField;
}
