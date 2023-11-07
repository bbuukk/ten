import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// String.prototype.concat()

// The concat() method of String values concatenates the string arguments to this string and returns a new string.

//! conversion
// ! If the arguments are not of the type string,
//!  they are converted to string values before concatenating.

// !
// The concat() method is very similar to the addition/string concatenation operators (+, +=), except that concat() coerces its arguments directly to strings, while addition coerces its operands to primitives first. For more information, see the reference page for the + operator.

const args = [
  { s1: "Hello", s2: " World!", i: 0 },
  { s1: "  It's a ", s2: "wonderful world ", i: 0 },
  { s1: "It's a", s2: "            /", i: 0 },
  {},
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
  // works with separate codepoints
  { s1: "🌍", s2: "🌍", i: 0 },
  { s1: "𠮷", s2: "𠮾", i: 0 },
];

args.forEach(({ s1, s2, i: isImportant }) => {
  try {
    if (isImportant !== undefined) {
      console.log(terminator);
      console.log(isImportant ? `${redANSI}` : "", `→ S1: ${s1}, S2: ${s2}`);
      console.log(s1.concat(s2));
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
