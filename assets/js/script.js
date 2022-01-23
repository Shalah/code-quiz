//Declare Variables
var startEl = document.querySelector("#start");  //Creating a var for the button start
var timerEl = document.querySelector("#timer");   // creating a var for the timer

var secondsLeft = 5; //This is the inital time users will start the game with


//Function to set the timer
function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        
        if (secondsLeft === 0) {
            clearInterval(timerInterval);  // This stops the timer from going to negative values. It takes a parameter that was used for "setInterval"
            alert ("Still working on it")
        }
    }, 1000)
}


startEl.addEventListener("click", function(){        //Listening for the click of the button
    setTimer();
    //console.log("test")
})

/* 
    which of the following tag is used to create a vertical line
    <br>                       <p>
    <vertical>                 <hr>
*/
    
/* 
    How can you add a comment in Javascript

    // this is a comment //          // This is a comment

    /* this is a comment //          // This is the comment /*

*/ 

/* 
    The # symbol is meant to indicate that the selector is:

    class                           tag

    id                              function
*/

/* 
    How do you display a hyperlink with no underline

    a("no underline")                               a{decoration: no underline}

    a{text-decoration: none}                        a{hyperlink: no underline}
*/

/* 
    How do you inlcude an internal style sheet in HTML

    <HTML>                                      <style>

    <CSS>                                       <link>
*/


































// Not working
//var startBtn = document.querySelector("#start");
//startBtn.addEventListener("click", test)

// function test(){
//     console.log("lets see")
    
// }