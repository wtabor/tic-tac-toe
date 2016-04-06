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

### Planning
[Trello]

Wireframe:

![alt-text][Wireframe]

### User Stories
As a *User*

I want to *Play Tic-Tac-Toe against a friend*

to *determine a winner from a best of five*

As a *Player*

I want to *Keep score over the course of multiple games*

As a *Player*

I want to *Tic-Tac-Toe to load and start*

without *needing to hit multiple buttons*

As a *User*

I want the format *to look, feel, and act familar*

As a *User*

I want to *avoid misclicks*

to *keep the game fair and functional*

### Functionality
Game found here: [GH-Pages]
* Define Variables
* Listening for $gameSquares click
* Click a square
* Checks to see if square has been clicked
* If not, adds class image & changes moves array value based on X or O by 1 or 10
* Adds 1 to counter
* Checks getWin()
* getWin() checks winConditions to see if it's equal to 3 or 30
* If a win statement is satisfied, a win is tallied, a winning alert is called, and resetBoard() is called
* If the counter reacts 9 moves without a win condition, then a tie is called and resetBoard() runs
* resetBoard() checks for 5 wins from either player and resets the values for a new game
* If a player reaches five wins, the board click event will turn off, a winning alert will display and the board hides
* The reset button will display and if clicked, will location reload the page

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
   [Trello]: <https://trello.com/b/EfO39usS>
   [Wireframe]: https://github.com/wtabor/tic-tac-toe/blob/gh-pages/images/tic-wireframe.png "Wireframe"


   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>

