import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// * String.prototype.charAt()

// !returns empty string if idx is out range

// The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

// charAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt() and String.fromCodePoint().

console.log(str);

const args = [
  { s: "Hello", idx: 0, i: 0 },
  { s: "I am Bohdan", idx: 0, i: 0 },
  // ! negative indexes don't work
  { s: "I am Bohdan", idx: -1, i: 0 },
  { s: "I am Bohdan", idx: -100, i: 0 },
  {},
  { s: "I am Bohdan", idx: null, i: 0 },
  { s: "I am Bohdan", idx: undefined, i: 0 },
  { s: "I am Bohdan", idx: 0, i: 0 },
  { s: "I am Bohdan", idx: NaN, i: 0 },
  {},
  // out of range => returns undefined
  { s: "I am Bohdan", idx: Infinity, i: 0 },
  { s: "I am Bohdan", idx: -Infinity, i: 0 },
  {},
  //  it does convert idx to number
  // ! coercion
  { s: "I am Bohdan", idx: "0", i: 0 },
  { s: "I am Bohdan", idx: "7", i: 0 },
  { s: "I am Bohdan", idx: "3h8", i: 0 },
  {},
  // ! gets utf-16 codepoint
  { s: "🌍", idx: 0, i: 1 },
  { s: "🌍", idx: 1, i: 1 },
];

args.forEach(({ s: string, idx, i: isImportant }) => {
  try {
    if (isImportant !== undefined) {
      console.log(terminator);
      console.log(
        isImportant ? `${redANSI}` : "",
        `→ STR: ${string}, IDX: ${idx}`
      );
      console.log(string.charAt(idx));
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
