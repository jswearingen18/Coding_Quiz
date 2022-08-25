// variables to pull from HTML
var timerEl = document.getElementById("timer");
var beginTimer = document.getElementById("beginQ");
var quizHeader = document.getElementById("quizIntro");
var quizRules = document.querySelector("#quiz");
var quizQues = document.getElementById("quizQuestions");
var scoreboard = document.querySelector("#scoreBoard");
// variable to create click event for all answer buttons
const ansTarget = document.querySelectorAll(".ans-btn")
// buttons for selecting an answer

var timeLeft;
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
   question1 ();
})
// Function for timer
function countdown() {
    timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft == 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "Time Is Up";
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
    const ques1 = "What does CSS stand for?";
    const opt1 = ["A. Color Selector Sheet", "B. Cascading Style Sheet", "C. Colaborating Styling Sheet", "D. Computer Styling Sheet"]
    const ans1 = opt1[1];
    quizQues.textContent = ques1;
    answersA.textContent = opt1[0];
    answersB.textContent = opt1[1];
    answersC.textContent = opt1[2];
    answersD.textContent = opt1[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === ans1) {
        question2 ();
    } else if (timeLeft == 0) {
        quizHeader.textContent = "You Have Lost";
        losses++;
    } else if (buttonEl.textContent != ans1) {
        timeLeft -= 10;
    }
}
// Function for question 2
function question2 (event) {
        // Click eventlistener for each button inside question2
    answersA.addEventListener("click", question2);
    answersB.addEventListener("click", question2);
    answersC.addEventListener("click", question2);
    answersD.addEventListener("click", question2);
    const ques2 = "What does URL stand for?";
    const opt2 = ["A. Ultimate Response Listening", "B. Unlimited Review Logistics", "C. Uniform Resource Locator", "D. Ur Response Logistics"]
    const ans2 = opt2 [2];
    quizQues.textContent = ques2;
    answersA.textContent = opt2[0];
    answersB.textContent = opt2[1];
    answersC.textContent = opt2[2];
    answersD.textContent = opt2[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === ans2) {
       question3 ();
    } else if (timeLeft == 0) {
        quizHeader.textContent = "You Have Lost";
        losses++;
    } else if (buttonEl.textContent != ans2) {
        timeLeft -= 10;
    }
}
// Function for question 3
function question3 (event) {
        // Click eventlistener for each button inside question3
    answersA.addEventListener("click", question3);
    answersB.addEventListener("click", question3);
    answersC.addEventListener("click", question3);
    answersD.addEventListener("click", question3);
    const ques3 = "Which of these are a primitive Data type?";
    const opt3 = ["A. JSON", "B. Array", "C. Class", "D. String"];
    const ans3 = opt3[3];
    quizQues.textContent = ques3;
    answersA.textContent = opt3[0];
    answersB.textContent = opt3[1];
    answersC.textContent = opt3[2];
    answersD.textContent = opt3[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === ans3) {
        question4 ();
    } else if (timeLeft == 0) {
        quizHeader.textContent = "You Have Lost";
        losses++;
    } else if (buttonEl.textContent != ans3) {
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
    const ques4 = "Which of these are a legacy computer language?";
    const opt4 = ["A. JQUERY", "B. BootStrap", "C. Java", "D. C++"];
    const ans4 = opt4[0];
    quizQues.textContent = ques4;
    answersA.textContent = opt4[0];
    answersB.textContent = opt4[1];
    answersC.textContent = opt4[2];
    answersD.textContent = opt4[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === ans4) {
        question5 ();
    } else if (timeLeft == 0) {
        quizHeader.textContent = "You Have Lost";
        losses++;
    } else if (buttonEl.textContent != ans4) {
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
    const ques5 = "Which of these are used to display coding projects?";
    const opt5 = ["A. Twitter", "B. Facebook", "C. Indeed", "D. Github"];
    const ans5 = opt5[3];
    quizQues.textContent = ques5;
    answersA.textContent = opt5[0];
    answersB.textContent = opt5[1];
    answersC.textContent = opt5[2];
    answersD.textContent = opt5[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === ans5) {
        question6 ();
    } else if (timeLeft == 0) {
        quizHeader.textContent = "You Have Lost";
        losses++;
    } else if (buttonEl.textContent != ans5) {
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
    const ques6 = "Which of these is a container element?";
    const opt6 = ["A. <HTML>", "B. <title>", "C. <Span>", "D. <head>"];
    const ans6 = opt6[2];
    quizQues.textContent = ques6;
    answersA.textContent = opt6[0];
    answersB.textContent = opt6[1];
    answersC.textContent = opt6[2];
    answersD.textContent = opt6[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === ans6) {
        question7 ();
    } else if (timeLeft == 0) {
        quizHeader.textContent = "You Have Lost";
        losses++;
    } else if (buttonEl.textContent != ans6 ) {
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
    const ques7 = "Which of these real computer languages?";
    const opt7 = ["A. Bootsstrap", "B. Boot-Strap", "C. Bootstrap", "D. Boots_Strap"];
    const ans7 = opt7[2];
    quizQues.textContent = ques7;
    answersA.textContent = opt7[0];
    answersB.textContent = opt7[1];
    answersC.textContent = opt7[2];
    answersD.textContent = opt7[3];
    var buttonEl = event.target;
    if (buttonEl.textContent === ans7) {
        quizQues.textContent = "Congratulations\nYou Have Won";
        wins++;
    } else if (timeLeft == 0) {
        quizHeader.textContent = "You Have Lost";
        losses++;
    } else if (buttonEl.textContent != ans7) {
        timeLeft -= 10;
    }        
}    
function leaderBoard () {
    alert("Wins: " + wins + "\nLosses: " + losses);
}


 //var array = [
    //{question1: "What is Cat?",
    //options: ["A. Bootsstrap", "B. Boot-Strap", "C. Bootstrap", "D. Boots_Strap"],
    //answer: "C. Bootstrap"
    //}
//]
