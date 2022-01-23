//Declare Variables
var startEl = document.querySelector("#start");  //Creating a var for the button start
var timerEl = document.querySelector("#timer");   // creating a var for the timer

var secondsLeft = 75; //This is the inital time users will start the game with


//Function to set the timer
function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
    }, 1000)
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