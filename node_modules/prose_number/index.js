/* jshint esversion: 6 */
// Copyright (c) 2020 Seán D. Murray
// SEE MIT LICENSE FILE
const is = require('prose_is');
const isit = require('prose_isit');

const NOT_A_NUMBER_REGEX = /[^\d]+/g;
const NOT_A_NUMBER_CODE = 'NaN'

exports.between = (number, min, max, inclusive = false) => {
	if (isit.notNumber(number)) throw new Error('A valid number is required?');
	if (isit.notBoolean(inclusive)) throw new Error('Inclusive must be a valid boolean value?');

	if (isit.aNumber(min) && inclusive) min--;
	if (isit.aNumber(max) && inclusive) max++;

	if (isit.aNumber(min) && isit.aNumber(max)) {
		if (min >= max) throw new Error('The min must be less than the max, exclusive!');
		if ((min < number) && (max > number)) {
			return true;
		}
		return false;
	}
	else if (isit.aNumber(min) && is.nil(max)) {
		if (min < number) {
			return true;
		}
		return false;
	}
	else if (is.nil(min) && isit.aNumber(max)) {
		if (max > number) {
			return true;
		}
		return false;
	}
	throw new Error('Min and max can be: both valid numbers, number and nil or nil and a number.');
};

exports.cast = (possibleNumber, regex=NOT_A_NUMBER_REGEX) => {
	if(is.nil(possibleNumber)) return undefined;
	if(isit.aNumber(possibleNumber)) return possibleNumber;
	if(isit.aString(possibleNumber)) {
		const str = possibleNumber.trim().replace(regex, '');
		if(str.length < 1) return undefined;
		const num = Number(str);
		if (NOT_A_NUMBER_CODE === num) return undefined;
		return num;
	}
	return undefined;
};

exports.notBetween = (number, min, max, inclusive = false) => {
	return exports.between(number, min, max, inclusive) ? false : true;
};

exports.greaterthan = (number, min, inclusive) => {
	return exports.between(number, min, null, inclusive);
};

exports.lessthan = (number, max, inclusive) => {
	return exports.between(number, null, max, inclusive);
};

exports.zeroPositive = (number) => {
	return exports.between(number, 0, null, true);
};

exports.nonzeroPositive = (number) => {
	return exports.between(number, 0, null);
};

exports.zeroNegative = (number) => {
	return exports.between(number, null, 0, true);
};

exports.nonzeroNegative = (number) => {
	return exports.between(number, null, 0);
};
