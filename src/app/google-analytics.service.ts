import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  public emitEvent(action: string, category:string = null, label:string = null) {
    (<any>window).gtag('event', action,  {
      'event_category' : category,
      'event_label' : label
    });
  }
}
