import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { GenericDialogFactoryService } from 'src/app/shared/generic-dialog/services/generic-dialog-factory.service';
import { GenericDialogService } from 'src/app/shared/generic-dialog/services/generic-dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('itemTemplate', {static: false}) popupTemplate: TemplateRef<any>;
  dialog: GenericDialogService;

  constructor(
    private dialogFactoryService: GenericDialogFactoryService,
    private authService: AuthService
  ) {}

  ngOnInit() {
  }

  openDialog() {
    this.dialog = this.dialogFactoryService.open(
      {
        title: 'You are about to log out',
        template: this.popupTemplate
      },
      {
        width: 300
      }
    )
  }

  closeDialog() {
    this.dialog.close();
  }

  logout() {
    this.authService.logout();
    this.closeDialog();
  }
}
