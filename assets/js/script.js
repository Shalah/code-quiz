//Declare Variables
var startEl = document.querySelector("#start");  //Creating a var for the button start
var timerEl = document.querySelector("#timer");   // creating a var for the timer

var secondsLeft = 5; //This is the inital time users will start the game with

var removeContentEl = document.querySelector(".remove-content-div")  //This is to remove the content right after the button is clicked

var questionsEl = document.querySelectorAll('.quiz-questions'); //This is for everything with a class questions

var hideQuizEl1 = document.querySelector(".hide-quiz")  // create a var to hide quiz content 

var rightAnswer = document.querySelector(".right-answer")   //Var for right answer 

var correctAnswerEl = document.querySelectorAll("#correct-answer")  //This is for the user to see when they select the right answer
correctAnswerEl.textContent = "Correct Answer!!"


//Function to set the timer
function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        removeContentEl.remove();
        //displayQuiz1();
        //UserAnswer();

        loopingQuestions();
        

        if (secondsLeft === 0) {
            clearInterval(timerInterval);  // Stops the timer from going to negative. Takes a parameter that was used for "setInterval"
            //alert ("Still working on it")
        }
    }, 1000)  // 1000 is the time in millisecond (the function repeats itself every 1000 ms)
}



let i = 0;

function loopingQuestions(){
    
    while (i < questionsEl.length) {
    
        //console.log (questionsEl[i])

        var begin = questionsEl[i];
        begin.style.display = 'block';

        rightAnswer.addEventListener ('click', function(){
            //console.log('Right answer');
            //correctAnswerEl[i].style.display = 'block';
            begin.style.display = 'none';
            
        })

        i++;
    }
    
}

/*
function test(){
    rightAnswer.addEventListener ('click', function(){
        console.log('Right answer');
        correctAnswerEl.style.display = 'block';
        begin.style.display = 'none';
        i++;
    })
}

*/


startEl.addEventListener("click", function(){        //Listening for the click of the button
    setTimer();
    //console.log("test")
})
























// Not working
//var startBtn = document.querySelector("#start");
//startBtn.addEventListener("click", test)

// function test(){
//     console.log("lets see")
    
// }








