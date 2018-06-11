import { Component, OnInit, Input } from '@angular/core';
import { Question, Answer, Winner, Loser } from '../question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: Question;
  winner: Winner;
  loser: Loser;
  hasQuestion:Boolean = true;
  isWinner:Boolean = false;
  isLoser:Boolean = false;


  constructor() {
  }

  ngOnInit() {
  }

  onSelectAnswer(answer: Answer) {
    let result = this.question.evaluateAnswer(answer);

    if (result instanceof Question) {
      this.question = result;
    }

    if (result instanceof Winner) {
      this.question = null;
      this.hasQuestion = false;
      this.winner = result;
      this.isWinner = true;
    }

    if (result instanceof Loser) {
      this.question = null;
      this.hasQuestion = false;
      this.loser = result;
      this.isLoser = true;
    }


  }


}
