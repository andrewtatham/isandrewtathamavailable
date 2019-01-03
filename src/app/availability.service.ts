import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
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
    var showAvailableFrom = new Date(2019, 0, 21);

    // For testing 
    // TODO tests
    //now = new Date(2019, 0, 21);

    var isAvailable = now >= showAvailableFrom;

    var availabilityText = "I'm available ";
    let datePipe = new DatePipe('en-GB');

    if (isAvailable) {
      if (now >= actualAvailableFrom) {
        availabilityText += "immediatley";
      }
      else {
        availabilityText += "from " + datePipe.transform(actualAvailableFrom, 'd MMMM yyyy');
      }
      availabilityText += " for contract .NET development roles, either in Leeds or working remotley."
    } else {
      //let autoDate = this.addDays(now, 30);
      //let month = datePipe.transform(autoDate, 'MMMM');
      availabilityText = "I'm not available. I'm in contract until " + datePipe.transform(actualAvailableFrom, 'd MMMM yyyy') + ". Please do not call.";
    }

    let availability = new Availability(
      isAvailable,
      availabilityText);

    return availability;
  };

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }
}
