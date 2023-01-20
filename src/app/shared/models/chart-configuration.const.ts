import { ChartConfig } from "../generic-chart/models/chart-config.model";

export const CHART_CONFIGURATION: ChartConfig = {
  type: 'bar',
  options: {
    responsive: false,
    aspectRatio: 1,
    scales: {
      x: {},
      y: {
        max: 250
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true
        },
        onClick: (event, legendItem) => {
          console.log(event)
        }
      }
    }
  },
  data: {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
    ],
  }
}
