/* jshint esversion: 6 */
// Copyright (c) 2020 Seán D. Murray
// SEE MIT LICENSE FILE
const fs = require('fs');
const is = require('prose_is');

const TYPEOF_BOOLEAN = typeof true;
const TYPEOF_NUMBER = typeof 1;
const TYPEOF_OBJECT = typeof {};
const TYPEOF_STRING = typeof '';
const TYPEOF_FUNCTION = typeof(() => {});

/**
True if item is an Array
**/
exports.anArray = (item) => {
	if (is.nil(item)) {
		return false;
	}
	return Array.isArray(item);
};

/**
False if item is an Array
**/
exports.notArray = (item) => {
	return exports.anArray(item) ? false : true;
};

/**
True if item is a Boolean
if primitiveOnly is false (default) then true only for primative/non-object boolean
if primitiveOnly is true, then true for primative and object boolean
**/
exports.aBoolean = (item, primitiveOnly = false) => {
	if (is.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_BOOLEAN) {
		return true;
	}
	if (primitiveOnly) {
		return false;
	}
	// if new Boolean() a an object
	if (typeof item === TYPEOF_OBJECT) {
		if (exports.anArray(item)) {
			return false;
		}
		if (true == item || false == item) {
			return true;
		}
	}
	return false;
};

/**
False if item is a Boolean
if primitiveOnly is false (default) then flase only for primative/non-object boolean
if primitiveOnly is true, then false for primative and object boolean
**/
exports.notBoolean = (item, primitiveOnly = false) => {
	return exports.aBoolean(item, primitiveOnly) ? false : true;
};

/**
True if item is nil (null or undefined), a boolean false or an emtpy: String, Array, Object
**/
exports.empty = (item) => {
	if (is.nil(item)) return true;
	if (exports.aBoolean(item)) return false;
	if (exports.aString(item) && (item.length == 0)) return true;
	if (exports.anArray(item) && (item.length == 0)) return true;
	if (exports.anObject(item) && (Object.keys(item).length == 0)) return true;
	// a file, a function, anything else return false.
	return false;
}

/**
False if item is not nil (null or undefined), a boolean true or not an emtpy: String, Array, Object
**/
exports.notEmpty = (item) => {
	return exports.empty(item) ? false : true;
};

/**
True if item is a file
**/
exports.aFile = (item) => { if (exports.aString(item) && fs.existsSync(item)) { return true;
	}
	return false;
};

/**
True if item is a file
**/
exports.notFile = (item) => {
	return exports.aFile(item) ? false : true;
};

/**
True if item is a function
**/
exports.aFunction = (item) => {
	if (is.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_FUNCTION) {
		return true;
	}
	return false;
};

/**
False if item is a function
**/
exports.notFunction = (item) => {
	return exports.aFunction(item) ? false : true;
};

/**
True if item is a number
**/
exports.aNumber = (item) => {
	if (is.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_NUMBER) {
		if (Number.isNaN(item)) {
			return false;
		}
		return true;
	}
	return false;
};

/**
False if item is a number
**/
exports.notNumber = (item) => {
	return exports.aNumber(item) ? false : true;
};

/**
True if item is an object
**/
exports.anObject = (item) => {
	if (is.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_OBJECT) {
		if (exports.anArray(item)) {
			return false;
		}
		return true;
	}
	return false;
};

/**
False if item is an object
**/
exports.notObject = (item) => {
	return exports.anObject(item) ? false : true;
};

/**
True if item is a primative: nil (nul or undefined), number, string or boolean (not object boolean).
**/
exports.aPrimitive = (item) => {
	if (is.nil(item) || exports.aNumber(item) || exports.aString(item) || exports.aBoolean(item, true)) {
		return true;
	}
	return false;
};

/**
False if item is a primative: nil (nul or undefined), number, string or boolean (not object boolean).
**/
exports.notPrimitive = (item) => {
	return exports.aPrimitive(item) ? false : true;
};

/**
True if item is a string
**/
exports.aString = (item) => {
	if (is.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_STRING) {
		return true;
	}
	return false;
};

/**
False if item is a string
**/
exports.notString = (item) => {
	return exports.aString(item) ? false : true;
};
