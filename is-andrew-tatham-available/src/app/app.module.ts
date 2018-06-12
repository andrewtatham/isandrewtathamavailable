import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { AvailabilityDetailComponent } from './availability-detail/availability-detail.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { DownloadCvComponent } from './download-cv/download-cv.component';
import { OtherWebsitesComponent } from './other-websites/other-websites.component';
import { EmailMeComponent } from './email-me/email-me.component';
import { GoogleAnalyticsComponent } from './google-analytics/google-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionDetailComponent,
    AvailabilityDetailComponent,
    MailingListComponent,
    DownloadCvComponent,
    OtherWebsitesComponent,
    EmailMeComponent,
    GoogleAnalyticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
