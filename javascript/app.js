$(document).ready(function() {

  // Variables

  var $gameSquares = $('.square');
  var moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var counter = 0;
  var xWinsCounter = 0;
  var oWinsCounter = 0;
  var X = 'X';
  var O = 'O';
  var cPlayer = X;

  // Functions

  var displayMessage = function(message) {
    $('.message').html(message);
  };

  function resetBoard() {
    if (xWinsCounter < 5 && oWinsCounter < 5) {
      moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      counter = 0;
      displayMessage('Current Player: ' + X);
      //Clears cell content
      $gameSquares.removeClass('x-image o-image');
    } else {
      alert('The series is over!');
      $('.square').off('click');
      $('.square').hide();
      $('.message').hide();
      $('.reset').show().on('click', function() {
        location.reload();
      });
    }
  }

  function getWin() {
    var winConditions = [moves[0] + moves[1] + moves[2],
      moves[3] + moves[4] + moves[5],
      moves[6] + moves[7] + moves[8],
      moves[0] + moves[4] + moves[8],
      moves[0] + moves[3] + moves[6],
      moves[1] + moves[4] + moves[7],
      moves[2] + moves[5] + moves[8],
      moves[2] + moves[4] + moves[6]
    ]
    console.log(winConditions);
    for (i = 0; i < winConditions.length; i++) {
      if (winConditions[i] === 3) {
        alert('X Wins!');
        xWinsCounter++;
        //Update X Wins
        $('#xwins').text(xWinsCounter);
        //Run reset function
        resetBoard();
      } else if (winConditions[i] === 30) {
        alert('O Wins!');
        oWinsCounter++;
        //Update O Wins
        $('#owins').text(oWinsCounter);
        //Run reset function
        resetBoard();
      } else if (counter == 9) {
        //Runs if all squares have been clicked
        console.log('tie!');
        alert('The game is a tie!');
        resetBoard();
      } else {}
    }
  }

  //On Click
  $($gameSquares).on('click', function() {
    //Determines if this cell has been clicked already
    if (moves[this.id] === 0) {
      if (counter % 2 == 0) {
        //Changes value at moves[i] to 1
        moves[this.id] = +1;
        //Change cell to X image
        $(this).addClass('x-image');
        displayMessage('Current Player: ' + O);
      } else {
        //Changes value at moves[i] to 10
        moves[this.id] = +10;
        //Changes cell O image
        $(this).addClass('o-image');
        displayMessage('Current Player: ' + X);
      }
      counter++;
      getWin();
    } else if (this.id !== 0)
      alert("Select a different square");
  });
});
