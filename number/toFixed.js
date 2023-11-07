import { redANSI, terminator } from "../variables.mjs";

// Number.prototype.toFixed()

// The toFixed() method of Number values formats this number using fixed-point notation.

const args = [
  { a: NaN, n: 0.3, i: 0 },
  { a: "Hello", n: 0.3, i: 1 }, // counts as 0
  { a: 231239127, n: 0.3, i: 1 },
  { a: 0.3, n: 23432, i: 1 }, // counts as 0
  { a: -1, n: 0.3, i: 1 },
  { a: Infinity, n: 0.3, i: 1 },
  { a: -Infinity, n: 0.3, i: 1 },
  { a: undefined, n: 0.3, i: 0 }, // count as 0
  { a: null, n: 0.3, i: 0 },
  { a: 100, n: 0.3, i: 0 },
  { a: "", n: 0.3, i: 11 },
  { a: 1.2124, n: 0.3, i: 1 }, //! neglect fractional part
  { a: 12.2124, n: 0.3, i: 1 }, //! same as above
  { a: 0.00000000000000000000001, n: 1.3, i: 1 },
  { a: 1.000000001, n: 0.3, i: 0 },
  { a: 1, n: 0.3, i: 1 },
  { a: 10, n: 0.3, i: 1 },
  { a: 0, n: 0.3, i: 1 },
  { a: -0, n: 0.3, i: 1 },
  { a: {}, n: 0.3, i: 1 },
  { a: "12HE", n: 1.3, i: 1 }, // arg to zero
  { a: 12n, n: 0.3, i: 1 }, //!imp
  //////
  { a: 50, n: 6.02 * 10 ** 23, i: 1 },
  ///////
  // it rounds up as it's less than Number.EPSILON away from 2.45.
  // This literal actually encodes the same number value as 2.45
  { a: 1, n: 2.449999999999999999, i: 0 },
  { a: 1, n: 2.45, i: 0 },
  { a: 1, n: 2.5, i: 0 },
  { a: 1, n: -2.34, i: 0 },
  { a: 1, n: -2.35, i: 0 },
  { a: 0, n: 2.5, i: 0 },
  /////
  { a: 1, n: 2.35, i: 0 },
  { a: 1, n: 2.34, i: 0 },
  /////
  { a: 2, n: 1.23e-10, i: 0 },
];

args.forEach(({ a: arg, n: number, i: isImportant }, index) => {
  try {
    console.log(terminator);
    console.log(isImportant ? `${redANSI}` : "", `${index}. → ARG: ${arg}`);

    const toExponential = number.toFixed(arg);

    console.log(toExponential);
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
