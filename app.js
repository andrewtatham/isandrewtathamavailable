'use strict';
var i, j, k;
var currentQuestion = 0;
var questionElements = [];

function buildWinner() {
    var winner = document.getElementById("winner");
    winner.classList.add("bg-success");

    var winnerIcon = document.createElement("span")
    winnerIcon.classList.add('glyphicon', 'glyphicon-ok', 'pull-left');
    winner.appendChild(winnerIcon);

    var winnerText = document.createElement("p")
    winnerText.classList.add('lead');
    winnerText.innerHTML = "Congratulations. You have successfully identified that I am looking for " + lookingFor + ". Here is my phone number:";
    winner.appendChild(winnerText);

    var phoneIcon = document.createElement("span")
    phoneIcon.classList.add('glyphicon', 'glyphicon-earphone', 'pull-left');
    winner.appendChild(phoneIcon);

    var winnerText = document.createElement("p")
    winnerText.classList.add('lead');
    winnerText.innerHTML = atob("MDc5ODkzNDE4NDU=");
    winner.appendChild(winnerText);

    return winner;
}


function onY() {
    questionElements[currentQuestion].classList.add('hidden');
    currentQuestion += 1;
    if (currentQuestion >= questionElements.length) {
        var winner = buildWinner();
        winner.classList.remove("hidden");
    } else {
        questionElements[currentQuestion].classList.remove('hidden');
    }
}

function onN() {
    var q = questionElements[currentQuestion];
    var buttons = q.getElementsByClassName("buttons")[0];
    buttons.classList.add("hidden");
    var fail = q.getElementsByClassName("fail")[0];
    fail.classList.remove("hidden");
}

function buildButton(text, click) {
    var button = document.createElement("button");
    button.classList.add('btn', 'btn-primary');
    button.textContent = text;
    button.addEventListener("click", click);
    return button;
}

function buildQuestion(question) {
    var questionElement = document.createElement("div");
    questionElement.classList.add('question');
    if (i != 0) {
        questionElement.classList.add('hidden');
    }

    var questionText = document.createElement("p")
    questionText.classList.add('lead');
    questionText.innerHTML = question.q;
    questionElement.appendChild(questionText);

    return questionElement;
}

function buildButtons(question) {
    var ul = document.createElement("ul");
    ul.classList.add('buttons', 'list-unstyled', 'list-inline');
    for (j = 0; j < question.y.length; j++) {
        var yButton = buildButton(question.y[j], function () {
            onY();
        });
        var li = document.createElement("li");
        li.appendChild(yButton)
        ul.appendChild(li);
    }
    for (j = 0; j < question.n.length; j++) {
        var nButton = buildButton(question.n[j], function () {
            onN();
        });
        var li = document.createElement("li");
        li.appendChild(nButton)
        ul.appendChild(li);
    }
    return ul;
}


function buildFailElement(question) {

    var failElement = document.createElement("div");
    failElement.classList.add('fail', 'hidden', 'bg-danger');


    var failIcon = document.createElement("span")
    failIcon.classList.add('glyphicon', 'glyphicon-remove', 'pull-left');
    failElement.appendChild(failIcon);

    var failText = document.createElement("p")
    failText.classList.add('lead');
    failText.innerHTML = question.f;
    failElement.appendChild(failText);

    return failElement;
}

function buildQuestionElement(question) {

    var questionElement = buildQuestion(question);

    var buttons = buildButtons(question);
    questionElement.appendChild(buttons);

    var failElement = buildFailElement(question);
    questionElement.appendChild(failElement);
    return questionElement;

}



function onLoad() {

    var lookingForElements = document.getElementsByClassName("lookingFor");
    for (i = 0; i < lookingForElements.length; i++) {
        lookingForElements[i].innerHTML = lookingFor;
    }

    var questionsElement = document.getElementById("questions");
    for (i = 0; i < questions.length; i++) {
        var questionElement = buildQuestionElement(questions[i]);
        questionsElement.appendChild(questionElement);
        questionElements.push(questionElement);
    }

}
