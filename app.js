'use strict';
var i, j, k;
var currentQuestion = 0;
var questionElements = [];

function buildWinner() {
    var winner = document.getElementById("winner");
    winner.classList.add('alert', "alert-success");

    var winnerIcon = document.createElement("span")
    winnerIcon.classList.add('glyphicon', 'glyphicon-ok', 'pull-left');
    winner.appendChild(winnerIcon);

    var winnerText = document.createElement("p")
    winnerText.innerHTML = "Congratulations. You have successfully identified that I am looking for " + lookingFor + ".";
    winner.appendChild(winnerText);



    var phoneIcon = document.createElement("span")
    phoneIcon.classList.add('glyphicon', 'glyphicon-earphone', 'pull-left');
    winner.appendChild(phoneIcon);

    var phoneText = document.createElement("p")
    phoneText.classList.add('lead');
    phoneText.innerHTML = 'My telephone number is ' + atob("MDc5ODkzNDE4NDU=");
    winner.appendChild(phoneText);

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
    button.setAttribute('type', 'button');
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
    var buttonGroup = document.createElement("div");
    buttonGroup.setAttribute('role', 'group');
    buttonGroup.classList.add('buttons', 'btn-group');
    for (j = 0; j < question.y.length; j++) {
        var yButton = buildButton(question.y[j], function () {
            onY();
        });
        buttonGroup.appendChild(yButton);
    }
    for (j = 0; j < question.n.length; j++) {
        var nButton = buildButton(question.n[j], function () {
            onN();
        });
        buttonGroup.appendChild(nButton);
    }
    return buttonGroup;
}


function buildFailElement(question) {

    var failElement = document.createElement("div");
    failElement.classList.add('fail', 'hidden', 'alert', 'alert-danger');

    var failIcon = document.createElement("span")
    failIcon.classList.add('glyphicon', 'glyphicon-remove', 'pull-left');
    failElement.appendChild(failIcon);

    var failText = document.createElement("p")
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

    if (isAvailable) {
        document.getElementById("availableFrom").innerHTML = availableFrom;
        document.getElementById("available").classList.remove("hidden");
    } else {
        document.getElementById("inContractUntil").innerHTML = inContractUntil;
        document.getElementById("unavailable").classList.remove("hidden");
    }



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
