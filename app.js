'use strict';
var i, j, k;
var currentQuestion = 0;

function OnAnswer() {
    currentQuestion += 1;
    var questions = document.getElementsByClassName("q");

    for (k = 0; k < questions.length; k++) {
        var question = questions[k];
        var n = question.getElementsByClassName("n")[0];

        if (k === currentQuestion) {
            question.classList.remove("hidden");
            n.classList.add("hidden");
        } else {
            question.classList.add("hidden");
        }
    }
}

function OnButtonClick(question, button) {
    var a = button.getAttribute("data");
    var n = question.getElementsByClassName("n")[0];
    if (a === "y") {
        question.classList.add("hidden");
        n.classList.add("hidden");
        OnAnswer();
    } else if (a === "n") {
        question.classList.remove("hidden");
        n.classList.remove("hidden");
    } else if (a === "f") {
        var v = question.getElementsByClassName("f")[0];
        f.classList.remove("hidden");

        question.classList.add("hidden");
        n.classList.add("hidden");
        OnAnswer();
    }

}

function onLoad() {

    var questions = document.getElementsByClassName("q");
    for (i = 0; i < questions.length; i++) {
        var question = questions[i];
        var buttons = question.getElementsByTagName("button");
        for (j = 0; j < buttons.length; j++) {
            var button = buttons[j]
            button.addEventListener("click", function () {
                OnButtonClick(question, button);
            });
        }


    }

}
