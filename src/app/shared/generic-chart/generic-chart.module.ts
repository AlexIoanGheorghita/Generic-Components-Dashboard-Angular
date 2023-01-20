import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenericChartComponent } from './generic-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    NgChartsModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  declarations: [
    GenericChartComponent
  ],
  exports: [
    GenericChartComponent,
    NgChartsModule
  ]
})
export class GenericChartModule {}
