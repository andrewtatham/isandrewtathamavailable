import { TestBed, inject } from '@angular/core/testing';

import { Availability } from './availability';

describe('Availability', () => {

  it('should show \'not available until\' before showAvailableFrom', () => {
    var now = new Date(2019, 0, 1);
    var showAvailableFrom = new Date(2019, 0, 2);
    var actualAvailableFrom = new Date(2019, 0, 4);

    var availability = new Availability(now, showAvailableFrom, actualAvailableFrom);

    expect(availability.isAvailable).toBeFalsy();
    expect(availability.availabilityText)
      .toBe('I\'m not available. I\'m in contract until 4 January 2019. Please do not call.');
  });

  it('should show \'available from\' between showAvailableFrom and actualAvailableFrom', () => {
    var now = new Date(2019, 0, 3);
    var showAvailableFrom = new Date(2019, 0, 2);
    var actualAvailableFrom = new Date(2019, 0, 4);

    var availability = new Availability(now, showAvailableFrom, actualAvailableFrom);

    expect(availability.isAvailable).toBeTruthy();
    expect(availability.availabilityText)
      .toBe('I\'m available from 4 January 2019 for contract .NET development roles, either in Leeds or working remotely.');
  });

  it('should show \'available immediatley\' after actualAvailableFrom', () => {
    var now = new Date(2019, 0, 5);
    var showAvailableFrom = new Date(2019, 0, 2);
    var actualAvailableFrom = new Date(2019, 0, 4);

    var availability = new Availability(now, showAvailableFrom, actualAvailableFrom);

    expect(availability.isAvailable).toBeTruthy();
    expect(availability.availabilityText)
      .toBe('I\'m available immediatley for contract .NET development roles, either in Leeds or working remotely.');
  });

});
