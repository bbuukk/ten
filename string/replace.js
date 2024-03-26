import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

//? String.prototype.replace()

//? params
//  pattern
// It can be string or an Object with Symbol.replace method, usually a RegExp. Only first occurence of patter is replaced, but if RegExp used with g (global flag), all ones will be.
//  replacement
// It can be a string or a function returning replacement string.

//? cases
// If the pattern is an empty string, the replacement is prepended to the start of the string.
// js

"xxx".replace("", "_"); // "_xxx"

const args = [
  { s: "", s1: "Hello", s2: "Bye", i: 0 },
  { s: "", s1: "Hello", s2: "Bye", i: 0 },
  { s: "", s1: "Hello", s2: "Bye", i: 0 },
  {},
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
