$(document).ready(function() {



  // Variables
  var $gameSquares = $('.square');
  var moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var counter = 0;
  var xWinsCounter = 0;
  var oWinsCounter = 0;

  // Functions

  //Remove or reset?
  function resetBoard() {
    if (xWinsCounter && oWinsCounter < 5) {
      moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      counter = 0;
      $gameSquares.removeClass('x-image o-image');
      $(gameSquares).unbind('click');
    }
    else {
      alert('Series over!');
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
      console.log(winConditions[i]);
      if (winConditions[i] === 3) {
        alert('X Wins!');
        xWinsCounter++;
        $('#xwins').text(xWinsCounter); //Update X Wins
        resetBoard(); //Run reset function
      } else if (winConditions[i] === 30) {
        alert('O Wins!');
        oWinsCounter++;
        $('#owins').text(oWinsCounter); //Update O Wins
        resetBoard(); //Run reset function
      } else if (counter == 9) {
        console.log('tie!');
        alert('The game is a tie!');
        resetBoard();
      } else {}
    }
  }

  //On Click
  $($gameSquares).on('click', function() {
    var id = parseInt(this.id);
    moves[this.id] = id;
    if (counter % 2 == 0) {
      moves[this.id] = +1;
      $(this).addClass('x-image'); //Change cell to X image/img.png
      console.log('x')
    } else {
      moves[this.id] = +10;
      $(this).addClass('o-image'); //Change cell to O image/img.png
      console.log('o');
    }
    counter++;
    console.log(moves);
    getWin();
  });
});
