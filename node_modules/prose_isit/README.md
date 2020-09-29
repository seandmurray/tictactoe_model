# prose_isit

Copyright (c) 2020 Seán D. Murray
SEE MIT LICENSE FILE

A type Utility. Make writing node easier, prettier and less error prone. Writes and reads more like prose

A utility to help discover what type a variable is... or is not.

## Notes

This util considers an Array as not an Object, so isit.anObject(['somearray']) is false. However isit.anArray(['somearray']) is true.

## Usage

```javascript
const isit = require('prose_isit');

/**
True if item is nil (null or undefined), a boolean false or an emtpy: String, Array, Object
**/
isit.empty(obj);

/**
False if item is not nil (null or undefined), a boolean true or not an emtpy: String, Array, Object
**/
isit.notEmpty(obj);

/**
True if item is an Array
**/
isit.anArray(obj);

/**
False if item is an Array
**/
isit.notArray(obj);

/**
True if item is a Boolean
if primitiveOnly is false (default) then true only for primative/non-object boolean
if primitiveOnly is true, then true for primative and object boolean
**/
isit.aBoolean(obj, primitiveOnly);

/**
False if item is a Boolean
if primitiveOnly is false (default) then flase only for primative/non-object boolean
if primitiveOnly is true, then false for primative and object boolean
**/
isit.notBoolean(obj, primitiveOnly);

/**
True if item is a function
**/
isit.aFunction (obj);

/**
False if item is a function
**/
isit.notFunction (obj);

/**
True if item is a number
**/
isit.aNumber(obj);

/**
False if item is a number
**/
isit.notNumber(obj); //True if not a valid number.

/**
True if item is an object
**/
isit.anObject(obj); //True if an object, false if an array.

/**
False if item is an object
**/
isit.notObject(obj); //True not an object and true if an array.

/**
True if item is a primative: nil (nul or undefined), number, string or boolean (not object boolean).
**/
isit.aPrimitive(obj); //True if a primitive value: undefined, null, number, string, boolean primitive, else false.

/**
False if item is a primative: nil (nul or undefined), number, string or boolean (not object boolean).
**/
isit.notPrimitive(obj); //True if not a primitive value: undefined, null, number, string, boolean primitive, else false.

/**
True if item is a string
**/
isit.aString(obj); //True if a string.

/**
False if item is a string
**/
isit.notString(obj); //True if not a string.

/**
True if item is a file
**/
isit.aFile(obj); //True if a file that exists else false.

/**
True if item is a file
**/
isit.notFile(obj); //False if a file that exists else true;
```
