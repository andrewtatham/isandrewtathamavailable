import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestion: Question;

  constructor(private quizService:QuizService) {
  }

  ngOnInit() {
    let questionOne = this.quizService.getFirstQuestion();
    this.currentQuestion = questionOne;
  }

}
