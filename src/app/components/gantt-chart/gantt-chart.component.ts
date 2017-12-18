import {Component, Input, OnInit} from '@angular/core';
import {GanttChartConfig} from '../gantt-chart-config';
import {GanttChartService} from '../gantt-chart.service';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})
export class GanttChartComponent implements OnInit {

 @Input() elementId: string;

  constructor(private _ganttChartService: GanttChartService) {}

  ngOnInit(): void {
    this._ganttChartService.BuildGanntChart(this.elementId);
  }

}
