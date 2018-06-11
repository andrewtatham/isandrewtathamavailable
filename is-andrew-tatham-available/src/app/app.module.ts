import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { AvailabilityDetailComponent } from './availability-detail/availability-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionDetailComponent,
    AvailabilityDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
