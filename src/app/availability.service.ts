import { Injectable } from '@angular/core';

import { Availability } from './availability'
@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor() { }
  getAvailability(): Availability {

    var now = new Date();
    // JavaScript counts months from 0 to 11. January is 0. December is 11.
    var actualAvailableFrom = new Date(2019, 1, 1);
    // var showAvailableFrom = this.addDays(actualAvailableFrom, -30); // Doesnt work. Negative number issue?
    var showAvailableFrom = new Date(2019, 0, 10);

    // For testing 
    // TODO tests
    //now = new Date(2019, 0, 21);


    let availability = new Availability(now, showAvailableFrom, actualAvailableFrom);

    return availability;
  };

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }
}
