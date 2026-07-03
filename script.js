const Questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["let", "loop", "define", "int"],
        answer: 0,
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Microsoft", "Netscape", "Apple"],
        answer: 2,
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "##", "**"],
        answer: 0,
    },
    {
        question: "Which method selects an element by ID?",
        options: [
            "querySelector()",
            "getElementById()",
            "getElementsByClassName()",
            "selectElement()",
        ],
        answer: 1,
    },
    {
        question: "Which operator checks value and datatype?",
        options: ["==", "=", "===", "!="],
        answer: 2,
    },
    {
        question: "Which method prints output in the browser console?",
        options: [
            "console.log()",
            "print()",
            "document.write()",
            "alert()",
        ],
        answer: 0,
    },
    {
        question: "Which loop executes at least one time?",
        options: ["for", "while", "do...while", "foreach"],
        answer: 2,
    },
    {
        question: "JavaScript is a ______ language.",
        options: [
            "Programming",
            "Database",
            "Operating System",
            "Browser",
        ],
        answer: 0,
    },
    {
        question: "Which event occurs when a button is clicked?",
        options: ["mouseover", "click", "change", "submit"],
        answer: 1,
    },
    {
        question: "Which method converts JSON into an object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()",
        ],
        answer: 1,
    },
];


//Selected Screens
const startScreen = document.getElementById("startScreen")          //Start Screen
const quizScreen = document.getElementById("quizScreen")            //Quiz Screen
const resultScreen = document.getElementById("resultScreen")        //Result Screen

//Selected Buttons
const startBtn = document.getElementById("startBtn")                //Start Button
const previousBtn = document.getElementById("prevBtn")              //Previous Button
const nextBtn = document.getElementById("nextBtn")                  //Next Button
const restartBtn = document.getElementById("restartBtn")            //Restart Button

// Selected Quiz Screen Elements
const question = document.getElementById("question")                //Questions
const options = document.getElementById("options")                  //Options
const questionNumber = document.getElementById("questionNumber")    //Question No 1,2,3
const timer = document.getElementById("timer")                      //Timer

//Selected score card screen elements
const scoreTotal = document.getElementById("score")
const correctAnswers = document.getElementById("correct")
const wrongAnswers = document.getElementById("wrong")
const unanswered = document.getElementById("unanswered")
const percentage = document.getElementById("percentage")
const review = document.getElementById("review")

//Variables
let currentQuestion = 0
let userAnswers = []
let timeLeft = 60
let interval

//Start Button Functionality
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden")
    quizScreen.classList.remove("hidden")

    showQuestion()
})

const showQuestion = () => {
    clearInterval(interval)
    timeLeft = 60

    startTimer()

    //show questions
    const q = Questions[currentQuestion]

    //show question no
    questionNumber.innerText = `Question ${currentQuestion + 1}`

    //show question
    question.innerText = q.question


    options.innerHTML = " " //first empty the options innerHTML then append child in it
    //show options
    q.options.map((option, index) => {

        //create option buttons inside options div
        const btn = document.createElement("button")
        btn.innerText = option

        //apply styling to button
        btn.classList.add("option")         //option buttons will not show here we need to append child first

        if (userAnswers[currentQuestion] === index) {
            btn.classList.add("selected")
        }

        //user click on button it will store index value of selected option 
        btn.onclick = () => selectAnswer(index)

        //Append "btn" child to parent "options" it will show options
        options.appendChild(btn)


    })

}

const startTimer = () => {
    timer.innerText = timeLeft

    interval = setInterval(() => {
        timeLeft--
        timer.innerText = timeLeft

        if (timeLeft === 0) {
            clearInterval(interval)
            nextQuestion()
        }
    }, 1000)
}

let nextQuestion = () => {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++

        showQuestion()
    } else {
        showResult()

    }
}

//nextBtn
nextBtn.addEventListener("click", nextQuestion)

//previousBtn
previousBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--
    }
    showQuestion()

})

const selectAnswer = (index) => {
    userAnswers[currentQuestion] = index
    showQuestion()
}

const showResult = () => {

    //clear interval first
    clearInterval(interval)

    //hide quiz screen
    quizScreen.classList.add("hidden")

    //show result screen
    resultScreen.classList.remove("hidden")

    //variables
    let correctCount = 0
    let wrongCount = 0
    let unansweredCount = 0

    //review answers
    review.innerHTML = ""

    Questions.map((question, index) => {
        if (userAnswers[index] === undefined) {
            unansweredCount++
        } else if (userAnswers[index] === question.answer) {
            correctCount++
        } else {
            wrongCount++
        }

        //Apend Child inside review parent
        review.innerHTML += `
    <div class = "reviewItem">
        <h3>Question ${index + 1}</h3>
        <p>${question.question}</p>

        <p> Your Answers:
            <span class ="${userAnswers[index] === question.answer ? "correctAnswer" : "wrongAnswer"} ">${userAnswers[index] === undefined ? "Not Answered" : question.options[userAnswers[index]]}</span>
        </p>


    </div>
    `
    })
}