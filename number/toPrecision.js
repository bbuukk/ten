import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// Number.prototype.toPrecision()
// The toPrecision() method of Number values returns a string representing this number to the specified precision.

const args = [
  { n: 0.000123, a: NaN, i: 0 },
  { n: 0.000123, a: Infinity, i: 0 },
  { n: 0.000123, a: -Infinity, i: 0 },
  { n: 0.000123, a: undefined, i: 1 },
  { n: 0.000123, a: null, i: 0 },
  { n: 5.123242, a: -1, i: 0 },
  { n: 0.000123, a: 5, i: 0 },
  { n: 0.000123, a: 2, i: 0 },
  { n: 5.123242, a: 5, i: 0 },
  { n: 5.123242, a: 2, i: 0 },
  { n: 5.123242, a: undefined, i: 0 },
  { n: 1.23e5, a: 5, i: 0 },
  { n: 1234.5, a: 2, i: 0 },
  { n: 1234.5, a: 2, i: 0 },
  {},
  { n: 2.449999999999999999, a: 2, i: 1 }, // ! rounding
  { n: 2.45, a: 2, i: 0 },
  { n: 2.5, a: 2, i: 0 },
  { n: 2.5, a: 1, i: 0 },
  { n: -2.45, a: 2, i: 0 },
  { n: -2.43, a: 2, i: 0 },
  {},
];

args.forEach(({ n: number, a: arg, i: isImportant }, index) => {
  try {
    if (isImportant !== undefined) {
      console.log(terminator);
      console.log(isImportant ? `${redANSI}` : "", `${index}. → ARG: ${arg}`);
      console.log(number.toPrecision(arg));
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
