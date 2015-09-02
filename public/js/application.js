$(document).ready(function(){

var player1 = 0;
var player2 = 0;

var player1Move = function(){
  $("tr#player1_strip >td.active").removeClass().next().addClass('active');
  player1 ++

};

var player2Move = function(){
 $("tr#player2_strip > td.active").removeClass().next().addClass('active');
 player2 ++

};

var hasWon = function(){
  if (player1 === 20){
 // 	var winningPlayerId = $("#player1 th").data('player-id');
   // $('#winner').html("Player 1 is the winner!");
   alert("Player 1 won!");
  	var winner = player1_id;
  	submitForm(winner);
  } 
  else if (player2 === 20){
  //	var winningPlayerId = $("#player2 th").data('player-id');
  //  $('#winner').html("Player 2 is the winner!");
  alert("Player 2 won!");
  var winner = player2_id;
  submitForm(winner);
  }

};

$(document).keydown(function(keyCode){
  if (keyCode.which === 81){
  	player1Move();
  } 
  else if (keyCode.which === 80){
  	player2Move();
  } 

  hasWon();

});

function submitForm(winner){
forms = document.getElementById("result");
forms.winner_id.value = winner;
forms.submit();
}

$('button#restart').click(function(){
  location.reload();
});

});




