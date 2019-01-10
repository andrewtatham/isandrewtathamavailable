import { TestBed, inject } from '@angular/core/testing';

import { Availability } from './availability';

describe('Availability', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Availability]
    });
  });

  it('should be created', inject([Availability], (service: Availability) => {
    expect(service).toBeTruthy();
  }));

});
