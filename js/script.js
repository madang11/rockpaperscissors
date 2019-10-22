// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    let input = $("#input").val();
    let cpResult = "rock";
    $("#userChoice").append(input)
    $("#computerChoice").append(cpResult)

});

