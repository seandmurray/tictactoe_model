const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const isit = require('../index');


const booleanObjFalse = new Boolean(false);
const booleanObjTrue = new Boolean(true);
const testArray = [1, 2, 3, 4];
const testArrayEmpty = [];
const testFileExists = path.join(os.tmpdir(), 'isit_test_file_exists.tmp');
const testFileNotExists = path.join(os.tmpdir(), 'isit_test_file_not_exists.tmp');
const testFunction = () => {};
const testNum = 123;
const testObj = { "a": "b" };
const testObjEmpty = {};
const testString = 'avalue';
const testStringEmpty = '';

// anArray
assert.equal(isit.anArray(), false, 'Undefined is not an array');
assert.equal(isit.anArray(null), false, 'Null is not an array');
assert.equal(isit.anArray(undefined), false, 'Undefined is not an array');
assert.equal(isit.anArray(booleanObjFalse), false, 'Boolean object is not an array');
assert.equal(isit.anArray(booleanObjTrue), false, 'Boolean object is not an array');
assert.equal(isit.anArray(testArrayEmpty), true, 'Empty array is an array');
assert.equal(isit.anArray(testArray), true, 'Array is an array');
assert.equal(isit.anArray(testFunction), false, 'Function is not an array');
assert.equal(isit.anArray(testNum), false, 'Number is not an array');
assert.equal(isit.anArray(testObj), false, 'Object is not an array');
assert.equal(isit.anArray(testString), false, 'String is not an array');
assert.equal(isit.anArray(false), false, 'False is not an array');
assert.equal(isit.anArray(true), false, 'True is not an array');
console.log('anArray testing success');

// notArray
assert.equal(isit.notArray(), true, 'Undefined is not an array');
assert.equal(isit.notArray(null), true, 'Null is not an array');
assert.equal(isit.notArray(undefined), true, 'Undefined is not an array');
assert.equal(isit.notArray(booleanObjFalse), true, 'Boolean object is not an array');
assert.equal(isit.notArray(booleanObjTrue), true, 'Boolean object is not an array');
assert.equal(isit.notArray(testArrayEmpty), false, 'Empty array is an array');
assert.equal(isit.notArray(testArray), false, 'Array is an array');
assert.equal(isit.notArray(testFunction), true, 'Function is not an array');
assert.equal(isit.notArray(testNum), true, 'Number is not an array');
assert.equal(isit.notArray(testObj), true, 'Object is not an array');
assert.equal(isit.notArray(testString), true, 'String is not an array');
assert.equal(isit.notArray(false), true, 'true is not an array');
assert.equal(isit.notArray(true), true, 'false is not an array');
console.log('notArray testing success');

// aBoolean
assert.equal(isit.aBoolean(), false, 'Undefined is not a boolean');
assert.equal(isit.aBoolean(null), false, 'Null is not a boolean');
assert.equal(isit.aBoolean(undefined), false, 'Undefined is not a boolean');
assert.equal(isit.aBoolean(booleanObjFalse), true, 'Boolean object is a boolean');
assert.equal(isit.aBoolean(booleanObjTrue), true, 'Boolean object is a boolean');
assert.equal(isit.aBoolean(testArrayEmpty), false, 'Empty array is not a boolean');
assert.equal(isit.aBoolean(testArray), false, 'Array is not a boolean');
assert.equal(isit.aBoolean(testFunction), false, 'Function is not a boolean');
assert.equal(isit.aBoolean(testNum), false, 'Number is not a boolean');
assert.equal(isit.aBoolean(testObj), false, 'Object is not a boolean');
assert.equal(isit.aBoolean(testString), false, 'String is not a boolean');
assert.equal(isit.aBoolean(false), true, 'False is a boolean');
assert.equal(isit.aBoolean(true), true, 'True is a boolean');
console.log('aBoolean testing success');

// aBoolean primitive only
assert.equal(isit.aBoolean(null, true), false, 'Null is not a boolean primitive');
assert.equal(isit.aBoolean(undefined, true), false, 'Undefined is not a boolean primitive');
assert.equal(isit.aBoolean(booleanObjFalse, true), false, 'Boolean object is not a boolean primitive');
assert.equal(isit.aBoolean(booleanObjTrue, true), false, 'Boolean object is not a boolean primitive');
assert.equal(isit.aBoolean(testArrayEmpty, true), false, 'Empty array is not a boolean primitive');
assert.equal(isit.aBoolean(testArray, true), false, 'Array is not a boolean primitive');
assert.equal(isit.aBoolean(testFunction, true), false, 'Function is not a boolean primitive');
assert.equal(isit.aBoolean(testNum, true), false, 'Number is not a boolean primitive');
assert.equal(isit.aBoolean(testObj, true), false, 'Object is not a boolean primitive');
assert.equal(isit.aBoolean(testString, true), false, 'String is not a boolean primitive');
assert.equal(isit.aBoolean(false, true), true, 'False is a boolean primitive');
assert.equal(isit.aBoolean(true, true), true, 'True is a boolean primitive');
console.log('aBoolean primitive testing success');

// notBoolean
assert.equal(isit.notBoolean(), true, 'Undefined is not a boolean');
assert.equal(isit.notBoolean(null), true, 'Null is not a boolean');
assert.equal(isit.notBoolean(undefined), true, 'Undefined is not a boolean');
assert.equal(isit.notBoolean(booleanObjFalse), false, 'Boolean object is a boolean');
assert.equal(isit.notBoolean(booleanObjTrue), false, 'Boolean object is a boolean');
assert.equal(isit.notBoolean(testArrayEmpty), true, 'Empty array is not a boolean');
assert.equal(isit.notBoolean(testArray), true, 'Array is not a boolean');
assert.equal(isit.notBoolean(testFunction), true, 'Function is not a boolean');
assert.equal(isit.notBoolean(testNum), true, 'Number is not a boolean');
assert.equal(isit.notBoolean(testObj), true, 'Object is not a boolean');
assert.equal(isit.notBoolean(testString), true, 'String is not a boolean');
assert.equal(isit.notBoolean(false), false, 'Boolean is a boolean');
assert.equal(isit.notBoolean(true), false, 'Boolean is a boolean');
console.log('notBoolean testing success');

// notBoolean primitive
assert.equal(isit.notBoolean(null, true), true, 'Null is not a boolean primitive');
assert.equal(isit.notBoolean(undefined, true), true, 'Undefined is not a boolean primitive');
assert.equal(isit.notBoolean(booleanObjFalse, true), true, 'Boolean object is a not boolean primitive');
assert.equal(isit.notBoolean(booleanObjTrue, true), true, 'Boolean object is a not boolean primitive');
assert.equal(isit.notBoolean(testArrayEmpty, true), true, 'Empty array is not a boolean primitive');
assert.equal(isit.notBoolean(testArray, true), true, 'Array is not a boolean primitive');
assert.equal(isit.notBoolean(testFunction, true), true, 'Function is not a boolean primitive');
assert.equal(isit.notBoolean(testNum, true), true, 'Number is not a boolean primitive');
assert.equal(isit.notBoolean(testObj, true), true, 'Object is not a boolean primitive');
assert.equal(isit.notBoolean(testString, true), true, 'String is not a boolean primitive');
assert.equal(isit.notBoolean(false, true), false, 'Boolean is a boolean primitive');
assert.equal(isit.notBoolean(true, true), false, 'Boolean is a boolean primitive');
console.log('notBoolean primitive testing success');

// empty
assert.equal(isit.empty(), true, 'Undefined is empty');
assert.equal(isit.empty(null), true, 'null is empty');
assert.equal(isit.empty(undefined), true, 'Undefined is empty');
assert.equal(isit.empty(true), false, 'boolean is not empty');
assert.equal(isit.empty(false), false, 'boolean is not empty');
assert.equal(isit.empty(booleanObjTrue), false, 'boolean is not empty');
assert.equal(isit.empty(booleanObjFalse), false, 'boolean is not empty');
assert.equal(isit.empty(testStringEmpty), true, 'Empty string is empty');
assert.equal(isit.empty(testString), false, 'Not emtpty string is not empty');
assert.equal(isit.empty(testArrayEmpty), true, 'Emtpty array is empty');
assert.equal(isit.empty(testArray), false, 'Not emtpty array is not empty');
assert.equal(isit.empty(testObjEmpty), true, 'Emtpty object is empty');
assert.equal(isit.empty(testObj), false, 'Not emtpty object is not empty');
assert.equal(isit.empty(testFunction), false, 'Function is not empty');
console.log('empty testing success');

// notEmpty
assert.equal(isit.notEmpty(), false, 'Undefined is empty');
assert.equal(isit.notEmpty(null), false, 'null is empty');
assert.equal(isit.notEmpty(undefined), false, 'Undefined is empty');
assert.equal(isit.notEmpty(false), true, 'boolean is not empty');
assert.equal(isit.notEmpty(true), true, 'boolean is not empty');
assert.equal(isit.notEmpty(booleanObjTrue), true, 'boolean is not empty');
assert.equal(isit.notEmpty(booleanObjFalse), true, 'boolean is not empty');
assert.equal(isit.notEmpty(testStringEmpty), false, 'notEmpty string is empty');
assert.equal(isit.notEmpty(testString), true, 'Not emtpty string is not empty');
assert.equal(isit.notEmpty(testArrayEmpty), false, 'Emtpty array is empty');
assert.equal(isit.notEmpty(testArray), true, 'Not emtpty array is not empty');
assert.equal(isit.notEmpty(testObjEmpty), false, 'Emtpty object is empty');
assert.equal(isit.notEmpty(testObj), true, 'Not emtpty object is not empty');
assert.equal(isit.notEmpty(testFunction), true, 'Function is not empty');
console.log('notEmpty testing success');

// aFile
fs.writeFileSync(testFileExists, 'testfileexists');
assert.equal(isit.aFile(), false, 'Undefined is not a file');
assert.equal(isit.aFile(null), false, 'Null is not a file');
assert.equal(isit.aFile(undefined), false, 'Undefined is not a file');
assert.equal(isit.aFile(booleanObjFalse), false, 'Boolean object is not a file');
assert.equal(isit.aFile(booleanObjTrue), false, 'Boolean object is not a file');
assert.equal(isit.aFile(testArrayEmpty), false, 'Empty array is not a file');
assert.equal(isit.aFile(testArray), false, 'Array is not a file');
assert.equal(isit.aFile(testNum), false, 'Number is not a file');
assert.equal(isit.aFile(testObj), false, 'Object is not a file');
assert.equal(isit.aFile(testString), false, 'String is not a file');
assert.equal(isit.aFile(testFileExists), true, 'Object is an existing file');
assert.equal(isit.aFile(testFileNotExists), false, 'Object is not an existing file');
console.log('aFile testing success');

// notFile
assert.equal(isit.notFile(), true, 'Undefined is not a file');
assert.equal(isit.notFile(null), true, 'Null is not a file');
assert.equal(isit.notFile(undefined), true, 'Undefined is not a file');
assert.equal(isit.notFile(booleanObjFalse), true, 'Boolean object is not a file');
assert.equal(isit.notFile(booleanObjTrue), true, 'Boolean object is not a file');
assert.equal(isit.notFile(testArrayEmpty), true, 'Empty array is not a file');
assert.equal(isit.notFile(testArray), true, 'Array is not a file');
assert.equal(isit.notFile(testNum), true, 'Number is not a file');
assert.equal(isit.notFile(testObj), true, 'Object is not a file');
assert.equal(isit.notFile(testString), true, 'String is not a file');
assert.equal(isit.notFile(testFileExists), false, 'Object is an existing file');
assert.equal(isit.notFile(testFileNotExists), true, 'Object is not an existing file');
console.log('notFile testing success');

// aFunction
assert.equal(isit.aFunction(), false, 'Undefined is a not a function');
assert.equal(isit.aFunction(null), false, 'Null is not a function');
assert.equal(isit.aFunction(undefined), false, 'Undefined is a not a function');
assert.equal(isit.aFunction(booleanObjFalse), false, 'Boolean object is not a function');
assert.equal(isit.aFunction(booleanObjTrue), false, 'Boolean object is not a function');
assert.equal(isit.aFunction(testArrayEmpty), false, 'Empty array is not a function');
assert.equal(isit.aFunction(testArray), false, 'Array is not a function');
assert.equal(isit.aFunction(testFunction), true, 'Function is a function');
assert.equal(isit.aFunction(testNum), false, 'Number is not a function');
assert.equal(isit.aFunction(testObj), false, 'Object is not a function');
assert.equal(isit.aFunction(testString), false, 'String is not a function');
assert.equal(isit.aFunction(false), false, 'Boolean is not a function');
assert.equal(isit.aFunction(true), false, 'Boolean is not a function');
console.log('aFunction testing success');

// notFunction
assert.equal(isit.notFunction(), true, 'Undefined is a not a function');
assert.equal(isit.notFunction(null), true, 'Null is not a function');
assert.equal(isit.notFunction(undefined), true, 'Undefined is a not a function');
assert.equal(isit.notFunction(booleanObjFalse), true, 'Boolean object is not a function');
assert.equal(isit.notFunction(booleanObjTrue), true, 'Boolean object is not a function');
assert.equal(isit.notFunction(testArrayEmpty), true, 'Empty array is not a function');
assert.equal(isit.notFunction(testArray), true, 'Array is not a function');
assert.equal(isit.notFunction(testFunction), false, 'Function is a function');
assert.equal(isit.notFunction(testNum), true, 'Number is not a function');
assert.equal(isit.notFunction(testObj), true, 'Object is not a function');
assert.equal(isit.notFunction(testString), true, 'String is not a function');
assert.equal(isit.notFunction(true), true, 'Boolean is not a function');
assert.equal(isit.notFunction(true), true, 'Boolean is not a function');
console.log('notFunction testing success');

// aNumber
assert.equal(isit.aNumber(), false, 'Undefined is not a number');
assert.equal(isit.aNumber(null), false, 'Null is a not number');
assert.equal(isit.aNumber(undefined), false, 'Undefined is not a number');
assert.equal(isit.aNumber(booleanObjFalse), false, 'Boolean object is not a number');
assert.equal(isit.aNumber(booleanObjTrue), false, 'Boolean object is not a number');
assert.equal(isit.aNumber(testArrayEmpty), false, 'Empty array is not a number');
assert.equal(isit.aNumber(testArray), false, 'Array is not a number');
assert.equal(isit.aNumber(testFunction), false, 'Function is not a number');
assert.equal(isit.aNumber(testNum), true, 'Number is a number');
assert.equal(isit.aNumber(testObj), false, 'Object is not a number');
assert.equal(isit.aNumber(testString), false, 'String is not a number');
assert.equal(isit.aNumber(false), false, 'Boolean is not a number');
assert.equal(isit.aNumber(true), false, 'Boolean is not a number');
console.log('aNumber testing success');

// notNumber
assert.equal(isit.notNumber(), true, 'Undefined is not a number');
assert.equal(isit.notNumber(null), true, 'Null is a not number');
assert.equal(isit.notNumber(undefined), true, 'Undefined is not a number');
assert.equal(isit.notNumber(booleanObjFalse), true, 'Boolean object is not a number');
assert.equal(isit.notNumber(booleanObjTrue), true, 'Boolean object is not a number');
assert.equal(isit.notNumber(testArrayEmpty), true, 'Empty array is not a number');
assert.equal(isit.notNumber(testArray), true, 'Array is not a number');
assert.equal(isit.notNumber(testFunction), true, 'Function is not a number');
assert.equal(isit.notNumber(testNum), false, 'Number is a number');
assert.equal(isit.notNumber(testObj), true, 'Object is not a number');
assert.equal(isit.notNumber(testString), true, 'String is not a number');
assert.equal(isit.notNumber(false), true, 'Boolean is not a number');
assert.equal(isit.notNumber(true), true, 'Boolean is not a number');
console.log('notNumber testing success');

// anObject
assert.equal(isit.anObject(), false, 'Undefined is not an object');
assert.equal(isit.anObject(null), false, 'Null is a not object');
assert.equal(isit.anObject(undefined), false, 'Undefined is not an object');
assert.equal(isit.anObject(booleanObjFalse), true, 'Boolean object is an object');
assert.equal(isit.anObject(booleanObjTrue), true, 'Boolean object is an object');
assert.equal(isit.anObject(testArrayEmpty), false, 'Empty array is not an object');
assert.equal(isit.anObject(testArray), false, 'Array is not an object');
assert.equal(isit.anObject(testFunction), false, 'Function is not an object');
assert.equal(isit.anObject(testNum), false, 'Number is an object');
assert.equal(isit.anObject(testObj), true, 'Object is not an object');
assert.equal(isit.anObject(testString), false, 'String is not an object');
assert.equal(isit.anObject(false), false, 'Boolean is not an object');
assert.equal(isit.anObject(true), false, 'Boolean is not an object');
console.log('anObject testing success');

// notObject
assert.equal(isit.notObject(), true, 'Undefined is not an object');
assert.equal(isit.notObject(null), true, 'Null is a not object');
assert.equal(isit.notObject(undefined), true, 'Undefined is not an object');
assert.equal(isit.notObject(booleanObjFalse), false, 'Boolean object is an object');
assert.equal(isit.notObject(booleanObjTrue), false, 'Boolean object is an object');
assert.equal(isit.notObject(testArrayEmpty), true, 'Empty array is not an object');
assert.equal(isit.notObject(testArray), true, 'Array is not an object');
assert.equal(isit.notObject(testFunction), true, 'Function is not an object');
assert.equal(isit.notObject(testNum), true, 'Number is an object');
assert.equal(isit.notObject(testObj), false, 'Object is not an object');
assert.equal(isit.notObject(testString), true, 'String is not an object');
assert.equal(isit.notObject(false), true, 'Boolean is not an object');
assert.equal(isit.notObject(true), true, 'Boolean is not an object');
console.log('notObject testing success');

// aPrimitive
assert.equal(isit.aPrimitive(), true, 'Undefined is a primitive');
assert.equal(isit.aPrimitive(null), true, 'Null is a primitive');
assert.equal(isit.aPrimitive(undefined), true, 'Undefined is a primitive');
assert.equal(isit.aPrimitive(booleanObjFalse), false, 'Boolean object is not a primitive');
assert.equal(isit.aPrimitive(booleanObjTrue), false, 'Boolean object is not primitive a primitive');
assert.equal(isit.aPrimitive(testArrayEmpty), false, 'Empty array is not a primitive');
assert.equal(isit.aPrimitive(testArray), false, 'Array is not a primitive');
assert.equal(isit.aPrimitive(testFunction), false, 'Function is not a primitive');
assert.equal(isit.aPrimitive(testNum), true, 'Number is a primitive');
assert.equal(isit.aPrimitive(testObj), false, 'Object is not a primitive');
assert.equal(isit.aPrimitive(testString), true, 'String is a primitive');
assert.equal(isit.aPrimitive(false), true, 'Boolean primitive is a primitive');
assert.equal(isit.aPrimitive(true), true, 'Boolean primitive ia a primitive');
console.log('aPrimitive testing success');

// notPrimitive
assert.equal(isit.notPrimitive(), false, 'Undefined is a primitive');
assert.equal(isit.notPrimitive(null), false, 'Null is a primitive');
assert.equal(isit.notPrimitive(undefined), false, 'Undefined is a primitive');
assert.equal(isit.notPrimitive(booleanObjFalse), true, 'Boolean object is not a primitive');
assert.equal(isit.notPrimitive(booleanObjTrue), true, 'Boolean object is not a primitive');
assert.equal(isit.notPrimitive(testArrayEmpty), true, 'Empty array is not a primitive');
assert.equal(isit.notPrimitive(testArray), true, 'Array is not a primitive');
assert.equal(isit.notPrimitive(testFunction), true, 'Function is not a primitive');
assert.equal(isit.notPrimitive(testNum), false, 'Number is a primitive');
assert.equal(isit.notPrimitive(testObj), true, 'Object is not a primitive');
assert.equal(isit.notPrimitive(testString), false, 'String is a primitive');
assert.equal(isit.notPrimitive(false), false, 'Boolean primitive is a primitive');
assert.equal(isit.notPrimitive(true), false, 'Boolean primitive ia a primitive');
console.log('notprimitive testing success');

// aString
assert.equal(isit.aString(), false, 'Undefined is not a string');
assert.equal(isit.aString(null), false, 'Null is a not object');
assert.equal(isit.aString(undefined), false, 'Undefined is not a string');
assert.equal(isit.aString(booleanObjFalse), false, 'Boolean object is a string');
assert.equal(isit.aString(booleanObjTrue), false, 'Boolean object is a string');
assert.equal(isit.aString(testArrayEmpty), false, 'Empty array is not a string');
assert.equal(isit.aString(testArray), false, 'Array is not a string');
assert.equal(isit.aString(testFunction), false, 'Function is not a string');
assert.equal(isit.aString(testNum), false, 'Number is a string');
assert.equal(isit.aString(testObj), false, 'Object is not a string');
assert.equal(isit.aString(testString), true, 'String is a string');
assert.equal(isit.aString(false), false, 'Boolean is not a string');
assert.equal(isit.aString(true), false, 'Boolean is not a string');
console.log('aString testing success');

// notString
assert.equal(isit.notString(), true, 'Undefined is not a string');
assert.equal(isit.notString(null), true, 'Null is a not object');
assert.equal(isit.notString(undefined), true, 'Undefined is not a string');
assert.equal(isit.notString(booleanObjFalse), true, 'Boolean object is a string');
assert.equal(isit.notString(booleanObjTrue), true, 'Boolean object is a string');
assert.equal(isit.notString(testArrayEmpty), true, 'Empty array is not a string');
assert.equal(isit.notString(testArray), true, 'Array is not a string');
assert.equal(isit.notString(testFunction), true, 'Function is not a string');
assert.equal(isit.notString(testNum), true, 'Number is a string');
assert.equal(isit.notString(testObj), true, 'Object is not a string');
assert.equal(isit.notString(testString), false, 'String is a string');
assert.equal(isit.notString(false), true, 'Boolean is not a string');
assert.equal(isit.notString(true), true, 'Boolean is not a string');
console.log('notString testing success');

console.log('prose_isit testing done');
