# prose_array

Copyright (c) 2020 Seán D. Murray
SEE MIT LICENSE FILE

An array Utility. Make writing node easier, prettier and less error prone. Writes and reads more like prose.

## Usage

```javascript
const array_util = require('@lib/array-util');

// Take an array and split it into an array of chunks of euqal size. The last chunk will be equal or lesser size than chunkSize. If 1st argument is not an array, or the 2nd argument is not non zero positive number, an error is thrown.
array_util.chunk(myArray, chunkSize);

// Returns a copy of an array with unique elements and all null/undefined/empty/blank items removed.
array_util.clean(myArray);

// True if the input search value is found in the array. The sarch value can be a primative, Array, object, function.
array_util.contains(myArray, searchValue);

// Inverse of contains.
array_util.notContain(myArray, searchValue);

// Make a deep copy of the elements in the array and returns that new copy.
array_util.copy(myArray);

// Returns the following object: { itemsInLeftButNotInRight: [...], itemsInRightButNotInleft: [...] }
array_util.diff(array1, array2);

// Returns a new array that is all sub arrays flattened out into just one array.
array_util.flatten(myArray);

// True if input array is undefined, null or contains no elements. Throws an error if the input is not an array?
array_util.isEmpty(myArray);

// Inverse of isEmtpy.
array_util.notEmpty(myArray);

// Return a new array with any and all null/undefined/empty/blank items removed.
array_util.removeBlanks(myArray);

// Return a new array with only unique elements in it. Note if an element is an array or object a deep comparison is made to determin if has a duplicate.
array_util.unique(myArray);
```
