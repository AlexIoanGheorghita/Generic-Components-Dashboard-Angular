import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { first } from "rxjs";
import { GenericDialogComponent } from "../generic-dialog.component";
import { DialogData } from "../models/dialog-data.model";
import { DialogOptions } from "../models/dialog-options.model";
import { GenericDialogService } from "./generic-dialog.service";

@Injectable()
export class GenericDialogFactoryService<T = undefined> {
  constructor(private dialog: MatDialog) {}

  open(
    data: DialogData<T>,
    options: DialogOptions<T>
  ): GenericDialogService<T> {

    const dialogRef = this.dialog.open<GenericDialogComponent<T>, DialogData<T>>(
      GenericDialogComponent,
      {
        data,
        ...this.getOptions(options)
      }
    );

    dialogRef.afterClosed().pipe(first());

    return new GenericDialogService(dialogRef);

  }

  private getOptions(options: DialogOptions): Pick<MatDialogConfig<DialogData<T>>, 'width' | 'height' | 'minWidth' | 'minHeight'> {
    return {
      width: `${options.width}px`,
      height: `${options.height}px`,
      minWidth: `${options.minWidth}px`,
      minHeight: `${options.minHeight}px`
    }
  }
}
