import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './models/dialog-data.model';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericDialogComponent<T> {
  constructor(
    private dialogRef: MatDialogRef<GenericDialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<T>
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
