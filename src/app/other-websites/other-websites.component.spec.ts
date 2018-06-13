import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWebsitesComponent } from './other-websites.component';

describe('OtherWebsitesComponent', () => {
  let component: OtherWebsitesComponent;
  let fixture: ComponentFixture<OtherWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
