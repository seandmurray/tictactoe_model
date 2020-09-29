const assert = require('assert');
const object_util = require('prose_object');
const array_util = require('../index');

const testArray = [1, 2, 3, 4];
const testArrayEmpty = [];
const testFunction = () => {};
const testNum = 123;
const testObj = { "a": "b" };
const testString = 'avalue';

let tmp1;
let tmp2;

// chunk
assert.throws(function () { array_util.chunk(); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.chunk(undefined, 1); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.chunk(null, 1); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.chunk(testNum, 1); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.chunk(testObj, 1); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.chunk(testString, 1); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.chunk(testArray); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.chunk(testArray, null); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.chunk(testArray, testString); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.chunk(testArray, 0); }, Error, 'Expected an exception!');
assert.equal(array_util.chunk([], 1).length, 0, 'Expecting empy array.');
tmp1 = array_util.chunk([1], 2);
assert.equal(tmp1.length, 1);
assert.equal(tmp1[0].length, 1);
assert.equal(tmp1[0][0], 1);
tmp1 = array_util.chunk([1, 2], 2);
assert.equal(tmp1.length, 1);
assert.equal(tmp1[0].length, 2);
assert.equal(tmp1[0][0], 1);
assert.equal(tmp1[0][1], 2);
tmp1 = array_util.chunk([1, 2, 3, 4, 5], 3);
assert.equal(tmp1.length, 2);
assert.equal(tmp1[0].length, 3);
assert.equal(tmp1[0][0], 1);
assert.equal(tmp1[0][1], 2);
assert.equal(tmp1[0][2], 3);
assert.equal(tmp1[1].length, 2);
assert.equal(tmp1[1][0], 4);
assert.equal(tmp1[1][1], 5);
console.log('chunk testing sucess');

// clean is not tested as it is a composit of unqiue and removeBlanks.

// contains
assert.throws(function () { array_util.contains(); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.contains(testArray); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.contains(testArray, null); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.contains(testFunction, testString); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.contains(testNum, testString); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.contains(testObj, testString); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.contains(testString, testString); }, Error, 'Expected an exception!');
assert.equal(array_util.contains(undefined, testString), false, 'An undefined array has no values.');
assert.equal(array_util.contains(null, testString), false, 'A null array has no values.');
assert.equal(array_util.contains(testArray, 1), true, 'Expect to find primitive number in the array');
tmp1 = [1, 2, { a: 'b' }]
tmp2 = { a: 'b' };
assert.equal(array_util.contains(tmp1, tmp2), true, 'Expect to find object in the array');
console.log('contains testing sucess');

// notContain
assert.throws(function () { array_util.notContain(); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.notContain(testArray); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.notContain(testArray, null); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.notContain(testFunction, testString); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.notContain(testNum, testString); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.notContain(testObj, testString); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.notContain(testString, testString); }, Error, 'Expected an exception!');
assert.equal(array_util.notContain(undefined, testString), true, 'An undefined array has no values.');
assert.equal(array_util.notContain(null, testString), true, 'A null array has no values.');
assert.equal(array_util.notContain(testArray, 1), false, 'Expect to find primitive number in the array');
tmp1 = [1, 2, { a: 'b' }]
tmp2 = { a: 'b' };
assert.equal(array_util.notContain(tmp1, tmp2), false, 'Expect to find object in the array');
console.log('notContain testing sucess');

// copy is tested extensivly in the object_util module.

// diff
tmp1 = { "itemsInLeftButNotInRight": [], "itemsInRightButNotInleft": [] };
assert.equal(object_util.equal(array_util.diff(), tmp1), true, '2 undefined inputs.');
assert.equal(object_util.equal(array_util.diff(undefined, undefined), tmp1), true, '2 undefined inputs.');
assert.equal(object_util.equal(array_util.diff(null, null), tmp1), true, '2 null inputs.');
assert.equal(object_util.equal(array_util.diff(testArray, testArray), tmp1), true, 'indentical input no differences.');
assert.equal(object_util.equal(array_util.diff(testArrayEmpty, testArrayEmpty), tmp1), true, 'indentical input no differences.');
assert.throws(function () { array_util.diff(testNum); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.diff(testObj); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.diff(testString); }, Error, 'Expected an exception!');
tmp1 = { itemsInLeftButNotInRight: [1], itemsInRightButNotInleft: [3] };
assert.equal(object_util.equal(array_util.diff([1, 2], [2, 3]), tmp1), true, 'Should find differences.');
console.log('diff testing success');

// flatten
assert.equal(object_util.equal(array_util.flatten(testArray), testArray), true, 'Returns the flat array put in.');
tmp1 = [1, 2, [3, 4, [5, 6],
  [7, 8], 9
]];
tmp2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
assert.equal(object_util.equal(array_util.flatten(tmp1), tmp2), true, 'Returns a flattened array.');
assert.throws(function () { array_util.flatten(); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.flatten(undefined); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.flatten(null); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.flatten(testNum); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.flatten(testObj); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.flatten(testString); }, Error, 'Expected an exception!');
console.log('flatten testing success');

// isEmtpy
assert.equal(array_util.isEmpty(), true, 'Undefined should return true.');
assert.equal(array_util.isEmpty(undefined), true, 'Undefined should return true.');
assert.equal(array_util.isEmpty(null), true, 'Null should return true.');
assert.equal(array_util.isEmpty(testArray), false, 'Non empty array.');
assert.equal(array_util.isEmpty(testArrayEmpty), true, 'Empty array should return true.');
assert.throws(function () { array_util.isEmpty(testNum); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.isEmpty(testObj); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.isEmpty(testString); }, Error, 'Expected an exception!');
console.log('isEmpty testing success');

// removeBlanks 
assert.equal(array_util.removeBlanks(), undefined, 'Undefined should return itself.');
assert.equal(array_util.removeBlanks(undefined), undefined, 'Undefined should return itself.');
assert.equal(array_util.removeBlanks(null), null, 'Null should return itself.');
assert.equal(object_util.equal(array_util.removeBlanks(testArray), testArray), true, 'Array with no blanks should be unchanged.');
assert.equal(object_util.equal(array_util.removeBlanks(testArrayEmpty), testArrayEmpty), true, 'Empty should be unchanged.');
tmp1 = [1, '', 2, 'a', '	', [3, 4], '       ', { b: 'c' }];
tmp2 = [1, 2, 'a', [3, 4], { b: 'c' }];
assert.equal(object_util.equal(array_util.removeBlanks(tmp1), tmp2), true, 'Array with blanks should be changed.');
assert.throws(function () { array_util.removeBlanks(testNum); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.removeBlanks(testObj); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.removeBlanks(testString); }, Error, 'Expected an exception!');
console.log('removeBlanks testing success');

// unique
assert.equal(array_util.unique(), undefined, 'Undefined just returns undefined.');
assert.equal(array_util.unique(undefined), undefined, 'Undefined just returns undefined.');
assert.equal(array_util.unique(null), null, 'Null just returns undefined.');
assert.throws(function () { array_util.unique(testNum); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.unique(testObj); }, Error, 'Expected an exception!');
assert.throws(function () { array_util.unique(testString); }, Error, 'Expected an exception!');
tmp1 = ['a', 'b', 'c', 'a', 'c', [],
  [],
  [1, 2],
  [2, 1], {}, { d: 'e', f: 'g' }, { f: 'g', d: 'e' }, {}
];
tmp2 = ['a', 'b', 'c', [],
  [1, 2], {}, { d: 'e', f: 'g' }
];
//assert.equal(object_util.equal(array_util.unique(tmp1), tmp2), true, 'Check against unique array');
console.log('Unique testing success');
