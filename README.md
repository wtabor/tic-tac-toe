# Tic-Tac-Toe

A simiple Tic-Tac-Toe game written in JavaScript, HTML, and CSS following the [General Assembly] rubric.

  - X player starts
  - Game determines winnner and automatically restarts next game
  - Play to five
  - [jQuery] was utlilized for functionality
  - Based on math board style

### Version
1.0

### Minimum Requirements

* A user should be able to click on different squares to make a move
* Every click will alternate between marking an X and O
* Upon marking of an individual cell, use JavaScript to add a class to each cell to display separate colors
* A cell should not be able to be replayed once marked
* Add a reset button that will clear the contents of the board

### Functionality
Game found here: [GH-Pages]
1. Define Variables
2. Listening for $gameSquares click
3. Click a square
4. Checks to see if square has been clicked
5. If not, adds class image & changes moves array value based on X or O by 1 or 10
6. Adds 1 to counter
7. Checks getWin()
8. getWin() checks winConditions to see if it's equal to 3 or 30
9. If a win statement is satisfied, a win is tallied, a winning alert is called, and resetBoard() is called
10. If the counter reacts 9 moves without a win condition, then a tie is called and resetBoard() runs
11. resetBoard() checks for 5 wins from either player and resets the values for a new game
12. If a player reaches five wins, the board click event will turn off, a winning alert will display and the board hides
13. The reset button will display and if clicked, will location reload the page

### Todos

 - Add Hover Move Cursor
 - Additional Styling
 - Randomizer

License
----

MIT




[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [GH-Pages]: <http://wtabor.github.io/tic-tac-toe/>
   [General Assembly]: <https://github.com/ATL-WDI-Exercises/tic-tac-toe>
   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [jQuery]: <http://jquery.com>


   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>

