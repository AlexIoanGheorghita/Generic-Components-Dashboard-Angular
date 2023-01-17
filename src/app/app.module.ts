import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { GenericDialogService } from './shared/generic-dialog/services/generic-dialog.service';
import { GenericDialogFactoryService } from './shared/generic-dialog/services/generic-dialog-factory.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './components/details/details.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        DetailsComponent,
        AddItemComponent,
        EditItemComponent,
        NotFoundComponent
    ],
    providers: [
      GenericDialogService,
      GenericDialogFactoryService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        NgChartsModule
    ]
})
export class AppModule { }
