const assert = require('assert');
const number_util = require('../index');

const booleanObjFalse = new Boolean(false);
const booleanObjTrue = new Boolean(true);
const spaceItems = " \b\f\n\r\t\v";
const testArray = [1, 2, 3, 4];
const testArrayEmpty = [];
const testFunction = ()=>{};
const testNum = 123;
const testObj = {"a":"b"};
const testString = 'avalue';

// between
assert.throws( function() { number_util.between(); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.between('a', 1, 10); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.between(5, 'a', 10); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.between(5, 1, 'a'); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.between(5, 1, 10, 'a'); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.between(5, 10, 1); }, Error, 'Expected an exception, min greater than max!');
assert.equal(number_util.between(5, 1, 10), true, 'Number is between min max, exclusive');
assert.equal(number_util.between(20, 1, 10), false, 'Number is not between min max, exclusive');
assert.equal(number_util.between(1, 5, 10), false, 'Number is between min max, exclusive');
assert.equal(number_util.between(5, 5, 10), false, 'Number is not between min max, exclusive');
assert.equal(number_util.between(5, 5, 10, true), true, 'Number is between min max, inclusive');
assert.equal(number_util.between(10, 5, 10), false, 'Number is not between min max, exclusive');
assert.equal(number_util.between(10, 5, 10), false, 'Number is not between min max, exclusive');
assert.equal(number_util.between(9, null, 10), true, 'Number is less than max, exclusive');
assert.equal(number_util.between(12, null, 10), false, 'Number is not less than max, exclusive');
assert.equal(number_util.between(10, null, 10), false, 'Number is not less than max, exclusive');
assert.equal(number_util.between(10, null, 10, true), true, 'Number is not less than max, inclusive');
assert.equal(number_util.between(1, 5), false, 'Number is not greater than min, exclusive');
assert.equal(number_util.between(10, 5), true, 'Number is greater than min, exclusive');
assert.equal(number_util.between(5, 5), false, 'Number is not greater than min, exclusive');
assert.equal(number_util.between(5, 5, null, true), true, 'Number is greater than min, inclusive');
console.log('between testing success');

// notBetween
assert.throws( function() { number_util.notBetween(); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.notBetween('a', 1, 10); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.notBetween(5, 'a', 10); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.notBetween(5, 1, 'a'); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.notBetween(5, 1, 10, 'a'); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.notBetween(5, 10, 1); }, Error, 'Expected an exception, min greater than max!');
assert.equal(number_util.notBetween(5, 1, 10), false, 'Number is notBetween min max, exclusive');
assert.equal(number_util.notBetween(20, 1, 10), true, 'Number is not notBetween min max, exclusive');
assert.equal(number_util.notBetween(1, 5, 10), true, 'Number is notBetween min max, exclusive');
assert.equal(number_util.notBetween(5, 5, 10), true, 'Number is not notBetween min max, exclusive');
assert.equal(number_util.notBetween(5, 5, 10, true), false, 'Number is notBetween min max, inclusive');
assert.equal(number_util.notBetween(10, 5, 10), true, 'Number is not notBetween min max, exclusive');
assert.equal(number_util.notBetween(10, 5, 10), true, 'Number is not notBetween min max, exclusive');
assert.equal(number_util.notBetween(9, null, 10), false, 'Number is less than max, exclusive');
assert.equal(number_util.notBetween(12, null, 10), true, 'Number is not less than max, exclusive');
assert.equal(number_util.notBetween(10, null, 10), true, 'Number is not less than max, exclusive');
assert.equal(number_util.notBetween(10, null, 10, true), false, 'Number is not less than max, inclusive');
assert.equal(number_util.notBetween(1, 5), true, 'Number is not greater than min, exclusive');
assert.equal(number_util.notBetween(10, 5), false, 'Number is greater than min, exclusive');
assert.equal(number_util.notBetween(5, 5), true, 'Number is not greater than min, exclusive');
assert.equal(number_util.notBetween(5, 5, null, true), false, 'Number is greater than min, inclusive');
console.log('notBetween testing success');

// cast
assert.equal(number_util.cast(), undefined, 'invalid number');
assert.equal(number_util.cast(null), undefined, 'invalid number');
assert.equal(number_util.cast('not a number'), undefined, 'invalid number');
assert.equal(number_util.cast({"one":"two"}), undefined, 'invalid number');
assert.equal(number_util.cast(''), undefined, 'invalid number');
assert.equal(number_util.cast('$%()&'), undefined, 'invalid number');
assert.equal(number_util.cast(5), 5, 'valid number');
assert.equal(number_util.cast("12"), 12, 'valid number');
assert.equal(number_util.cast("10,000"), 10000, 'valid number');
assert.equal(number_util.cast("100-*&^00"), 10000, 'valid number');
assert.equal(number_util.cast("10,000.00", /[,]/), 10000, 'valid number');
console.log('cast testing success');

// greaterthan
assert.throws( function() { number_util.greaterthan(); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.greaterthan('a'); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.greaterthan(1, 'b'); }, Error, 'Expected an exception!');
assert.equal(number_util.greaterthan(5, 1), true, 'Number is greater than min, exclusive');
assert.equal(number_util.greaterthan(5, 5), false, 'Number is greater than min, exclusive');
assert.equal(number_util.greaterthan(5, 5, true), true, 'Number is greater than min, exclusive');
console.log('greaterthan testing success');

// lessthan
assert.throws( function() { number_util.lessthan(); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.lessthan('a'); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.lessthan(1, 'b'); }, Error, 'Expected an exception!');
assert.equal(number_util.lessthan(1, 5), true, 'Number is less than min, exclusive');
assert.equal(number_util.lessthan(5, 5), false, 'Number is less than min, exclusive');
assert.equal(number_util.lessthan(5, 5, true), true, 'Number is less than min, exclusive');
console.log('lessthan testing success');

// zeroPositive
assert.throws( function() { number_util.zeroPositive(); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.zeroPositive('a'); }, Error, 'Expected an exception!');
assert.equal(number_util.zeroPositive(1), true, 'Number is less than min, exclusive');
assert.equal(number_util.zeroPositive(0), true, 'Number is less than min, exclusive');
assert.equal(number_util.zeroPositive(-1), false, 'Number is less than min, exclusive');
console.log('zeroPositive testing success');

// nonzeroPositive
assert.throws( function() { number_util.nonzeroPositive(); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.nonzeroPositive('a'); }, Error, 'Expected an exception!');
assert.equal(number_util.nonzeroPositive(1), true, 'Number is less than min, exclusive');
assert.equal(number_util.nonzeroPositive(0), false, 'Number is less than min, exclusive');
assert.equal(number_util.nonzeroPositive(-1), false, 'Number is less than min, exclusive');
console.log('nonzeroPositive testing success');

// zeroNegative
assert.throws( function() { number_util.zeroNegative(); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.zeroNegative('a'); }, Error, 'Expected an exception!');
assert.equal(number_util.zeroNegative(1), false, 'Number is less than min, exclusive');
assert.equal(number_util.zeroNegative(0), true, 'Number is less than min, exclusive');
assert.equal(number_util.zeroNegative(-1), true, 'Number is less than min, exclusive');
console.log('zeroNegative testing success');

// nonzeroNegative
assert.throws( function() { number_util.nonzeroNegative(); }, Error, 'Expected an exception!');
assert.throws( function() { number_util.nonzeroNegative('a'); }, Error, 'Expected an exception!');
assert.equal(number_util.nonzeroNegative(1), false, 'Number is less than min, exclusive');
assert.equal(number_util.nonzeroNegative(0), false, 'Number is less than min, exclusive');
assert.equal(number_util.nonzeroNegative(-1), true, 'Number is less than min, exclusive');
console.log('nonzeroNegative testing success');
