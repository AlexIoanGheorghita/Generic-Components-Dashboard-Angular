import { ChartData, ChartOptions, ChartType } from "chart.js";

export interface ChartConfig {
  type: ChartType,
  options: ChartOptions,
  data: ChartData,
  plugins?: any[]
}
