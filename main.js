$(document).ready(function (){

  counterSet();
  
  //User Choice
  $('.choice').on('click', function(){
    var id = $(this).attr('id');
    userChoice = id;
    userVal = +$(this).attr('value');
    // computer choice
    computerVal = Math.floor((Math.random()*3)+1);
    comChoice = $('button[value="'+computerVal+'"]').attr('id');
    $('#result').html('<p>You choose: '+userChoice+'</p><p>Computer chooses: '+comChoice+'</p>');
    compareForWin(userVal, computerVal);
    counterSet();
  });

  $('#reset').on('click', function(){
    resetCounters();
  });

});

var userChoice;
var comChoice;
var computerVal;
var userVal;

var userCount = 0;
var comCount = 0;
var ties = 0;

function compareForWin (userVal, computerVal){
  if(userVal === 1 && computerVal === 3){
    console.log('User wins');
    userCount++;
  } else if(userVal === 2 && computerVal === 1){
    console.log('User wins');
    userCount++;
  } else if(userVal === 3 && computerVal === 2){
    console.log('User wins');
    userCount++;
  } else if(userVal === computerVal){
    console.log('Tie Game');
    ties++;
  } else {
    console.log('Computer Wins');
    comCount++;
  }
}

  function counterSet (){
    $('#userCount').html("User Wins: "+userCount);
    $('#comCount').html("Computer Wins: "+comCount);
    $('#ties').html("Tied Games: "+ties);
  }

  function resetCounters (){
    userCount = 0;
    comCount = 0;
    ties = 0;
    counterSet();
  }

// function printChoice (str){
//   return 
// }