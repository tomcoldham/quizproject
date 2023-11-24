document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById('switch');
    
});
const questions = [
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
];

const questionElement = document.getElementById("question-display");
const answerButton = document.getElementsByClassName("answer-buttons");
const nextQuestion = document.getElementsByClassName("next-question");

let questionNumber = 0;
let score = 0;

function startQuiz() {
    questionNumber = 0;
    score = 0;
    loadQuestion();
}
    
function loadQuestion() {
    let currentQuestions  = questions[questionNumber];
    questionElement.innerHTML = currentQuestions.questions;
}

startQuiz()