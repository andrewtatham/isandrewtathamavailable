



export class Question {

    questionText: string;
    winner: Winner;
    nextQuestion: Question;
    loser: Loser;
    allAnswers: Array<Answer>;

    constructor(
        questionText: string,
        correctAnswerTexts: Array<string>,
        incorrectAnswerTexts: Array<string>,
        failText: string,
        nextQuestion: Question,
        winText: string,
    ) {
        this.questionText = questionText;
        this.nextQuestion = nextQuestion;

        let correctAnswers = correctAnswerTexts.map(ca => new CorrectAnswer(ca));
        let incorrectAnswers = incorrectAnswerTexts.map(ia => new IncorrectAnswer(ia));

        let allAnswers = correctAnswers.concat(incorrectAnswers);
        this.allAnswers = allAnswers;

        if (winText) {
            this.winner = new Winner(winText);
        }

        this.loser = new Loser(failText);
    }

    evaluateAnswer(answer: Answer): Question | Winner | Loser {
        if (answer.isCorrect) {
            if (this.nextQuestion) {
                return this.nextQuestion;

            }
            else {
                return this.winner;
            }

        }
        else {
            return this.loser
        }

    }


}

export abstract class Result {
    readonly text: string;
    readonly isCorrect: boolean;
    constructor(text: string) {
        this.text = text;
    }

}

export abstract class Answer extends Result {
}

export class CorrectAnswer extends Answer {
    readonly isCorrect: boolean = true;
}

export class IncorrectAnswer extends Answer {
    readonly isCorrect: boolean = false;

}


export class Winner extends Result {
    readonly isCorrect: boolean = true;

}
export class Loser extends Result {
    readonly isCorrect: boolean = false;

}