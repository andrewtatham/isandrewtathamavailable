import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockAppAvailabilityDetail,
        MockAppMailingList,
        MockAppDownloadCv,
        MockAppEmailMe,
        MockAppOtherWebsites,
        MockAppGoogleAnalytics

      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Is Andrew Tatham Available?`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Is Andrew Tatham Available?');
  }));
});



@Component({
  selector: 'app-availability-detail',
  template: ''
})
class MockAppAvailabilityDetail {
}


@Component({
  selector: 'app-mailing-list',
  template: ''
})
class MockAppMailingList {
}

@Component({
  selector: 'app-download-cv',
  template: ''
})
class MockAppDownloadCv {
}

@Component({
  selector: 'app-email-me',
  template: ''
})
class MockAppEmailMe {
}

@Component({
  selector: 'app-other-websites',
  template: ''
})
class MockAppOtherWebsites {
}

@Component({
  selector: 'app-google-analytics',
  template: ''
})
class MockAppGoogleAnalytics {
}

