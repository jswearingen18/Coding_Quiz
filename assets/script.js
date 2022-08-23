// variables to pull from HTML
var timerEl = document.getElementById("timer");
var beginTimer = document.getElementById("beginQ");
var quizHeader = document.getElementById("quizIntro");
var quizRules = document.querySelector("#quiz");
var quizQues = document.getElementById("quizQuestions")
var answers = document.getElementById("quizAnswer");
let answersA = document.getElementById("answerA");
var answersB = document.getElementById("answerB");
var answersC = document.getElementById("answerC");
var answersD = document.getElementById("answerD");
// Arrays to be used for questions
var quizQuestions = ["What does CSS stand for?","What does URL stand for?", "Which of these are a primitive Data type?"] 
var quizAwnserA = ["A. Color Selector Sheet", "A. Ultimate Response Listening", "A. JSON"]
var quizAwnserB = ["B. Cascading Style Sheet", "B. Unlimited Review Logistics", "B. Array"]
var quizAwnserC = ["C. Colaborating Styling Sheet", "C. Uniform Resource Locator", "C. Class"]
var quizAwnserD = ["D. Computer Styling Sheet", "D. Ur Response Logistics", "D. String"]
// Click Functions
beginTimer.addEventListener("click", e => {
    countdown();
    quizHeader.textContent = " ";
    quizRules.textContent = " ";
    quizQues.textContent = quizQuestions[0];
    answersA.textContent = quizAwnserA[0];
    answersB.textContent = quizAwnserB[0];
    answersC.textContent = quizAwnserC[0];
    answersD.textContent = quizAwnserD[0];
});

function countdown() {
    var timeLeft = 20;
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
function beginQuiz () {
    if(beginTimer.clicked == true) {
        quiz.textContent = " ";
    }
}
function actualQuiz() {
    quiz.textContent = quizQuestions[0];
    answersA.textContent = quizAwnserA[0];
    answersB.textContent = quizAwnserB[0];
    answersC.textContent = quizAwnserC[0];
    answersD.textContent = quizAwnserD[0];
    if(answersB) {}
        quiz.textContent = quizQuestions[1];
        answersA.textContent = quizAwnserA[1];
        answersB.textContent = quizAwnserB[1];
        answersC.textContent = quizAwnserC[1];
        answersD.textContent = quizAwnserD[1];
}

