import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getFirstQuestion(): Question{
    let foo = 'My telephone number is ';
    let bar = 'MDc5ODkzNDE4NDU=';

    let jobType = ['Contract'];
    let notJobType = ['Permanent'];

    let locations = ["Leeds", "Remote"]
    let notLocations = ['Manchester', 'York', 'Sheffield', 'Halifax', 'Huddersfield', 'London', 'Europe', "The rest of the world"];

    let lookingFor = ['Microsoft C#.NET', 'ASP.NET MVC', 'HTML/CSS/Javascript', 'Python', 'Microsoft SQL Server'];
    let notLookingFor = ['Java', 'PHP', 'Ruby', 'C', 'C++', 'Fortran', 'Swift', 'Basic', 'Kotlin', 'R', 'COBOL', 'Erlang', 'Lisp', 'Objective-C'];

    let wintext = foo + atob(bar);

    let questionThree = new Question(
      'What technology is used?',
      lookingFor,
      notLookingFor,
      "I'm not looking for roles in that technology",
      null,
      wintext);
    let questionTwo = new Question(
      'Where is this role based?',
      locations,
      notLocations,
      'I am only considering roles in the immediate Leeds area, or working remotley.',
      questionThree,
      null);
    let questionOne = new Question(
      'Which type of role is this?',
      jobType,
      notJobType,
      'I am only considering contract roles.',
      questionTwo,
      null);

    return questionOne;
  }
}
