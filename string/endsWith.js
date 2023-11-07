import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// String.prototype.endsWith()
// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

//!
// Parameters

// * searchString
//     The characters to be searched for at the end of str. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes endsWith() to search for the string "undefined", which is rarely what you want.

//* endPosition Optional
//     The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length.

const args = [
  { s1: "Hello", s2: " World!", i: 0 },
  { s1: "  It's a ", s2: "a ", i: 0 },
  { s1: "It's a", s2: "", i: 0 },
  { s1: "do you question your reality?", s2: "?", i: 0 },
  {},
  //using position
  {
    s1: "To be, or not to be, that is the question.",
    s2: "to be",
    p: 19,
    i: 0,
  },
  // ! position defaults to s1.length
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
    p: null, // converts to zero
    i: 1,
  },
  {},
  // coercing to strign all s2, if it is not yet
  { s1: "It's a", s2: undefined, i: 1 }, //looking for 'undefined'
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
  // works with separate codepoints
  { s1: "🌍", s2: "🌍", i: 0 },
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
      console.log(s1.endsWith(s2, position));
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
