/* jshint esversion: 6 */
// Copyright (c) 2019 Seán D. Murray
// SEE MIT LICENSE FILE
const number_util = require('prose_number');
const object_util = require('prose_object');

function _init(xSize, ySize, value) {
	const result = [];
	for (let x = 0; x < xSize; x++) {
		const inner = [];
		for (let y = 0; y < ySize; y++) {
			inner.push(value);
		}
		result.push(inner);
	}
	return result;
}

function validCoordinates(x, y, xSize, ySize) {
	if (number_util.notBetween(x, -1, xSize)) throw new Error('The X coordinate: "' + x + '" is not valid.');
	if (number_util.notBetween(y, -1, ySize)) throw new Error('The Y coordinate: "' + y + '" is not valid.');
}

function validSizes(xSize, ySize) {
	if (number_util.zeroNegative(xSize)) throw new Error('The X size: "' + xSize + '" is not a valid non-zero-positive number?');
	if (number_util.zeroNegative(ySize)) throw new Error('The Y size: "' + ySize + '" is not a valid non-zero-positive number?');
}

module.exports = class Matrix2d {

	constructor(xSize, ySize, defaultValue) {
		validSizes(xSize, ySize);
		this._matrix = _init(xSize, ySize, defaultValue);
	}

	xSize() {
		return this._matrix.length;
	}

	ySize() {
		return (this._matrix[0]).length;
	}

	get(x, y) {
		validCoordinates(x, y, this.xSize(), this.ySize());
		return this._matrix[x][y];
	}

	set(x, y, value) {
		validCoordinates(x, y, this.xSize(), this.ySize());
		this._matrix[x][y] = value;
	}

	setAll(value) {
		this._matrix = _init(this.xSize(), this.ySize(), value);
	}

	equal(matrix) {
		if (
			(object_util.notHave(matrix, 'xSize')) ||
			(object_util.notHave(matrix, 'ySize')) ||
			(this.xSize() !== matrix.xSize()) ||
			(this.ySize() !== matrix.ySize())
		) {
			return false;
		}
		return object_util.equal(this._matrix, matrix.raw());
	}

	raw() {
		return object_util.copy(this._matrix);
	}

};
