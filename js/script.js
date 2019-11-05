// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    let input = $("#input").val().toLowerCase();
    let computerNumber = Math.random();
    let computerChoice =""
    $("#userChoice").text(input)
    if ( computerNumber > 0.66666)
    {
        $("#computerChoice").text("rock");
        computerChoice += "rock";
    }
    else if ( computerNumber > 0.33333)
    {
        $("#computerChoice").text("scissor");
        computerChoice += "scissor";
    }
    else
    {
        $("#computerChoice").text("paper");
        computerChoice += "paper";
    }

    if ((input === computerChoice)) {
        $("#result").text("It's a tie");
    }
    else if(((input === "scissor")&&(computerChoice === "paper" ))||((input === "paper")&&(computerChoice === "rock"))||((input === "rock")&&(computerChoice === "scissor")))
    {
        $("#result").text("You win!");
    }
    else if(((input === "paper")&&(computerChoice === "scissor" ))||((input === "rock")&&(computerChoice === "paper"))||((input === "scissor")&&(computerChoice === "rock")))
    {
        $("#result").text("You lose. Try again?");
    }
    else {
        $("result").text("That is not a possible input");
    }
});

