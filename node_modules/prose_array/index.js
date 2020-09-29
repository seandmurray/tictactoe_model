/* jshint esversion: 6 */
// Copyright (c) 2020 Seán D. Murray
// SEE MIT LICENSE FILE
const is = require('prose_is');
const isit = require('prose_isit');
const object_util = require('prose_object');
const string_util = require('prose_string');

const TYPEOF_OBJECT = typeof {};
const TYPEOF_STRING = typeof '';

exports.chunk = (item, chunkSize) => {
	if (isit.notArray(item)) {
		throw new Error('An array type is expected.');
	}
	if (isit.notNumber(chunkSize) || (chunkSize < 1)) {
		throw new Error('An non zero positive number is expected!');
	}
	if (item.length < 1) {
		return [];
	}
	if (item.length <= chunkSize) {
		return [item.slice(0, item.length)];
	}
	let i = 0;
	let n = item.length;
	let chunks = [];
	while (i < n) {
		chunks.push(item.slice(i, i += chunkSize));
	}
	return chunks;
};

exports.clean = (item) => {
	if (is.nil(item)) {
		return item;
	}
	const tmp1 = exports.unique(item);
	const tmp2 = exports.removeBlanks(tmp1);
	return tmp2;
};

exports.contains = (item, searchValue) => {
	if (is.nil(searchValue)) {
		throw new Error('An defined non-null search value is expected');
	}
	if (is.nil(item)) {
		return false;
	}
	if (isit.notArray(item)) {
		throw new Error('An array type is expected.');
	}
	if (exports.isEmpty(item)) {
		return false;
	}

	for (let itemValue of item) {
		if (isit.aPrimitive(searchValue) && isit.aPrimitive(itemValue)) {
			if (searchValue === itemValue) {
				return true;
			}
		}
		const hashKey = object_util.toHash(searchValue);
		const testHashKey = object_util.toHash(itemValue);
		if (hashKey === testHashKey) {
			return true;
		}
	}
	return false;
};

exports.notContain = (item, searchValue) => {
	return exports.contains(item, searchValue) ? false : true;
};

exports.copy = (item, orderItems = false) => {
	if (isit.notArray(item)) {
		return object_util.copy(item, orderItems);
	}
	let result = [];
	item.forEach((value) => {
		result.push(exports.copy(value, orderItems));
	});
	if (orderItems) {
		return result.sort();
	}
	return result;
};

exports.diff = (item1, item2) => {
	const result = {
		itemsInLeftButNotInRight: [],
		itemsInRightButNotInleft: []
	};
	if (exports.isEmpty(item1) && exports.isEmpty(item2)) {
		return result;
	}
	if (exports.notEmpty(item1) && exports.isEmpty(item2)) {
		result.itemsInLeftButNotInRight = object_util.copy(item1);
		return result;
	}
	if (exports.isEmpty(item1) && exports.notEmpty(item2)) {
		result.itemsInRightButNotInleft = object_util.copy(item2);
		return result;
	}

	let diffMap1 = {};
	for (let value of item1) {
		diffMap1[object_util.toHash(value)] = value;
	}
	let diffMap2 = {};
	for (let value of item2) {
		diffMap2[object_util.toHash(value)] = value;
	}
	Object.keys(diffMap1).forEach((key) => {
		if (object_util.notHave(diffMap2, key)) {
			result.itemsInLeftButNotInRight.push(diffMap1[key]);
		}
	});
	Object.keys(diffMap2).forEach((key) => {
		if (object_util.notHave(diffMap1, key)) {
			result.itemsInRightButNotInleft.push(diffMap2[key]);
		}
	});
	return result;
};

exports.flatten = (item) => {
	if (isit.notArray(item)) {
		throw new Error('An array type is expected.');
	}
	return item.reduce((acc, val) => Array.isArray(val) ? acc.concat(exports.flatten(val)) : acc.concat(val), []);
};

exports.isEmpty = (item) => {
	if (is.nil(item)) {
		return true;
	}
	if (isit.notArray(item)) {
		throw new Error('An array type is expected.');
	}
	if (1 > item.length) {
		return true;
	}
	return false;
};

exports.notEmpty = (item) => {
	return exports.isEmpty(item) ? false : true;
};

exports.removeBlanks = (item) => {
	if (is.nil(item)) {
		return item;
	}
	if (isit.notArray(item)) {
		throw new Error('An array type is expected.');
	}
	return item.filter((val) => {
		if (is.nil(val)) {
			return false;
		}
		if (typeof val === TYPEOF_STRING) {
			return string_util.notBlank(val);
		}
		return true;
	});
};

exports.shuffle = (item) => {
	if (is.nil(item)) {
		return [];
	}
	return exports.copy(item).sort(() => Math.random() - 0.5);
};

exports.unique = (item) => {
	if (is.nil(item)) {
		return item;
	}

	if (exports.isEmpty(item)) {
		return new Array();
	}

	// Remove duplicates
	const result = [];
	const _unique = new Set();
	item.forEach((value) => {
		let hashKey = object_util.toHash(object_util.copy(value, true));
		if (false == _unique.has(hashKey)) {
			_unique.add(hashKey);
			result.push(object_util.copy(value));
		}
	});
	return result;
};
