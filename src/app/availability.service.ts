import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Availability } from './availability'
@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor() { }
  getAvailability(): Availability {
    let isAvailable = false;
    let month = new DatePipe('en-GB').transform(this.addDays(new Date(), 30), 'MMMM');
    let availableText = "I'm available from February 2019.";
    let unavailableText = "I'm not available. I'm in contract until the end of " + month + ". Please do not call.";

    let availability = new Availability(
      isAvailable,
      availableText,
      unavailableText);

    return availability;
  };

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }
}
