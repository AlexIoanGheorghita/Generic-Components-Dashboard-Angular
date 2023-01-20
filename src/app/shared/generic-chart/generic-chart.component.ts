import { Component, ViewChild, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfig } from './models/chart-config.model';

type ChartEventType = { event: ChartEvent, active: {}[] };

@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() chartConfig: ChartConfig;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.chartConfig);
    this.changeDetectorRef.detectChanges();
  }

  chartClicked({ event, active }: ChartEventType) {
    console.log(event, active);
  }

  chartHovered({ event, active }: ChartEventType) {
    console.log(event, active);
  }
}
