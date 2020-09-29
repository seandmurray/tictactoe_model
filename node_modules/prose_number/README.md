# prose_number

Copyright (c) 2020 Seán D. Murray
SEE MIT LICENSE FILE

A number Utility. Make writing node easier, prettier and less error prone. Writes and reads more like prose.

## Usage

```javascript
const number_util= require('prose_number');

// For all of the methods:
// The 1st parameter is a number if it is not a number it throws a exception.
// See prose_isit for a method to determine if a var is a number.
// inclusive defaults to false, if set and not a boolean an error is thrown.

// Returns true if number is between min and max (inclusive depending on the value of that paramater).
// If both min and max are nil then error is thrown.
// If min or max are set to something other than nill or a number an error is thrown.
// If min is nil and max is not, returns true if number less than min (or equal depending on inclusive).
number_util.between(anumber, min, max, inclusive);

// Cast a non number into a number.
// This will return a value only for number or strings that can be converted to numbers.
// Input a number and a number is returned.
// Input a string like "10" and 10 is returned.
// Input a string like "10,000" and 10000 is returned.
// By default any non number values are striped from the string.
// So '10-*&^0' returns 100.
// You may change what characters are stripped by setting last argument with a regular expression.
// So cast("10,000", /[,]/g) will return 10000
number_util.cast(number, regex);

// The inverse of the above between method.
number_util.notBetween(number, min, max, inclusive)

// Returns true if number greater than min (or equal depending on inclusive).
number_util.greaterthan(number, min, inclusive)

// Returns true if number less than max (or equal depending on inclusive).
number_util.lessthan(number, max, inclusive)

// Returns true if the input number is zero or greater.
number_util.zeroPositive(number)

// Returns true if the input number is a positive number greater than zero but not zero.
number_util.nonzeroPositive(number)

// Returns true if the input number is zero or less than zero.
number_util.zeroNegative(number)

// Returns true if the input number is a negative number less than zero but not zero.
number_util.nonzeroNegative(number)
```
