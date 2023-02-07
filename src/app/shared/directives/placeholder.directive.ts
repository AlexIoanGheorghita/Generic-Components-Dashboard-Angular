import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[placeholderDir]'
})
export class PlaceholderDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}
}
