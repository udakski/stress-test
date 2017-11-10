import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import {MatRadioModule, MatToolbarModule} from '@angular/material'
import {MatStepperModule} from '@angular/material'

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatChipsModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatRadioModule, MatStepperModule,MatToolbarModule,MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
