import { blackANSI, blueANSI, redANSI, terminator } from "../variables.mjs";

// Number.prototype.valueOf()
// The valueOf() method of Number values returns the value of this number.

const args = [
  { n: 0, i: 0 },
  { n: NaN, i: 0 },
  { n: Infinity, i: 0 },
  { n: -Infinity, i: 0 },
  { n: undefined, i: 0 },
  { n: null, i: 0 },
  {},
  { n: 0.000123, i: 0 },
  { n: 123238, i: 0 },
  {},
  // it returns with e notation
  { n: 0.000000000000000000001, i: 0 },
  { n: -0.00000000000000000001, i: 0 },
  { n: 0.00000000000000000000199999, i: 0 },
  { n: 712312873128326138129371298, i: 0 },
  { n: -712312873128326138129371298, i: 0 },
  { n: Number.MAX_VALUE, i: 1 },
  { n: Number.MAX_VALUE + 1000, i: 1 },
  { n: Number.MAX_VALUE + Number.MAX_VALUE, i: 1 },
  {},
  { n: 0x143891, i: 1 }, //returns in decimal
  {},
  { n: 143891n, i: 1 },
  {},
  { n: 2.4999999999999999999999999, i: 1 },
  { n: 2.45, i: 0 },
  { n: 2.5, i: 0 },
  { n: 2.99999999999999999999, i: 1 },
];

args.forEach(({ n: number, i: isImportant }, index) => {
  try {
    if (isImportant !== undefined) {
      console.log(terminator);
      console.log(
        isImportant ? `${redANSI}` : "",
        `${index}. → NUM: ${number}`
      );
      console.log(number.valueOf());
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
