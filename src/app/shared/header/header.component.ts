import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { GenericDialogFactoryService } from 'src/app/shared/generic-dialog/services/generic-dialog-factory.service';
import { GenericDialogService } from 'src/app/shared/generic-dialog/services/generic-dialog.service';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('itemTemplate', {static: false}) popupTemplate: TemplateRef<any>;
  dialog: GenericDialogService;
  subscription: Subscription;
  headerTitle: string = '';

  constructor(
    private dialogFactoryService: GenericDialogFactoryService,
    private authService: AuthService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.subscription = this.headerService.title.pipe(delay(0)).subscribe(value => {
      this.headerTitle = value;
      console.log(this.headerTitle)
    })
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
