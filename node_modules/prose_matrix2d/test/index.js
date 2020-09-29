const assert = require('assert');
const Matrix = require('../index');

const matrix1 = new Matrix(3, 5, 1);
const matrix2  = new Matrix(3, 5, 1);
assert.equal(matrix1.equal(matrix2), true, 'Identical matrices should match');
matrix1.set(0,1,2);
assert.equal(matrix1.get(0,1), 2, 'Make sure value was set');
matrix2.set(0,1,2);
assert.equal(matrix2.get(0,1), 2, 'Make sure value was set');
assert.equal(matrix1.equal(matrix2), true, 'Identical matrices should match');
matrix1.setAll(3);
assert.equal(matrix1.get(1,2), 3, 'Make sure value was set');
matrix2.setAll(3);
assert.equal(matrix1.get(2,3), 3, 'Make sure value was set');
assert.equal(matrix1.equal(matrix2), true, 'Identical matrices should match');
console.log('Matrix2d testing success');
