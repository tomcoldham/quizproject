const question = document.getElementsByClassName(questiontext);
const answer = document.getElementsByClassName(answerbuttons);
const nextnextquestion = document.getElementsByClassName(nextquestion);

let questions = [
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choice1: Paris,
        choice2: London,
        choice3: Tokyo,
        choice4: Amsterdam,
        answer: 1
    },
];

let questionNumber = 0;
let score = 0;

function startQuiz () {
questionNumber = 0;
score = 0;
loadQuestion;
}