# Tic Tac Toe Model

Copyright (c) 2019 Seán D. Murray
SEE MIT LICENSE FILE

A logical model playing the tic-tac-toe (naughts & crosses, Xs & Os) game.

## Usage

```javascript
const ticTacToe = new TicTacToe();
// Get whoes turn it is.
ticTacToe.turn();
// Make a move.
ticTacToe.move(0, 0); // X played
ticTacToe.move(1, 0);// O played
ticTacToe.move(0, 1);// X played
ticTacToe.turn(); // returns O
// Is the game done?
ticTacToe.isDone(); // returns false.
ticTacToe.move(1, 1);// O played
ticTacToe.move(0, 2);// X played
ticTacToe.move(2, 2);// O played
// Get the value at this coordinate.
ticTacToe.value(2, 2);// returns O
ticTacToe.isDone(); // returns true.
// Retrrns who the winner is.
ticTacToe.winner(); // returns player O
```
