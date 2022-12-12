import { TemplateRef } from "@angular/core";

export interface DialogData<T = undefined> {
  title: string,
  template: TemplateRef<any>,
  context?: T
}
