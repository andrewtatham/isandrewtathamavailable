'use strict';
var i, j, k;
var currentQuestion = 0;
var questionElements = [];
var foo = 'My telephone number is ';
var bar = 'MDc5ODkzNDE4NDU=';

function emitEvent(action, category, label) {
  gtag('event', action, {
    'event_category': category,
    'event_label': label
  });
  // console.log(action, category, label);
}

function buildWinner() {
  var winner = $('#winner');
  winner.addClass('alert alert-success clearfix');
  var phoneText = $('<h1><i class="fa fa-check"></i> ' + foo + '<b>' + atob(bar) + '</b></h1>');
  winner.append(phoneText);
  return winner;
}


function onY() {
  $(questionElements[currentQuestion]).hide();
  currentQuestion += 1;
  if (currentQuestion >= questionElements.length) {
    var winner = buildWinner();
    $(winner).show();
    emitEvent("win", "quiz_result", $(winner).text());
  } else {
    $(questionElements[currentQuestion]).show();
  }
}

function onN() {
  var q = questionElements[currentQuestion];
  $(q).find('.buttons').hide();
  var loser = $(q).find('.fail');
  loser.show();
  emitEvent("lose", "quiz_result", loser.text());
}

function buildButton(text, classlist, click) {
  var button = document.createElement("button");
  button.classList.add('btn');
  button.classList.add(classlist);
  button.setAttribute('type', 'button');
  button.textContent = text;
  button.addEventListener("click", click);
  return button;
}

function buildQuestion(question) {
  var questionElement = $('<div class="question"><p>' + question.q + '</p></>');
  if (i != 0) {
    $(questionElement).hide();
  }
  return questionElement;
}

function buildButtons(question) {
  var buttonGroup = document.createElement("div");
  buttonGroup.setAttribute('role', 'group');
  buttonGroup.classList.add('buttons');
  for (j = 0; j < question.y.length; j++) {

    var yButtonText = question.y[j];
    var yButton = buildButton(yButtonText, 'btn-success', function () {
      onY();
      emitEvent(
        "correct",
        "button_click",
        yButtonText);
    });
    buttonGroup.appendChild(yButton);
  }
  for (j = 0; j < question.n.length; j++) {
    var nButtonText = question.n[j];
    var nButton = buildButton(nButtonText, 'btn-danger', function () {
      onN();
      emitEvent(
        "incorrect",
        "button_click",
        nButtonText);
    });
    buttonGroup.appendChild(nButton);
  }
  return buttonGroup;
}


function buildFailElement(question) {

  var failElement = $('<div class="fail alert alert-danger clearfix">');
  var failText = '<h1><i class="fa fa-times"></i> ' + question.f + '</h1>';
  failElement.append(failText);
  $(failElement).hide()
  return failElement;
}

function buildQuestionElement(question) {
  var questionElement = buildQuestion(question);
  var buttons = buildButtons(question);
  questionElement.append(buttons);
  var failElement = buildFailElement(question);
  questionElement.append(failElement);
  return questionElement;

}

function buildList(items) {
  var html = '<ul>';
  $.each(items, function (i, x) {
    html += '<li>' + x + '</li>';
  });
  html += '</ul>'
  return html;
}

function onLoad() {
  if (isAvailable) {
    $(".availableFrom").html(availableFrom);
    $(".available").show();
    $(".unavailable").hide();
    var questionsElement = $("#questions");
    for (i = 0; i < questions.length; i++) {
      var questionElement = buildQuestionElement(questions[i]);
      questionsElement.append(questionElement);
      questionElements.push(questionElement);
    }

  } else {
    $(".inContractUntil").html(inContractUntil);
    $(".available").hide();
    $(".unavailable").show();
  }

  $(".lookingFor").html(buildList(lookingFor));
  $(".locations").html(buildList(locations));
  $(".notLookingFor").html(buildList(notLookingFor));
  $(".notLocations").html(buildList(notLocations));

}
onLoad();
