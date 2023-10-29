// String.prototype.startsWith()

// The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.startsWith("Sat", 3));
// Expected output: false

//!
// Parameters

//  *searchString

//     The characters to be searched for at the start of this string. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes startsWith() to search for the string "undefined", which is rarely what you want.

// * position Optional

//     The start position at which searchString is expected to be found (the index of searchString's first character). Defaults to 0.

// * Return value

// true if the given characters are found at the beginning of the string, including when searchString is an empty string; otherwise, false.

const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true
