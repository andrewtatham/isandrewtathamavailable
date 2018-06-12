import { Injectable } from '@angular/core';
import { Availability } from './availability'
@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor() { }
  getAvailability(): Availability {
    let isAvailable = true;
    let availableText = "I'm available immediately";
    let unavailableText = "I'm in contract until [date]";

    let availability = new Availability(
      isAvailable,
      availableText,
      unavailableText);

    return availability;
  };
}
