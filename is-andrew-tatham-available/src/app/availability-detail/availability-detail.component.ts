import { Component, OnInit, Input } from '@angular/core';
import { Availability } from '../availability';
import { AvailabilityService } from '../availability.service';

@Component({
  selector: 'app-availability-detail',
  templateUrl: './availability-detail.component.html',
  styleUrls: ['./availability-detail.component.css']
})
export class AvailabilityDetailComponent implements OnInit {
  availability: Availability;
  constructor(private availabilityService:AvailabilityService) {
  }

  ngOnInit() {
    let availability = this.availabilityService.getAvailability();
    this.availability = availability;
  }

}
