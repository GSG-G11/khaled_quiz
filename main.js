const progressText = document.querySelector('#question');
const choices = Array.form(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let queryCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
    {
        question: "what the oldest prgramming language?",
        choice1 : 'php',
        choice2 : 'js',
        choice3 : 'simula',
        choice4 : 'java',
        answer: simula,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerHTML = `Qustion ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApplay = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApplay === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApplay)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApplay)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()