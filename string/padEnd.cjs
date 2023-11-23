// String.prototype.padEnd()
const prompt = require("prompt-sync")();

// const { redANSI, terminator } = require("../variables.mjs");
const redANSI = "\x1b[31m";
const terminator = "-------------------------------";

// The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// Expected output: "200  "

//!
// Parameters

// * targetLength

//     The length of the resulting string once the current str has been padded. //! If the value is less than or equal to str.length, the current string will be returned as-is.

// * padString Optional

//     The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).

//!
// Return value

// A String of the specified targetLength with the padString applied at the end of the current str.

//examples

"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"

const args = [
  { s: "Hello", tl: 0, ps: "Me", i: 0 },
  { s: "Hello", tl: 10, ps: "Me", i: 0 },
  { s: "Hello", tl: 4, ps: "furia", i: 0 },
  { s: "Hello", tl: 15, ps: "furia", i: 0 },
  { s: "Hello", tl: 0, ps: undefined, i: 0 },
  { s: "Hello", tl: 10, ps: undefined, i: 0 },
  {},
];

args.forEach(
  ({ s: string, tl: targetLength, ps: padString, i: isImportant }) => {
    try {
      if (isImportant !== undefined) {
        console.log(terminator);
        // console.log(isImportant ? `${redANSI}` : "", `→ S1: ${s1}, S2: ${s2}`);
        const result = string.padEnd(targetLength, padString);
        //
        const guess = prompt("guess: ");
        //
        console.log(result);
        console.log(guess);

        console.clear();
      } else {
        console.log(`${terminator}\n\n${terminator}\n`);
      }
    } catch (e) {
      console.log(redANSI, `ERR: ${e.message}`);
    }
  }
);
console.log(terminator);
