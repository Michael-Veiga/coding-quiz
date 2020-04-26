let startButton = document.getElementById("start-btn");
let questionContainerElement = document.getElementById("question-container");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");
let timerEl = document.getElementById("timer");
let submitScoreEl = document.querySelector("submit");
let userNameInput;
let submitBtn = document.querySelector("button.submitButton")

startButton.addEventListener("click", startGame)

// Create an array of questions, choices and the answers
var questionPossibilities = [
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["Math.round(7.25)", "round(7.25)", "rnd(7.25)", "Math.rnd(7.25)s"],
        answer: "Math.round(7.25)"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if (i == 5)", "if i = 5", "if i == 5 then"],
        answer: "if (i == 5)"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["x", "*", "=", "-"],
        answer: "="
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        options: ["interface", "throws", "program", "short"],
        answer: "program"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onmouseclick", "onclick", "onmouseover"],
        answer: "onclick"
    },
];


// set numerical variables for functions scores and timers
var score = 0;
var activeQuestion = -1;
var timeRemaining = 76;
var setTimer;


// When I click start game: 
//  1. hide the start game button and display the questionContainerElement
function startGame() {
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    // 2.the timer starts counting down and the next question is displayed
    setTimer();
    // showQuestion();
    setNextQuestion();
}

// The timer will count down from 75 in increments of 1000 miliseconds
// Until, time remaining is 0 or the active question is equal to the question arrays length
function setTimer() {
    var countdown = setInterval(function () {
        timeRemaining--;
        timerEl.textContent = timeRemaining;

        if (timeRemaining === 0 || activeQuestion === questionPossibilities.length) {
            clearInterval(countdown);
            setTimeout(displayScore, 500)
        }

    }, 1000);
}

function setNextQuestion() {
    resetState()
    activeQuestion++;
    answer = questionPossibilities[activeQuestion].options

    questionElement.textContent = questionPossibilities[activeQuestion].question
    answerButtonsElement.innerhtml = "";

    var options = questionPossibilities[activeQuestion].options;

    for (var q = 0; q < options.length; q++) {
        var buttonEl = document.createElement("button");

        buttonEl.textContent = options[q]
        buttonEl.setAttribute("value", questionPossibilities[0].options[q]);
        buttonEl.setAttribute("class", "btn choice");
        answerButtonsElement.appendChild(buttonEl);

        document.querySelector(".choice").addEventListener("click", function () {
            console.log(this.value)

        })
    }

    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)

        }
    }

    function displayScore() {
        document.getElementbyId("submit-score")
        userScoreEl.textContent = "Your score is " + timeRemaining;
    }

    function addScore() {
        userNameInput = document.getElementById("username").value

        var newScore = {
            name: userInput,
            score: timeRemaining
        };

        var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

        highScores.push(newScore)

        localStorage.setItem("highScores", JSON.stringify(highScores));
    }

    function hideFeedback() {
        var pEl = document.getElementsByClassName("feedback")[0]
        pEl.getElementsByClassName.display = "none"
    }

    function showFeedback() {
        var pEl = document.getElementsByClassName("feedback")[0]
        pEl.removeAttribute = ("style")
    }

    answerButtonsElement.addEventListener("click", function (event) {
        var pEl = document.getElementsByClassName("feedback")[0]
        // evaluating user choices
        if (answer === event.target.textContent) {
            pEl.innerHTML = "Correct!";

        } else {
            pEl.innerHTML = "Incorrect!";

        }
        setNextQuestion();
    });
}