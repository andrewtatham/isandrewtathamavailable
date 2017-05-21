'use strict';
var i, j, k;
var currentQuestion = 0;
var questionElements = [];


function onY() {
    questionElements[currentQuestion].classList.add('hidden');
    currentQuestion += 1;
    if (currentQuestion >= questionElements.length) {
        var winner = document.getElementById("winner");
        winner.innerHTML = atob("MDc5ODkzNDE4NDU=");
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

function buildQuestionElement(question) {

    var questionElement = document.createElement("div");
    questionElement.classList.add('question');
    questionElement.innerHTML = question.q;
    if (i != 0) {
        questionElement.classList.add('hidden');
    }


    var ul = document.createElement("ul");
    ul.classList.add('buttons');
    for (j = 0; j < question.y.length; j++) {
        var yButton = document.createElement("button");
        yButton.textContent = question.y[j];
        yButton.addEventListener("click", function () {
            onY();
        });
        var li = document.createElement("li");
        li.appendChild(yButton)
        ul.appendChild(li);
    }
    for (j = 0; j < question.n.length; j++) {
        var nButton = document.createElement("button");
        nButton.textContent = question.n[j];
        nButton.addEventListener("click", function () {
            onN();
        });
        var li = document.createElement("li");
        li.appendChild(nButton)
        ul.appendChild(li);
    }
    questionElement.appendChild(ul);


    var fElement = document.createElement("div");
    fElement.classList.add('fail', 'hidden');
    fElement.innerHTML = question.f;
    questionElement.appendChild(fElement);
    return questionElement;

}



function onLoad() {

    var questionsElement = document.getElementById("questions");
    for (i = 0; i < questions.length; i++) {
        var questionElement = buildQuestionElement(questions[i]);
        questionsElement.appendChild(questionElement);
        questionElements.push(questionElement);
    }

}
