import { Injectable } from "@angular/core";
import { ChartTypeRegistry } from "chart.js";
import { CHART_CONFIGURATION } from "../../models/chart-configuration.const";
import { ChartConfig } from "../models/chart-config.model";

@Injectable({ providedIn: 'root' })
export class GenericChartService {
  chartConfig: ChartConfig = CHART_CONFIGURATION;

  constructor() {}

  setType(type: keyof ChartTypeRegistry) {
    this.chartConfig.type = type;
  }

  setLabels(data: any[], columnName: string) {
    // let newConfig: ChartConfig = Object.assign({}, config);
    this.chartConfig.data.labels = data.map(item => item[columnName]);
  }

  setDatasets(data: any[], columnsToUse: string[]) {
    let datasets = [];

    for (let column of columnsToUse) {
      datasets.push(
        {
          data: [...data.map(item => item[column])],
          label: column
        }
      )
    }

    this.chartConfig.data.datasets = datasets;
  }

  configureScaleTicks(scale: string, unit: string, amount: number) {
    this.chartConfig.options.scales![scale]!.ticks = {
      callback: value => `${<number>value / amount} ${unit}`
    }
  }

  getChartConfig(): ChartConfig {
    return this.chartConfig;
  }
}
