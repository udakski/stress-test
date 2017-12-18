import {PieChartConfig} from '../pie-chart-config';
import {Component} from '@angular/core';
declare const google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  title = 'Reusable charts sample';

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;
  elementId3: String;

  ngOnInit(): void {
    this.data1 = [['Task', 'Hours per Day'],
      ['Eat',      3],
      ['Commute',  2],
      ['Watch TV', 5],
      ['Video games', 4],
      ['Sleep',    10]];

    this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
    this.elementId1 = 'myPieChart1';

    //Piechart2 Data & Config
    this.data2 = [['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]]

    this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 0.4);
    this.elementId2 = 'myPieChart2';
    this.elementId3 = 'gannet';

  }
  toMilliseconds(minutes) {
    return minutes * 60 * 1000;
  }
}
