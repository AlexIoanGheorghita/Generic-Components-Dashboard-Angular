import { Component, ComponentRef, Input, OnInit, TemplateRef, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PlaceholderDirective } from '../directives/placeholder.directive';
import { ComponentRendererConfig } from './models/renderer-config.model';

@Component({
  selector: 'app-generic-renderer',
  templateUrl: './generic-renderer.component.html',
  styleUrls: ['./generic-renderer.component.scss']
})
export class GenericRendererComponent implements OnInit {
  @Input() config: ComponentRendererConfig;
  @ViewChild('template', { static: false }) templateRef: TemplateRef<any>;
  @ViewChild(PlaceholderDirective, { static: true }) placeholder: PlaceholderDirective;

  constructor() {}

  ngOnInit(): void {
    this.createDynamicComponent(this.config);
  }

  private createDynamicComponent(config: ComponentRendererConfig): ComponentRef<any> {
    let viewContainerRef = this.placeholder.viewContainerRef;
    let componentRef: ComponentRef<any>;

    componentRef = viewContainerRef.createComponent<typeof config.componentDataType>(config.componentDataType);
    if (!(config.componentInput instanceof Array)) {
      componentRef.setInput(config.componentInput, config.componentConfig);
    } else {
      config.componentInput.forEach(inputName => {
        componentRef.setInput(inputName, config.componentConfig[inputName]);
      });
    }

    return componentRef;
  }

}
