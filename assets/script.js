// variables to pull from HTML
var timerEl = document.getElementById("timer");
var beginTimer = document.getElementById("beginQ");
var quizHeader = document.getElementById("quizIntro");
var quizRules = document.querySelector("#quiz");
var quizQues = document.getElementById("quizQuestions");
// variable to create click event for all answer buttons
const ansTarget = document.querySelectorAll(".ans-btn")
// buttons for selecting an answer
let answersA = document.getElementById("answerA");
let answersB = document.getElementById("answerB");
let answersC = document.getElementById("answerC");
let answersD = document.getElementById("answerD");
// Click Function to begin timer and quiz
beginTimer.addEventListener("click", e => {
    countdown();
    // clears quizHeader area for quiz 
    quizHeader.textContent = " ";
    // clears rules out to display quiz
    quizRules.textContent = " ";
   question1 ();
});
// Function for timer
function countdown() {
    var timeLeft = 100;
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
function question1 () {
    answersA.addEventListener("click", question1);
    answersB.addEventListener("click", question1);
    answersC.addEventListener("click", question1);
    answersD.addEventListener("click", question1);
    const ques1 = "What does CSS stand for?";
    const ans1 = "B. Cascading Style Sheet";
    const opt1 = ["A. Color Selector Sheet", "B. Cascading Style Sheet", "C. Colaborating Styling Sheet", "D. Computer Styling Sheet"]
    quizQues.textContent = ques1;
    answersA.textContent = opt1[0];
    answersB.textContent = opt1[1];
    answersC.textContent = opt1[2];
    answersD.textContent = opt1[3];
    if (question1.target === ans1) {
        question2 ();
    } else {
        timeLeft -= 10;
    }
}
function question2 () {
    answersA.addEventListener("click", question2);
    answersB.addEventListener("click", question2);
    answersC.addEventListener("click", question2);
    answersD.addEventListener("click", question2);
    const ques2 = "What does URL stand for?";
    const ans2 = "C. Uniform Resource Locator";
    const opt2 = ["A. Ultimate Response Listening", "B. Unlimited Review Logistics", "C. Uniform Resource Locator", "D. Ur Response Logistics"]
    quizQues.textContent = ques2;
    answersA.textContent = opt2[0];
    answersB.textContent = opt2[1];
    answersC.textContent = opt2[2];
    answersD.textContent = opt2[3];
    if (question2.target === ans2) {
       question3 ();
    } else {
        timeLeft -= 10;
    }
}
function question3 () {
    answersA.addEventListener("click", question3);
    answersB.addEventListener("click", question3);
    answersC.addEventListener("click", question3);
    answersD.addEventListener("click", question3);
    const ques3 = "Which of these are a primitive Data type?";
    const ans3 = "D. String";
    const opt3 = ["A. JSON", "B. Array", "C. Class", "D. String"];
    quizQues.textContent = ques3;
    answersA.textContent = opt3[0];
    answersB.textContent = opt3[1];
    answersC.textContent = opt3[2];
    answersD.textContent = opt3[3];
    if (question3.target === ans3) {
        question4 ();
    } else {
        timeLeft -= 10;
    }
}    
function question4 () {
    answersA.addEventListener("click", question4);
    answersB.addEventListener("click", question4);
    answersC.addEventListener("click", question4);
    answersD.addEventListener("click", question4);
    const ques4 = "Which of these are a legacy computer language?";
    const ans4 = "A. JQUERY";
    const opt4 = ["A. JQUERY", "B. BootStarp", "C. Java", "D. C++"];
    quizQues.textContent = ques4;
    answersA.textContent = opt4[0];
    answersB.textContent = opt4[1];
    answersC.textContent = opt4[2];
    answersD.textContent = opt4[3];
    if (question4.target === ans4) {
        question5 ();
    } else {
        timeLeft -= 10;
    }
}   
function question5 () {
    answersA.addEventListener("click", question5);
    answersB.addEventListener("click", question5);
    answersC.addEventListener("click", question5);
    answersD.addEventListener("click", question5);
    const ques5 = "Which of these are used to display coding projects?";
    const ans5 = "D. Github";
    const opt5 = ["A. Twitter", "B. Facebook", "C. Indeed", "D. Github"];
    quizQues.textContent = ques5;
    answersA.textContent = opt5[0];
    answersB.textContent = opt5[1];
    answersC.textContent = opt5[2];
    answersD.textContent = opt5[3];
    if (question5.target === ans5) {
        quizQues.textContent = "Congratulations";
    } else {
        timeLeft -= 10;
    }
}    



