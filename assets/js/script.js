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




function loopingQuestions(){
    for (let i=0; i < questionsEl.length; i++) {
        //console.log (questionsEl[i])

        var begin = questionsEl[i];
        //begin.style.display = 'block';
        
    }
    
}



rightAnswer.addEventListener ('click', function(){
    console.log('Right answer');
    correctAnswerEl.style.display = 'block';
    begin.style.display = 'none';
    i++;
})



startEl.addEventListener("click", function(){        //Listening for the click of the button
    setTimer();
    //console.log("test")
})





































//function to remove the content right after the button is clicked
// I can simplify this by deleting the function and just call this "removeContentEl.remove();" 
/*
function removeContent(){
    
}




//Function to call the first quiz
function displayQuiz1(){
    hideQuizEl1.style.display = "block";
}

*/








// rightAnswer1.addEventListener("click", function(){
//     //console.log("Right answer")
//     hideQuizEl1.remove();
//     alert("Right Answer")
//     displayQuiz2();
// })


/*This is to display the user picked the right answer
function UserAnswer(){
    if (rightAnswer1 === "click"){
        alert("Right Answer")
    }
    // else {
    //     alert("Wrong answer")
    // }
} */



























