import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailabilityDetailComponent } from './availability-detail.component';

describe('AvailabilityDetailComponent', () => {
  let component: AvailabilityDetailComponent;
  let fixture: ComponentFixture<AvailabilityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvailabilityDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
