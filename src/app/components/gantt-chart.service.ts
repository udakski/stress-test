import { Injectable } from '@angular/core';
import {ChartService} from './chart-service';
import {GanttChartConfig} from './gantt-chart-config';

declare const google: any;
@Injectable()
export class GanttChartService extends ChartService{

  constructor() {super();}

  public BuildGanntChart(elementId: string): void {

    const chartFunc = () => { return new google.visualization.Gantt(document.getElementById(elementId)); };
    const options = {
      height: 275,
      gantt: {
        defaultStartDateMillis: new Date(2015, 3, 28)
      }
    };

    this.buildChartFromTable(chartFunc, options);
  }


}
