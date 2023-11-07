import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// * String.prototype.at()

// !returns undefined if idx is out range
//

// The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unidx located at the specified offset. This method allows for posidxive and negative integers. Negative integers count back from the last string character.

// * Return value
// A String consisting of the single UTF-16 code unidx located at the specified posidxion. Returns undefined if the given index can not be found.

const args = [
  { s: "Hello", idx: 0, i: 0 },
  { s: "I am Bohdan", idx: 0, i: 0 },
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
      console.log(string.at(idx));
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
