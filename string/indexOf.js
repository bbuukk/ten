// String.prototype.indexOf()

// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
);
// Expected output: "The index of the first "dog" from the beginning is 40"

console.log(
  `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);
// Expected output: "The index of the 2nd "dog" is 52"

//!
// Parameters

// * searchString

//     Substring to search for. All values are coerced to strings, so omitting it or passing undefined causes indexOf() to search for the string "undefined", which is rarely what you want.

// * position Optional

//     The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0.
//! If position is greater than the length of the calling string, the method doesn't search the calling string at all.
//! If position is less than zero, the method behaves as it would if position were 0.

//         'hello world hello'.indexOf('o', -5) returns 4 — because it causes the method to behave as if the second argument were 0, and the first occurrence of o at a position greater or equal to 0 is at position 4.
//         'hello world hello'.indexOf('world', 12) returns -1 — because, while it's true the substring world occurs at index 6, that position is not greater than or equal to 12.
//         'hello world hello'.indexOf('o', 99) returns -1 — because 99 is greater than the length of hello world hello, which causes the method to not search the string at all.

//!
// Return value

// The index of the first occurrence of searchString found, or -1 if not found.

// !important{
// Return value when using an empty search string

// Searching for an empty search string produces strange results. With no second argument, or with a second argument whose value is less than the calling string's length, the return value is the same as the value of the second argument:

"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8

// However, with a second argument whose value is greater than or equal to the string's length, the return value is the string's length:

"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 13); // returns 11
"hello world".indexOf("", 22); // returns 11
// !}
//Examples

"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10
