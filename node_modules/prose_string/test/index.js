const assert = require('assert');
const string_util = require('../index');

const defaultString = 'default';
const spaceString = ' ';
const testArray = [1, 2, 3, 4];
const testFunction = () => {};
const testNum = 123;
const testObj = { "a": "b" };
const testString = 'avalue';

// isBlank
assert.equal(string_util.isBlank(undefined), true, 'Undefined is empty');
assert.equal(string_util.isBlank(null), true, 'Null is empty');
assert.equal(string_util.isBlank(spaceString), true, 'A string with only a space characters');
assert.equal(string_util.isBlank(string_util.BLANK_STRING), true, 'Empty string');
assert.equal(string_util.isBlank(testString), false, 'String is not emtpy');
assert.throws(function () { string_util.isBlank(testArray); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.isBlank(testFunction); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.isBlank(testNum); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.isBlank(testObj); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.isBlank(false); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.isBlank(true); }, Error, 'Expected an exception!');
console.log('isBlank testing success');

// notBlank
assert.equal(string_util.notBlank(undefined), false, 'Undefined is empty');
assert.equal(string_util.notBlank(null), false, 'Null is empty');
assert.equal(string_util.notBlank(spaceString), false, 'A string with only a space characters');
assert.equal(string_util.notBlank(string_util.BLANK_STRING), false, 'Empty string');
assert.throws(function () { string_util.notBlank(testArray); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.notBlank(testFunction); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.notBlank(testNum); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.notBlank(testObj); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.notBlank(false); }, Error, 'Expected an exception!');
assert.throws(function () { string_util.notBlank(true); }, Error, 'Expected an exception!');
console.log('notBlank testing success');

// isEmpty
assert.equal(string_util.isEmpty(undefined), true, 'Undefined is empty');
assert.equal(string_util.isEmpty(null), true, 'Null is empty');
assert.equal(string_util.isEmpty(spaceString), false, 'A string with only a space characters');
assert.equal(string_util.isEmpty(string_util.BLANK_STRING), true, 'Empty string');
console.log('isEmpty testing success');

// notEmpty
assert.equal(string_util.notEmpty(undefined), false, 'Undefined is empty');
assert.equal(string_util.notEmpty(null), false, 'Null is empty');
assert.equal(string_util.notEmpty(spaceString), true, 'A string with only a space characters');
assert.equal(string_util.notEmpty(string_util.BLANK_STRING), false, 'Empty string');
console.log('notEmpty testing success');

// sentence
assert.equal(string_util.sentence(undefined), '', 'Undefined gets empty string');
assert.equal(string_util.sentence(null), '', 'Null gets empty string');
assert.equal(string_util.sentence('one'), 'one', 'Check string');
assert.equal(string_util.sentence('one', 'two'), 'one two', 'Check string');
assert.equal(string_util.sentence('one', [ 'two', 'three']), 'one two three', 'Check string');
console.log('sentence testing success');

// toString
assert.equal(string_util.toString(undefined, defaultString), defaultString, 'Undefined cant be converted return default');
assert.equal(string_util.toString(null, defaultString), defaultString, 'null cant be converted return default');
assert.equal(string_util.toString(string_util.BLANK_STRING), string_util.BLANK_STRING, 'Empty string');
assert.equal(string_util.toString(spaceString), spaceString, 'A string with only a space characters');
assert.equal(string_util.toString(testArray, defaultString), JSON.stringify(testArray), 'Convert an array');
assert.equal(string_util.toString(testFunction, defaultString), defaultString, 'Convert a function.');
assert.equal(string_util.toString(testNum, defaultString), '' + testNum, 'Convert a number');
assert.equal(string_util.toString(testObj, defaultString), JSON.stringify(testObj), 'Convert an object');
assert.equal(string_util.toString(testString, defaultString), testString, 'A string just returns itself');
assert.equal(string_util.toString(false, defaultString), 'false', 'Convert a false boolean');
assert.equal(string_util.toString(true, defaultString), 'true', 'Convert a true boolean');
console.log('toString testing success');

// trim
assert.equal(string_util.trim(undefined), undefined, 'Undefined returns just iself');
assert.equal(string_util.trim(null), null, 'Null returns just iself');
assert.equal(string_util.trim(string_util.BLANK_STRING), string_util.BLANK_STRING, 'Empty string');
assert.equal(string_util.trim(spaceString), string_util.BLANK_STRING, 'A space string is truned to emtpy string');
assert.equal(string_util.trim(" \b\f\n\r\t\v    "), string_util.BLANK_STRING, 'String with all space characters is truned to emtpy string');
assert.equal(string_util.trim(" \b\f\n testing \r\t\v    "), 'testing', 'String with all space characters is truned to emtpy string');
assert.equal(string_util.trim(testString), testString, 'A string just returns itself');
console.log('Trim testing success');

console.log('String-util testing done.');
