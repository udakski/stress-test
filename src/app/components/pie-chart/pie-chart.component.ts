import { Component, Input, OnInit } from '@angular/core';
import {PieChartConfig} from '../pie-chart-config';
import {GooglePieChartServiceService} from '../google-pie-chart-service.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: 'pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: PieChartConfig;
  @Input() elementId: string;

  constructor(private _pieChartService: GooglePieChartServiceService) {}

  ngOnInit(): void {
    this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
  }
}
