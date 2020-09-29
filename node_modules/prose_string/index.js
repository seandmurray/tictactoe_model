/* jshint esversion: 6 */
// Copyright (c) 2020 Seán D. Murray
// SEE MIT LICENSE FILE
const array_util = require('prose_array');
const is = require('prose_is');
const isit = require('prose_isit');

exports.BLANK_ARRAY = '[]';
exports.BLANK_JSON = '{}';
exports.BLANK_STRING = '';

exports.SEPERATOR_FOR_COLLECTION = ',';
exports.SEPERATOR_FOR_NAME = '-';
exports.SEPERATOR_FOR_PATH = '/';
exports.SEPERATOR_FOR_STRINGS = ' ';
exports.UNCONVERTED_OBJECT = '[object Object]';

const TYPEOF_FUNCTION = typeof (() => {});

exports.isBlank = (str) => {
	if (is.nil(str)) {
		return true;
	}
	str = exports.trim(str);
	if (exports.isEmpty(str)) {
		return true;
	}
	if ((/^[\s\b\f\n\r\t\v]*$/).test(str)) {
		return true;
	}
	return false;
};

exports.notBlank = (str) => {
	return exports.isBlank(str) ? false : true;
};

exports.isEmpty = (str) => {
	if (is.nil(str)) {
		return true;
	}
	if (isit.notString(str)) {
		throw new Error('A string value is expected');
	}
	if (is.nil(str) || str.length < 1) {
		return true;
	}
	return false;
};

exports.notEmpty = (obj) => {
	return exports.isEmpty(obj) ? false : true;
};

exports.sentence = (...args) => {
	if (array_util.isEmpty(args)) return exports.BLANK_STRING;
	args = array_util.flatten(args);
	let result = '';
	for (const arg of args) {
		result += exports.SEPERATOR_FOR_STRINGS + exports.toString(arg, exports.BLANK_STRING);
	}
	return result.trim();
};

exports.toString = (obj, defaultValue) => {
	if (is.nil(obj)) {
		return defaultValue;
	}

	if (isit.aFunction(obj)) {
		return defaultValue;
	}

	if (isit.aString(obj)) {
		return obj;
	}

	if (isit.aNumber(obj)) {
		return '' + obj;
	}

	if (isit.aBoolean(obj)) {
		return obj.toString(obj);
	}

	if (isit.anArray(obj)) {
		return JSON.stringify(obj);
	}

	try {
		if (typeof obj.toString !== TYPEOF_FUNCTION) {
			const tmp = obj.toString();
			if (is.notNil(tmp) && (exports.UNCONVERTED_OBJECT === tmp)) {
				return tmp;
			}
		}
		const tmp = JSON.stringify(obj);
		if (is.notNil(tmp)) {
			return tmp;
		}
	}
	catch (e) {
		// Do nothing keep on trying
	}

	// If all else fails, return default.
	return defaultValue;
};

exports.trim = (str) => {
	if (is.nil(str)) {
		return str;
	}
	if (isit.notString(str)) {
		throw new Error('A string value is expected');
	}
	str = str.replace(/^[\s\b\f\n\r\t\v]*/g, exports.BLANK_STRING);
	str = str.replace(/[\s\b\f\n\r\t\v]*$/g, exports.BLANK_STRING);
	return str;
};

