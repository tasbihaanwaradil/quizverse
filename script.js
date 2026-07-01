// const Questions = [
//     {
//         question: "Which keyword is used to declare a variable in JavaScript?",
//         options: ["let", "loop", "define", "int"],
//         answer: 0,
//     },
//     {
//         question: "Which company developed JavaScript?",
//         options: ["Google", "Microsoft", "Netscape", "Apple"],
//         answer: 2,
//     },
//     {
//         question: "Which symbol is used for comments in JavaScript?",
//         options: ["//", "<!-- -->", "##", "**"],
//         answer: 0,
//     },
//     {
//         question: "Which method selects an element by ID?",
//         options: [
//             "querySelector()",
//             "getElementById()",
//             "getElementsByClassName()",
//             "selectElement()",
//         ],
//         answer: 1,
//     },
//     {
//         question: "Which operator checks value and datatype?",
//         options: ["==", "=", "===", "!="],
//         answer: 2,
//     },
//     {
//         question: "Which method prints output in the browser console?",
//         options: [
//             "console.log()",
//             "print()",
//             "document.write()",
//             "alert()",
//         ],
//         answer: 0,
//     },
//     {
//         question: "Which loop executes at least one time?",
//         options: ["for", "while", "do...while", "foreach"],
//         answer: 2,
//     },
//     {
//         question: "JavaScript is a ______ language.",
//         options: [
//             "Programming",
//             "Database",
//             "Operating System",
//             "Browser",
//         ],
//         answer: 0,
//     },
//     {
//         question: "Which event occurs when a button is clicked?",
//         options: ["mouseover", "click", "change", "submit"],
//         answer: 1,
//     },
//     {
//         question: "Which method converts JSON into an object?",
//         options: [
//             "JSON.stringify()",
//             "JSON.parse()",
//             "JSON.convert()",
//             "JSON.object()",
//         ],
//         answer: 1,
//     },
// ];


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
