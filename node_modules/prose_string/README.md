# prose_string

Copyright (c) 2020 Seán D. Murray
SEE MIT LICENSE FILE

A string Utility. Make writing node easier, prettier and less error prone. Writes and reads more like prose

## Usage

```javascript
const string_util = require('prose_string');

// True if (or can be conveted to a string of) undefined, null or equal to a string of zero length after all space characters are removed.
string_util.isBlank(somestring);

// Inverse of isBlank.
string_util.notBlank(somestring);

// True if (or can be conveted to a string of) undefined, null or equal string of zero length. False even if all space characters.
string_util.isEmpty(somestring);

// Inverse of isEmpty.
string_util.notEmpty(somestring);

// where be any object or array of object that will be converted to string and put in a sentence seperated by a single space.
string_util.sentence(..args);

// Tries to convert primatives or objects to a string, if conversion fails the default value is returned.
string_util.toString(obj, defaultValue);

// Remove any and all space characters from begining and end of the given string, including any line or carriage returns. Note, uses above toString to convert input value.
string_util.trim(somestring);
```
