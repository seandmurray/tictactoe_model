const is = require('prose_is');
const Matrix = require('prose_matrix2d');

const config = require("./lib/config.js");
const calculateWinner = require("./lib/CalculateWinner.js");

const TURNS = config.SIZE * config.SIZE;

module.exports = class TickTacToe {

  constructor() {
    this._count = 0;
    this._done = false;
    this._matrix = new Matrix(config.SIZE, config.SIZE);
    this._turn = config.MARK_PLAYER_ONE;
    this._winner = false;
  }

  isDone() {
    return this._done ? true : false;
  }

  // Does nothing if the game is done.
  // Does nothing if the square is already used.
  // Does nothing if the input coordinates are invalid.
  // Note, the player is not in the input. We know which player is next
  // and as such that is the player move we execute.
  move(x, y) {
    if (
      (this._done) ||
      is.notNil(this._matrix.get(x, y))
    ) {
      return false;
    }
    this._matrix.set(x, y, this._turn);
    this._winner = calculateWinner(this._matrix);
    if (this._winner) {
      this._done = true;
      return true;
    }
    this._turn = (this._turn === config.MARK_PLAYER_ONE) ? config.MARK_PLAYER_TWO : config.MARK_PLAYER_ONE;
    this._count++;
    if (this._count >= TURNS) {
      this._done = true;
    }
    return true;
  }

  squares() {
    return this._matrix.raw();
  }

  turn() {
    return this._turn;
  }

  value(x, y) {
    return this._matrix.get(x, y);
  }

  winner() {
    return this._done ? this._winner : false;
  }

};
