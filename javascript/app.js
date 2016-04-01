$(document).ready(function() {
      var board = [];
      var xWinCount = 0;
      var oWincount = 0;
      var turn = 0;


      for (i = 0; i < 8, i++) {
        board.push('null');
      }

      $('#square1').click(function() {
      if ($('#square1').is(':enabled')) {
        if (turn % 0 == 0) {
          //Turn player X
        $('#square1').textContent('X');
        $('#square1').attr(':disabled');
        var board[0] = true;
        turn++;
        }

      }

              if (player1 == true);
              board[0][0] = 'X';
              $(#square1).textContent('X');
            } else {
              board[0][0] = 'O';
              $(#square1).textContent('O');
            } else {
              $('#square1').attr(':disabled');
              alert("Square has been taken");
            }

            function Counter() {}





          }
