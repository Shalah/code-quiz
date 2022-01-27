// This is to create a code quiz. 

//Declare Variables
var body = document.body;
var startEl = document.querySelector("#start");  // Creating a var for the button start
var timerEl = document.querySelector("#timer");   // creating a var for the timer
var submitEl = document.querySelector("#submit"); //var for the button submit
var secondsLeft = 60; // This is the inital time users will start the game with
var userPoints = document.querySelector("#user-points");   // creating a var for the timer
var userPoints = 0;  // This will keep track of user points
var scoreList = document.querySelector("#score-List"); //var to make the unorder list


var hideQuizEl1 = document.querySelector(".hide-quiz-1");  // create a var to hide quiz content 1
var hideQuizEl2 = document.querySelector(".hide-quiz-2");  // create a var to hide quiz content 2
var hideQuizEl3 = document.querySelector(".hide-quiz-3");  // create a var to hide quiz content 3
var hideQuizEl4 = document.querySelector(".hide-quiz-4");  // create a var to hide quiz content 4
var hideQuizEl5 = document.querySelector(".hide-quiz-5");  // create a var to hide quiz content 2

var removeContentEl = document.querySelector(".remove-content-div")  //This is to remove the content right after the button is clicked
var removeContentEnd = document.querySelector(".remove-content-End-div")

var rightAnswer1 = document.querySelector(".right-answer-1");   //Var for right answer 1
var rightAnswer2 = document.querySelector(".right-answer-2");   //Var for right answer 2


var wrongAnswer2 = document.querySelector(".wrong-answer-2a");   // This is the class for wrong answers
var wrongAnswer3 = document.querySelector(".wrong-answer-3b");   // This is the class for wrong answers
var wrongAnswer4 = document.querySelector(".wrong-answer-4c");   // This is the class for wrong answers

var wrongAnswer5 = document.querySelector(".wrong-answer-2d");   // This is the class for wrong answers
var wrongAnswer6 = document.querySelector(".wrong-answer-3e");   // This is the class for wrong answers
var wrongAnswer7 = document.querySelector(".wrong-answer-4f");   // This is the class for wrong answers

// Create unordered list items for scoring purpose
// This is not currrently working
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

//var uncorrectAnswer = document.getElementById("#uncorrect-answer")  // This is to output " Wrong answer"
//uncorrectAnswer.textContent = "Wrong answer!!"
/*
for (var i = 0 ; i < wrongAnswer1.length; i++) {
    wrongAnswer1[i].addEventListener('click' , elseAnswer) ; 
}
*/


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



wrongAnswer2.addEventListener("click", function(){
    hideQuizEl1.remove();
    console.log("Wrong Answer");
    displayQuiz2();
    secondsLeft -= 10; //This will decrement the timer by 10 sec
})

wrongAnswer3.addEventListener("click", function(){
    hideQuizEl1.remove();
    console.log("Wrong Answer");
    displayQuiz2();
    secondsLeft -= 10; //This will decrement the timer by 10 sec
})

wrongAnswer4.addEventListener("click", function(){
    hideQuizEl1.remove();
    console.log("Wrong Answer");
    displayQuiz2();
    secondsLeft -=10; //This will decrement the timer by 10 sec   
})

// wrongAnswer5.addEventListener("click", function(){
//     hideQuizEl2.remove();
//     console.log("Wrong Answer");
//     displayQuiz3();
// })

// wrongAnswer6.addEventListener("click", function(){
//     hideQuizEl2.remove();
//     console.log("Wrong Answer");
//     displayQuiz3();
// })

// wrongAnswer7.addEventListener("click", function(){
//     hideQuizEl2.remove();
//     console.log("Wrong Answer");
//     displayQuiz3();
// })

rightAnswer1.addEventListener("click", function(){
    //console.log("Right answer")
    hideQuizEl1.remove();
    console.log("Right Answer");
    displayQuiz2();
    secondsLeft +=10; //This will increment the timer by 10 sec
    if (true) {   
        userPoints += 5;
        console.log(userPoints)
    }
})

rightAnswer2.addEventListener("click", function(){
    //console.log("Right answer")
    hideQuizEl2.remove();
    console.log("Right Answer");
    secondsLeft +=10; //This will increment the timer by 10 sec
    if (true) {   
        userPoints += 5;
        console.log(userPoints)
    }
    userPoints.textContent = ('try')
    removeContentEnd .style.display = "block";
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

// function elseAnswer(){
//     wrongAnswer.addEventListener("click", function(){
//         alert('Wrong answer')
    
//     })
// }


//function to remove the content right after the button is clicked
// I can simplify this by deleting the function and just call this "removeContentEl.remove();" 
function removeContent(){
    removeContentEl.remove();
}


//This is not working

// submitEl.addEventListener('click', function{
//     userPoints = 
//   scoreList.append(li1);
//    console.log(li1)
// })

startEl.addEventListener("click", function(){        //Listening for the click of the button
    setTimer();
    //console.log("test")
})






