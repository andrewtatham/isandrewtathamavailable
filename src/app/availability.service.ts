import { Injectable } from '@angular/core';
import { Availability } from './availability'
@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor() { }
  getAvailability(): Availability {
    let isAvailable = false;
    let availableText = "I'm available immediately";
    let unavailableText = "I'm not available right now.";

    let availability = new Availability(
      isAvailable,
      availableText,
      unavailableText);

    return availability;
  };
}
