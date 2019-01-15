import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionDetailComponent } from './question-detail.component';
import { MockQuestion } from '../mockquestion';


describe('QuestionDetailComponent', () => {
  let component: QuestionDetailComponent;
  let fixture: ComponentFixture<QuestionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionDetailComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDetailComponent);
    component = fixture.componentInstance;
    component.question = new MockQuestion();
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
