import { Injectable } from '@angular/core';
import { Availability } from './availability'
@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor() { }
  getAvailability(): Availability {
    let isAvailable = false;
    let availableText = "I'm available immediately.";
    let unavailableText = "I'm not available. I'm in contract until the end of August. Please do not call.";

    let availability = new Availability(
      isAvailable,
      availableText,
      unavailableText);

    return availability;
  };
}
