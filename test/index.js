const assert = require('assert');

const TicTacToe = require('../index.js')
const config = require('../lib/config.js');

let ticTacToe = new TicTacToe();
assert.equal(ticTacToe.isDone(), false, 'Game just started should not be done?');
assert.equal(ticTacToe.winner(), false, 'Game just started should be no winner?');

//////// NO WIN GAME //////////
assert.equal(ticTacToe.move(0, 0), true, 'Valid move should succeed!');//X
assert.equal(ticTacToe.move(0, 0), false, 'This square is already taken! Can not redo move?');
assert.equal(ticTacToe.move(0, 2), true, 'Valid move, should succeed');//O
assert.equal(ticTacToe.move(0, 1), true, 'Valid move, should succed');//X
assert.equal(ticTacToe.move(1, 0), true, 'Valid move, should succeed');//O
assert.equal(ticTacToe.move(1, 2), true, 'Valid move, should succeed');//X
assert.equal(ticTacToe.move(1, 1), true, 'Valid move, should succeed');//O
assert.equal(ticTacToe.move(2, 0), true, 'Valid move, should succeed');//X
assert.equal(ticTacToe.move(2, 2), true, 'Valid move, should succeed');//O
assert.equal(ticTacToe.move(2, 1), true, 'Valid move, should succeed');//X
// Done
assert.equal(ticTacToe.isDone(), true, 'The game should be done');
assert.equal(ticTacToe.winner(), false, 'Draw, no winner');
assert.equal(ticTacToe.move(1, 1), false, 'Move should fail');
console.log('No win game test success.');
//////// NO WIN GAME //////////

////////// TEST HORIZONTAL WIN /////
ticTacToe = new TicTacToe();
assert.equal(ticTacToe.move(0, 0), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(1, 0), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(0, 1), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(1, 1), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(0, 2), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(2, 2), false, 'Invalid move game done');
assert.equal(ticTacToe.isDone(), true, 'The game should be done');
assert.equal(ticTacToe.winner(), config.MARK_PLAYER_ONE, 'The winnner?');
console.log('Horizontal win game test success.');
////////// TEST HORIZONTAL WIN /////

////////// TEST VERTICAL WIN /////
ticTacToe = new TicTacToe();
assert.equal(ticTacToe.move(0, 0), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(0, 1), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(1, 2), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(1, 1), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(2, 0), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(2, 1), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(2, 2), false, 'Invalid move game done');
assert.equal(ticTacToe.isDone(), true, 'The game should be done');
assert.equal(ticTacToe.winner(), config.MARK_PLAYER_TWO, 'The winnner?');
console.log('Vertical win game test success.');
////////// TEST VERTICAL WIN /////

////////// TEST DIAGIONAL TOP LEFT TO BOTTOM RIGHT ////////
ticTacToe = new TicTacToe();
assert.equal(ticTacToe.move(0, 0), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(0, 1), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(1, 1), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(1, 2), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(2, 2), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(2, 1), false, 'Invalid move game done');
assert.equal(ticTacToe.isDone(), true, 'The game should be done');
assert.equal(ticTacToe.winner(), config.MARK_PLAYER_ONE, 'The winnner?');
console.log('Diagonal top left to bottom right win game test success.');
////////// TEST DIAGIONAL TOP LEFT TO BOTTOM RIGHT ////////

////////// TEST DIAGIONAL TOP RIGHT TO BOTTOM LEFT ////////
ticTacToe = new TicTacToe();
assert.equal(ticTacToe.move(0, 2), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(0, 1), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(1, 1), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(1, 2), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(2, 0), true, 'Valid move, should succeed');
assert.equal(ticTacToe.move(2, 1), false, 'Invalid move game done');
assert.equal(ticTacToe.isDone(), true, 'The game should be done');
assert.equal(ticTacToe.winner(), config.MARK_PLAYER_ONE, 'The winnner?');
console.log('Diagonal top right to bottom left win game test success.');
////////// TEST DIAGIONAL TOP RIGHT TO BOTTOM LEFT ////////
