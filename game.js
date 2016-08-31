/* **** **** **** **** **** **** **** ****
General Concepts

--create an object with the game moves, key:value::'[box name, use HTML data attribute]':'player marker'
--check after every move for a winning combo in the gameMoves object
--declare a winner, chalk win up, display # of games, wins, losses
**** **** **** **** **** **** **** **** */


var userMarker,
    aiMarker,
    playingGame = false,
    playerTurn,
    movesNum=0;

/* **** **** **** **** **** **** **** ****
Object.board

board object stores game moves; methods for checking if box has a marker already
**** **** **** **** **** **** **** **** */
var board = {
  'user': [],
  'ai': []
};

function selectMarker() {
  // Clear marker select screen
  $("#introScreen").hide();

  // Store game pieces in variables
  userMarker = $(this).data('marker');
  if(userMarker === 'X') {
    aiMarker = 'O';
  } else {
    aiMarker = 'X';
  }
  
    //Display game marker selections
   console.log("userMarker ", userMarker, "aiMarker ", aiMarker);
  $(".well").append("User Marker is " +userMarker+ "!  ");

  // Determine first player
  var coinToss = Math.random();
  if(coinToss > 0.5) {
    playerTurn = userMarker;
  } else {
    playerTurn = aiMarker;
  }
  //Display first turn player
    $(".well").append("First turn goes to " + playerTurn);


  console.log(playerTurn);

}



function userTurn() {
  
}



// Document
$(document).ready(function()
{
  $(".marker").on("click", selectMarker);
});
