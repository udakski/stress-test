import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import {
  MatRadioModule, MatToolbarModule, MatSliderModule, MatProgressSpinnerModule,
  MatDialogModule, MatIconModule
} from '@angular/material'
import {MatStepperModule} from '@angular/material'

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatChipsModule} from '@angular/material';
import {ResultModalComponent} from "./components/result-modal/result-modal.component";


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,ResultModalComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatRadioModule, MatStepperModule,MatToolbarModule,MatDialogModule,
    MatChipsModule, MatSliderModule, MatProgressSpinnerModule,MatIconModule
  ],
  providers: [],
  entryComponents: [
    ResultModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
