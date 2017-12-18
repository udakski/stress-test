import { Injectable } from '@angular/core';
import {PieChartConfig} from './pie-chart-config';
import {ChartService} from './chart-service';



@Injectable()
export class GooglePieChartServiceService extends ChartService {
  constructor() {super();}

  public BuildPieChart(elementId: string, data: any[], config: PieChartConfig): void {
    const chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId)); };
    const options = {
      title: config.title,
      pieHole: config.pieHole,
      is3D: true
    };

    this.buildChart(data, chartFunc, options);
  }

}
