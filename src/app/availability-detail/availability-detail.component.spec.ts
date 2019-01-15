import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailabilityDetailComponent } from './availability-detail.component';


describe('AvailabilityDetailComponent', () => {
  let component: AvailabilityDetailComponent;
  let fixture: ComponentFixture<AvailabilityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AvailabilityDetailComponent,
        MockQuizComponent
      ]
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

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('Is Andrew Tatham Available?');
  }));

});


@Component({
  selector: 'app-quiz',
  template: ''
})
class MockQuizComponent {
}

