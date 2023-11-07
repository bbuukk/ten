import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// String.fromCharCode()
// The String.fromCharCode() static method returns a string created from the specified sequence of //! UTF-16 code units.

// ! charCodeAt() always returns a value that is less than 65536

// !
// Parameters
// num1, …, numN
//! Numbers greater than 0xFFFF are truncated to the last 16 bits.
// ?  A number between 0 and 65535 (0xFFFF) representing a UTF-16 code unit No validity checks are performed.

const glob1 = "🌍".charCodeAt(0);
const glob2 = "🌍".charCodeAt(1);
const args = [
  { cs: [65, 66, 67], idx: 0, i: 0 },
  { cs: [0x12014], idx: 0, i: 0 },
  { cs: [8212], idx: 0, i: 0 },
  { cs: [55356, 57091], idx: 0, i: 0 },
  { cs: [0x2014], idx: 0, i: 0 },
  { cs: [0xd834, 0xdf06, 0x61, 0xd834, 0xdf07], idx: 0, i: 0 },
  {},
  { cs: [undefined, undefined], idx: 0, i: 0 },
  { cs: [null, n], idx: 0, i: 0 },
  { cs: [Infinity], idx: 0, i: 0 },
  { cs: [NaN], idx: 0, i: 0 },
  {},
  // ! surrogate pairs problems
  { cs: [glob1, glob2], idx: 0, i: 0 },
  {},
  //! Numbers greater than 0xFFFF are truncated to the last 16 bits.
  { cs: [70000], idx: 0, i: 0 },
  //? working with utf-32
  { cs: [80000], idx: 0, i: 0 },
  { cs: [66000], idx: 0, i: 0 },
  { cs: [66001], idx: 0, i: 0 },
];

args.forEach(({ cs, i: isImportant }) => {
  try {
    if (isImportant !== undefined) {
      console.log(terminator);
      console.log(isImportant ? `${redANSI}` : "", `→ CS: ${cs}`);
      console.log(String.fromCharCode(...cs));
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
