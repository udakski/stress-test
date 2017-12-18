import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import {
  MatRadioModule, MatToolbarModule, MatSliderModule, MatProgressSpinnerModule,
  MatDialogModule, MatIconModule, MatDialogTitle
} from '@angular/material'
import {MatStepperModule} from '@angular/material'

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material';
import {ResultModalComponent} from './components/result-modal/result-modal.component';
import {GanttChartComponent} from './components/gantt-chart/gantt-chart.component';
import {PieChartComponent} from './components/pie-chart/pie-chart.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {GanttChartService} from './components/gantt-chart.service';
import {GooglePieChartServiceService} from './components/google-pie-chart-service.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,ResultModalComponent, DashboardComponent, PieChartComponent, GanttChartComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatRadioModule, MatStepperModule,MatToolbarModule,MatDialogModule,
    MatChipsModule, MatSliderModule, MatProgressSpinnerModule,MatIconModule
  ],
  providers: [GooglePieChartServiceService, GanttChartService],
  entryComponents: [
    ResultModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
