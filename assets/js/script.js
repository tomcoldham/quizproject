const question = document.getElementsByClassName("question-text");
const answer = document.getElementsByClassName("answer-buttons");
const nextquestion = document.getElementsByClassName("next-question");

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

let questionNumber = 0;
let score = 0;

function startQuiz() {
    questionNumber = 0;
    score = 0;
    loadQuestion(questions[questionNumber])
}

function loadQuestion() {
    questionNumber++;
    question.innerText = questions.question;

    
    


}

function getnextQuestion() {

}

startQuiz ()