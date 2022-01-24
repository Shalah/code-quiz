//Declare Variables
var startEl = document.querySelector("#start");  //Creating a var for the button start
var timerEl = document.querySelector("#timer");   // creating a var for the timer
var hideQuizEl = document.querySelector(".hide-quiz")  // create a var to hide quiz content
var secondsLeft = 5; //This is the inital time users will start the game with
// var removeContentEl = document.querySelectorall(".remove-content-div")  //This is to remove the content right after the button is clicked

//Function to set the timer
function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
       // removeContent()
        displayQuiz();
        if (secondsLeft === 0) {
            clearInterval(timerInterval);  // Stops the timer from going to negative. Takes a parameter that was used for "setInterval"
            alert ("Still working on it")
        }
    }, 1000)
}

//Function to call the quiz
function displayQuiz(){
    hideQuizEl.style.display = "block"
}

//function to remove the content right after the button is clicked
// function removeContent(){
//     removeContentEl.remove();
// }


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