import { Injectable, TemplateRef } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { first } from "rxjs";
import { GenericDialogComponent } from "../generic-dialog.component";

@Injectable()
export class GenericDialogService<T = undefined> {
  opened$ = this.dialogRef.afterOpened().pipe(first());

  constructor(private dialogRef: MatDialogRef<GenericDialogComponent<T>>) {}

  close(): void {
    this.dialogRef.close();
  }

  setTitle(title: string): void {
    this.dialogRef.componentInstance.data.title = title;
  }

  setTemplate(template: TemplateRef<any>): void {
    this.dialogRef.componentInstance.data.template = template;
  }

  getContext(): T | undefined {
    return this.dialogRef.componentInstance.data.context;
  }
}
