// Default prompt containing Coding Quiz Challenge, descripton and start button
// When I click the start button, then the timer starts and the first question is displayed
let startButton = document.getElementById("start-btn");
let questionContainerElement = document.getElementById("question-container");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started");
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(currentQuestionIndex++)
}

function showQuestion(question) {
    questionContainerElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer() {

}

let questions = [
    {
        question: "what is 2+2",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    }
]