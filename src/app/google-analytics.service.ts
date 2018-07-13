import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  public emitEvent(eventy: string) {
    (<any>window).gtag('event', eventy);
  }
}
