import { Component, Input } from '@angular/core';
import { ButtonConfig } from './models/button.config';
import { Button } from './models/button.model';

type CustomObject = {[key: string]: string | number};

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent {
  @Input() set buttonConfig(data: Button) {
    this.btnStyles = this.styleButton(data.config);
  };
  btnStyles: CustomObject;

  constructor() {}

  private styleButton(config: ButtonConfig): CustomObject {
    const obj: CustomObject = {};

    for (let style of Object.keys(config)) {
      switch (typeof style) {
        case 'number':
          obj[`${style}.px`] = config[style];
          break;
        case 'string':
          obj[style] = config[style as keyof ButtonConfig];
          break;
      }
    }

    return obj;
  }
}
