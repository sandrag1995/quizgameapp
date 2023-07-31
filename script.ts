document.addEventListener("DOMContentLoaded", () => {
type QuestionType = {
    question: string
    answers: string[],
    correct: number
}

const questionText = document.querySelector(".questionText") as HTMLElement
const answerButtons = document.querySelectorAll(".grid > div") as NodeListOf<HTMLElement>
const gameEl = document.querySelector(".game") as HTMLElement
const overEl = document.querySelector(".over") as HTMLElement
const pointsValue = document.querySelector(".points") as HTMLElement

const questions: QuestionType[] = [
    {
        question: "Stapes are bones that can be found in which part of the human body? Ear, Nose, Throat, Spine",
        answers: [
            "Nose",
            "Ear",
            "Throat",
            "Spine"
        ],
        correct: 1
    },
    {
        question: "Which planet is given its reddish appearance by Iron Oxide? Venus, Earth, Mars, Saturn",
        answers: [
            "Venus",
            "Earth",
            "Mars",
            "Saturn"
        ],
        correct: 2
    },
    {
        question: "Mimas is a moon of which planet? Saturn, Jupiter, Neptune, Uranus",
        answers: [
            "Saturn",
            "Jupiter",
            "Neptune",
            "Uranus"
        ],
        correct: 0
    },

    {
        question: "The Borealis Basin can be found on which planet? Mars, Mercury, Venus, Earth",
        answers: [
            "Mars",
            "Mercury",
            "Venus",
            "Earth"
        ],
        correct: 0
    },

    {
        question: "Which planet has an average surface temperature of 462 degrees Celsius? Mercury, Jupiter, Venus, Mars",
        answers: [
            "Mars",
            "Mercury",
            "Venus",
            "Jupiter"
        ],
        correct: 2
    },

]
let questionIndex:number = 0
let correctAnswers:number = 0

answerButtons.forEach((el, index) => [
    el.onclick = () => {
        const correctAnswer = questions[questionIndex].correct
        if(correctAnswer === index) {
            correctAnswers++
        }
        questionIndex++
        if(questionIndex === questions.length) {
            gameEl.style.display = "none"
            overEl.style.display = "block"
            pointsValue.innerHTML = `Points: ${correctAnswers}/${questions.length}`
            return
        }
        appendQuestion()
    }
])


function appendQuestion() {

    questionText.innerHTML = questions[questionIndex].question

    answerButtons.forEach((el, index) => {
        el.innerHTML = questions[questionIndex].answers[index]
    })
}
appendQuestion()

});
