// 
let startButton = document.getElementById("start-btn");
let questionContainerElement = document.getElementById("question-container");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");
let timerEl = document.getElementById("timer");


startButton.addEventListener("click", startGame)
// Create an array of questions, choices and the answers
var questionPossibilities = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        options: ["<javascript>", "<scripted>", "<script>", "<js>"],
        answer: "<script>",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if (i == 5)", "if i = 5", "if i == 5 then"],
        answer: "if (i == 5)",
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”?",
        options: ["<script src=”geek.js”>", "<script href=”geek.js”>", "<script ref=”geek.js”>", "<script name=”geek.js”>"],
        answer: "<script src=”geek.js”>",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        options: ["interface", "throws", "program", "short"],
        answer: "program",
    },
    {
        question: "How does a FOR loop start?",
        options: ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"],
        answer: "for (i = 0; i <= 5; i++)",
    }]

// set numerical variables for functions scores and timers
var score = 0;
var activeQuestion = -1;
var timeRemaining = 75;
var setTimer;
var answer;

function startGame() {
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")

    setTimer();
    setNextQuestion();
}


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
    activeQuestion++;
    answer = question[activeQuestion].answer;

    questionElement.textContent = questionPossibilities[activeQuestion].question;
    answerButtonsElement.innerHTML = "";

    var options = question[activeQuestion].options;

    for (var i = 0; i < options.length; i++) {
        var showNextQuestion = document.createElement("button");

        questionElement.textContent = options[i]
        answerBtn = answerButtonsElement.appendChild(showNextQuestion).setAttribute("class", ".btn");
    }

}
function showQuestion(question) {
    questionElement.innerText = question.question


}







