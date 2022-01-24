//Declare Variables
var startEl = document.querySelector("#start");  //Creating a var for the button start
var timerEl = document.querySelector("#timer");   // creating a var for the timer
var secondsLeft = 20; //This is the inital time users will start the game with

var hideQuizEl1 = document.querySelector(".hide-quiz-1")  // create a var to hide quiz content 1
var hideQuizEl2 = document.querySelector(".hide-quiz-2")  // create a var to hide quiz content 2
var hideQuizEl3 = document.querySelector(".hide-quiz-3")  // create a var to hide quiz content 3
var hideQuizEl4 = document.querySelector(".hide-quiz-4")  // create a var to hide quiz content 4
var hideQuizEl5 = document.querySelector(".hide-quiz-5")  // create a var to hide quiz content 2

var removeContentEl = document.querySelector(".remove-content-div")  //This is to remove the content right after the button is clicked
var rightAnswer1 = document.querySelector(".right-answer-1")   //Var for right answer 1
var rightAnswer2 = document.querySelector(".right-answer-2")   //Var for right answer 2
var rightAnswer3 = document.querySelector(".right-answer-3")   //Var for right answer 3
var rightAnswer4 = document.querySelector(".right-answer-4")   //Var for right answer 4
var rightAnswer5 = document.querySelector(".right-answer-5")   //Var for right answer 5



//Function to set the timer
function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        removeContent()
        displayQuiz1();
        //UserAnswer();
        if (secondsLeft === 0) {
            clearInterval(timerInterval);  // Stops the timer from going to negative. Takes a parameter that was used for "setInterval"
            //alert ("Still working on it")
        }
    }, 1000)  // 1000 is the time in millisecond (the function repeats itself every 1000 ms)
}

//Function to call the first quiz
function displayQuiz1(){
    hideQuizEl1.style.display = "block";
}

//Function to call the second quiz
function displayQuiz2(){
    hideQuizEl2.style.display = "block";
} 

//Function to call the third quiz
function displayQuiz3(){
    hideQuizEl3.style.display = "block";
} 

//Function to call the fourth quiz
function displayQuiz4(){
    hideQuizEl4.style.display = "block";
} 

//Function to call the fifth quiz
function displayQuiz5(){
    hideQuizEl5.style.display = "block";
} 


rightAnswer1.addEventListener("click", function(){
    //console.log("Right answer")
    hideQuizEl1.remove();
    alert("Right Answer")
    displayQuiz2();
})

rightAnswer2.addEventListener("click", function(){
    //console.log("Right answer")
    hideQuizEl2.remove();
    alert("Right Answer")
    displayQuiz3();
})

rightAnswer3.addEventListener("click", function(){
    //console.log("Right answer")
    hideQuizEl3.remove();
    alert("Right Answer")
    displayQuiz4();
})

rightAnswer4.addEventListener("click", function(){
    //console.log("Right answer")
    hideQuizEl4.remove();
    alert("Right Answer")
    displayQuiz5();
})

rightAnswer5.addEventListener("click", function(){
    //console.log("Right answer")
    hideQuizEl5.remove();
    alert("Right Answer")
})

/*This is to display the user picked the right answer
function UserAnswer(){
    if (rightAnswer1 === "click"){
        alert("Right Answer")
    }
    // else {
    //     alert("Wrong answer")
    // }
} */


//function to remove the content right after the button is clicked
// I can simplify this by deleting the function and just call this "removeContentEl.remove();" 
function removeContent(){
    removeContentEl.remove();
}



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