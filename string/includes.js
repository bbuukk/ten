import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// String.prototype.includes()

// The includes() method of String values performs a
//to determine whether a given string may be found within this string, returning true or false as appropriate.

// Parameters
// * searchString

//     A string to be searched for within str. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes includes() to search for the string "undefined", which is rarely what you want.

// * position Optional
//     The position within the string at which to begin searching for searchString. //!(Defaults to 0.)

const args = [
  { s1: "Hello", s2: " H", i: 0 },
  { s1: "  It's a ", s2: "a", i: 0 },
  { s1: "It's a", s2: "t", i: 0 },
  { s1: "It's a", s2: "T", i: 0 }, // !case-sensitive search
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
    p: -1,
    i: 1,
  },
  {
    s1: "To be, or not to be, that is the question.",
    s2: "",
    p: -1,
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
    p: 100,
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
      console.log(s1.includes(s2, position));
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
