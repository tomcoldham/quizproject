
document.addEventListener("DOMContentLoaded", function () {
const questions = [
        {
            question: "What is the capital of France?",
            choices: [
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
                { text: "London", correct: false },
                { text: "Sydney", correct: false },
            ]
        },
        {
            question: "What is the capital of Italy?",
            choices: [
                { text: "Paris", correct: false },
                { text: "Rome", correct: true },
                { text: "London", correct: false },
                { text: "Sydney", correct: false },
            ]
        },
    ];

    const questionElement = document.getElementById("question-display");
    const answerButtons = document.getElementsByClassName("answer-buttons")[0];
    const nextQuestion = document.getElementById("nextQuestion");

    let questionNumber = 0;
    let score = 0;

    function startQuiz() {
        questionNumber = 0;
        score = 0;
        loadQuestion();
    }

    function loadQuestion() {
        resetState();
        let currentQuestion = questions[questionNumber];
        let questionNo = questionNumber + 1;
        questionElement.innerHTML = questionNo + " ) " + currentQuestion.question;

        currentQuestion.choices.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("answer-buttons");
            answerButtons.appendChild(button);
        });
    }

    function resetState() {
        nextQuestion.style.display = 'none';
        while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    startQuiz();
});