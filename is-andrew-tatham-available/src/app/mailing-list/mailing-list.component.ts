import { Component, OnInit } from '@angular/core';
import { Availability } from '../availability';
import { AvailabilityService } from '../availability.service';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.css']
})
export class MailingListComponent implements OnInit {
  availability: Availability;
  constructor(private availabilityService:AvailabilityService) {
  }

  ngOnInit() {
    let availability = this.availabilityService.getAvailability();
    this.availability = availability;
  }

}
