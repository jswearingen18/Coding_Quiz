// variables to pull from HTML
var timerEl = document.getElementById("timer");
var beginTimer = document.getElementById("beginQ");
var quizHeader = document.getElementById("quizIntro");
var quizRules = document.querySelector("#quiz");
var quizQues = document.getElementById("quizQuestions");
var scoreboard = document.querySelector("#scoreBoard");
//var ansBtn = document.getElementsByClassName("ans-btn");
// variable to create click event for all answer buttons
var timeLeft = 60;;
let answersA = document.getElementById("answerA");
let answersB = document.getElementById("answerB");
let answersC = document.getElementById("answerC");
let answersD = document.getElementById("answerD");
// Variables for scoreboard
let wins = 0;
let losses = 0;
// Click Function to begin timer and quiz
beginTimer.addEventListener("click", e => {
    countdown ();
    // clears quizHeader area for quiz 
    quizHeader.textContent = " ";
    // clears rules out to display quiz
    quizRules.textContent = " ";
    question1();
}) 
//ansBtn.addEventListener("click", e => {
    //checkAnswer ();
//})
// Array for questions and options
var quizQuestions = [
    {question: "What does CSS stand for?",
     options: ["A. Color Selector Sheet", "B. Cascading Style Sheet", "C. Colaborating Styling Sheet", "D. Computer Styling Sheet"],
     answer: "B. Cascading Style Sheet"},
    {question: "What does URL stand for?",
     options: ["A. Ultimate Response Listening", "B. Unlimited Review Logistics", "C. Uniform Resource Locator", "D. Ur Response Logistics"],
     answer: "C. Uniform Resource Locator"},
    {question: "Which of these are a primitive Data type?",
     options: ["A. JSON", "B. Array", "C. Class", "D. String"],
     answer: "D. String"},
    {question: "Which of these are a legacy computer language?",
     options: ["A. JQUERY", "B. BootStrap", "C. Java", "D. C++"],
     answer: "A. JQUERY"},
    {question: "Which of these are used to display coding projects?",
     options: ["A. Twitter", "B. Facebook", "C. Indeed", "D. Github"],
     answer: "D. Github"},
    {question: "Which of these is a container element?",
     options: ["A. <HTML>", "B. <title>", "C. <Span>", "D. <head>"],
     answer: "C. <Span>"},
    {question: "Which of these real computer languages?",
     options: ["A. Bootsstrap", "B. Boot-Strap", "C. Bootstrap", "D. Boots_Strap"],
     answer: "C. Bootstrap"}
]
//function checkAnswer () { 
    //quizQues.textContent = quizQuestions[i].question;
    //answersA.textContent = quizQuestions[i].options[0];
    //answersB.textContent = quizQuestions[i].options[1];
    //answersC.textContent = quizQuestions[i].options[2];
    //answersD.textContent = quizQuestions[i].options[3];
    //var buttonEl = target;
    //for (var i = 0; i < quizQuestions.length; i++) {
        //quizQues.textContent = quizQuestions[i].question;
        //answersA.textContent = quizQuestions[i].options[0];
        //answersB.textContent = quizQuestions[i].options[1];
        //answersC.textContent = quizQuestions[i].options[2];
        //answersD.textContent = quizQuestions[i].options[3];
   // if (buttonEl.textContent === quizQuestions[i].answer) {
        //alert("You Got 10 Points");
    //} else {
        //timeLeft -= 10;
    //}
    //}
//}
//function getQuestion() {
        //quizQues.textContent = quizQuestions[0].question;
        //answersA.textContent = quizQuestions[i].options[0];
        //answersB.textContent = quizQuestions[i].options[1];
        //answersC.textContent = quizQuestions[i].options[2];
        //answersD.textContent = quizQuestions[i].options[3];
    //}
//}
scoreboard.addEventListener("click", e => {
    leaderBoard ();
})
function leaderBoard () {
    window.alert("Wins: " + wins + "\nLosses: " + losses);
}
// Function for timer
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft == 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "Time Is Up";
            quizHeader.textContent = "You Have Lost";
            losses++;
            clearInterval(timeInterval);
        }
    }, 1000);
}
// Function for question 1
function question1 (event) {
    // Click eventlistener for each button inside question1
    answersA.addEventListener("click", question1);
    answersB.addEventListener("click", question1);
    answersC.addEventListener("click", question1);
    answersD.addEventListener("click", question1);
    quizQues.textContent = quizQuestions[0].question;
    answersA.textContent = quizQuestions[0].options[0];
    answersB.textContent = quizQuestions[0].options[1];
    answersC.textContent = quizQuestions[0].options[2];
    answersD.textContent = quizQuestions[0].options[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === quizQuestions[0].options[1]) {
        question2();
    } else if (buttonEl.textContent != quizQuestions[0].options[1]) {
        timeLeft = timeLeft - 10;
    }
}
// Function for question 2
function question2 (event) {
    //Click eventlistener for each button inside question2
    answersA.addEventListener("click", question2);
    answersB.addEventListener("click", question2);
    answersC.addEventListener("click", question2);
    answersD.addEventListener("click", question2);
    quizQues.textContent = quizQuestions[1].question;
    answersA.textContent = quizQuestions[1].options[0];
    answersB.textContent = quizQuestions[1].options[1];
    answersC.textContent = quizQuestions[1].options[2];
    answersD.textContent = quizQuestions[1].options[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === quizQuestions[1].options[2]) {
        question3 ();  
    } else if (buttonEl.textContent != quizQuestions[1].options[2]) {
        timeLeft = timeLeft - 10;
    }
}
// Function for question 3
function question3 (event) {
        // Click eventlistener for each button inside question3
    answersA.addEventListener("click", question3);
    answersB.addEventListener("click", question3);
    answersC.addEventListener("click", question3);
    answersD.addEventListener("click", question3);
    quizQues.textContent = quizQuestions[2].question;
    answersA.textContent = quizQuestions[2].options[0];
    answersB.textContent = quizQuestions[2].options[1];
    answersC.textContent = quizQuestions[2].options[2];
    answersD.textContent = quizQuestions[2].options[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === quizQuestions[2].options[3]) {
        question4 ();
    } else if (buttonEl.textContent != quizQuestions[2].options[3]) {
        timeLeft -= 10;
    }
}
// Function for question 4
function question4 (event) {
        // Click eventlistener for each button inside question4
    answersA.addEventListener("click", question4);
    answersB.addEventListener("click", question4);
    answersC.addEventListener("click", question4);
    answersD.addEventListener("click", question4);
    quizQues.textContent = quizQuestions[3].question;
    answersA.textContent = quizQuestions[3].options[0];
    answersB.textContent = quizQuestions[3].options[1];
    answersC.textContent = quizQuestions[3].options[2];
    answersD.textContent = quizQuestions[3].options[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === quizQuestions[3].options[0]) {
        question5 ();
    } else if (buttonEl.textContent != quizQuestions[3].options[0]) {
        timeLeft -= 10;
    }
}
// Function for question 5
function question5 (event) {
        // Click eventlistener for each button inside question5
    answersA.addEventListener("click", question5);
    answersB.addEventListener("click", question5);
    answersC.addEventListener("click", question5);
    answersD.addEventListener("click", question5);
    quizQues.textContent = quizQuestions[4].question;
    answersA.textContent = quizQuestions[4].options[0];
    answersB.textContent = quizQuestions[4].options[1];
    answersC.textContent = quizQuestions[4].options[2];
    answersD.textContent = quizQuestions[4].options[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === quizQuestions[4].options[3]) {
        question6 ();
    } else if (buttonEl.textContent != quizQuestions[4].options[3]) {
        timeLeft -= 10;
    }
}
// Function for question 6
function question6 (event) {
        // Click eventlistener for each button inside question6
    answersA.addEventListener("click", question6);
    answersB.addEventListener("click", question6);
    answersC.addEventListener("click", question6);
    answersD.addEventListener("click", question6);
    quizQues.textContent = quizQuestions[5].question;
    answersA.textContent = quizQuestions[5].options[0];
    answersB.textContent = quizQuestions[5].options[1];
    answersC.textContent = quizQuestions[5].options[2];
    answersD.textContent = quizQuestions[5].options[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === quizQuestions[5].options[2]) {
        question7 ();
    } else if (buttonEl.textContent != quizQuestions[5].options[2]) {
        timeLeft -= 10;
    } 
}   
// Function for question 7
function question7 (event) {
        // Click eventlistener for each button inside question7
    answersA.addEventListener("click", question7);
    answersB.addEventListener("click", question7);
    answersC.addEventListener("click", question7);
    answersD.addEventListener("click", question7);
    quizQues.textContent = quizQuestions[6].question;
    answersA.textContent = quizQuestions[6].options[0];
    answersB.textContent = quizQuestions[6].options[1];
    answersC.textContent = quizQuestions[6].options[2];
    answersD.textContent = quizQuestions[6].options[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === quizQuestions[6].options[2]) {
        quizQues.textContent = "Congratulations\nYou Have Won";
        wins++;
    } else if (buttonEl.textContent != quizQuestions[6].options[2]) {
        timeLeft -= 10;
    }        
}    
