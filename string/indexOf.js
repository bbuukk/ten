import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// String.prototype.indexOf()
// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

//!
// Parameters
// * searchString
//     Substring to search for. All values are coerced to strings, so omitting it or passing undefined causes indexOf() to search for the string "undefined", which is rarely what you want.

// * position Optional
//     The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0.
//! If position is greater than the length of the calling string, the method doesn't search the calling string at all.
//! If position is less than zero, the method behaves as it would if position were 0.

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

const args = [
  { s1: "Hello", s2: " H", i: 0 },
  { s1: "  It's a ", s2: "a", i: 0 },
  { s1: "It's a", s2: "t", i: 0 },
  { s1: "It's a", s2: "T", i: 0 },
  {},
  //using position
  {
    s1: "To be, or not to be, that is the question.",
    s2: "to be",
    p: 19,
    i: 0,
  },
  // ! position defaults to 0
  {
    s1: "To be, or not to be, that is the question.",
    s2: ".",
    p: -1, // defaults
    i: 1,
  },
  {
    s1: "To be, or not to be, that is the question.",
    s2: "",
    p: -1, // defaults
    i: 1,
  },
  {
    s1: "To be, or not to be, that is the question.",
    s2: ".",
    p: undefined, // defaults
    i: 1,
  },
  {
    s1: "To be, or not to be, that is the question.",
    s2: ".",
    p: 100, // converts to zero
    i: 1,
  },
  {},
  // coercing to string
  { s1: "It's a", s2: undefined, i: 0 },
  { s1: "It's a", s2: null, i: 0 },
  { s1: "It's a", s2: Infinity, i: 0 },
  { s1: "It's a", s2: {}, i: 0 },
  { s1: "It's a", s2: [], i: 0 },
  { s1: "It's a", s2: [1, 23, 32456], i: 0 },
  { s1: "It's a", s2: [undefined, undefined, undefined], i: 1 },
  { s1: "It's a", s2: [null, null, null], i: 1 },
  { s1: "It's a", s2: () => {}, i: 0 },
  { s1: "It's a", s2: function () {}, i: 0 },
  {},
  // works with surrogate pairs in weird manner
  { s1: "🌍", s2: "🌍", i: 0 },
  { s1: "🌍", s2: "🌍", p: 1, i: 0 }, //s1.length == 2
  { s1: "𠮷", s2: "𠮾", i: 0 },
  {},
  //! searchString cannot be a regex
  {
    s1: "To be, or not to be, that is the question.",
    s2: new RegExp("."),
    i: 1,
  },
];

args.forEach(({ s1, s2, p: position, i: isImportant }) => {
  try {
    if (isImportant !== undefined) {
      console.log(terminator);
      console.log(isImportant ? `${redANSI}` : "", `→ S1: ${s1}, S2: ${s2}`);
      console.log(s1.indexOf(s2, position));
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
