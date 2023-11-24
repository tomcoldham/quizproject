document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById('switch');
    const questiondisplay = document.getElementById("questiondisplay");
    const answerButton = document.getElementsByClassName("answer-buttons");
    const nextQuestion = document.getElementsByClassName("next-question");
});
const questions = [
    {
        question1: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question2: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question3: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question4: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question5: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question6: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question7: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question8: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question9: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
    {
        question10: "What is the capital of France?",
        choice1: "Paris",
        choice2: "London",
        choice3: "Tokyo",
        choice4: "Amsterdam",
        answer: 1
    },
];

let questionNumber = 0;
let score = 0;

function startQuiz() {
    questionNumber = 0;
    score = 0;
    loadQuestion;
}
    
function loadQuestion() {
questiondisplay.innerHTML = questions[0]
}

startQuiz()