//Declare Variables
//var viewScoresEl = document.querySelector("#view-scores");

//Creating a var for the button start
var startBtn = document.querySelector(".start");
var divContent = document.getElementById("removeContentDiv");

/*viewScoresEl.addEventListener("click", function() {
    console.log("It works");
}) */

//Listening for the click of the button
document.addEventListener("click", test)

function test(){
    document.body.style.backgroundColor = "red";
    removeContentEl();
}

function removeContentEl(){
    divContent.removeChild(divContent)
}

function myFunction() {
    var list = document.getElementById("myList");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  }