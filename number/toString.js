import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// Number.prototype.toString()
// The toString() method of Number values returns a string representing this number value.

// Parameters
// radix Optional
//     An integer in the range 2 through 36 specifying the base to use for representing the number value. Defaults to 10.

const args = [
  { n: 0.000123, a: NaN, i: 0 },
  { n: 0.000123, a: Infinity, i: 0 },
  { n: 0.000123, a: -Infinity, i: 0 },
  { n: 0.000123, a: undefined, i: 1 },
  { n: 0.000123, a: null, i: 0 },
  {},
  { n: Number.MAX_VALUE, a: undefined, i: 0 },
  { n: null, a: undefined, i: 0 },
  { n: undefined, a: undefined, i: 0 },
  { n: Infinity, a: undefined, i: 0 },
  { n: NaN, a: undefined, i: 1 },
  {},
  { n: 0.000123, a: 10, i: 0 },
  { n: 0.000123, a: 16, i: 0 },
  { n: "Hello", a: 10, i: 1 }, //!imp
  { n: "1237021", a: 2, i: 1 }, //!imp
  {},
  // it ignores 0x part on the start of number if radix is not 16
  { n: 0x23213, a: undefined, i: 1 }, //!imp
  { n: 0x23213, a: 10, i: 1 }, //!imp
  { n: 0x23213, a: 16, i: 1 }, //!imp
  { n: 0x23213, a: 8, i: 1 },
  {},
  //can work with BigInt
  { n: 0x23213n, a: 8, i: 1 },
];

args.forEach(({ n: number, a: arg, i: isImportant }, index) => {
  try {
    if (isImportant !== undefined) {
      console.log(terminator);
      console.log(
        isImportant ? `${redANSI}` : "",
        `${index}. → NUM: ${number}, ARG: ${arg}`
      );
      console.log(number.toString(arg));
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
