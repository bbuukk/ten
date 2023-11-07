// Number.prototype.toExponential()

import { redANSI, terminator } from "../variables.mjs";

// The toExponential() method of Number values returns a string representing this number in exponential notation. 1- 1000

const args = [
  { a: NaN, i: 0 }, // converts to zero
  { a: "Hello", i: 1 }, //! counts as 0
  { a: -1, i: 1 },
  { a: Infinity, i: 1 }, //! does not convert Infinity to zero
  { a: -Infinity, i: 1 },
  { a: undefined, i: 0 }, //! does not count as 0, counts as max
  { a: null, i: 1 }, //converts to zero
  { a: 100, i: 0 }, // ! loss of precision
  { a: "", i: 1 },
  { a: 1.2124, i: 1 }, //! neglect fractional part
  { a: 1.9124, i: 1 }, //! not rounding, flooring fractional part
  { a: 12.2124, i: 1 },
  { a: 0.00000000000000000000001, i: 1 },
  { a: 1.000000001, i: 1 },
  { a: 1, i: 1 },
  { a: 10, i: 1 },
  { a: 3, i: 1 },
  { a: 1, i: 1 },
  { a: 0, i: 1 },
  { a: -0, i: 1 },
  { a: {}, i: 1 },
  { a: "12HE", i: 1 },
  { a: 12n, i: 1 }, //!imp
  { a: 1, i: 1 }, //! imp rounding
];

args.forEach(({ a: arg, i: isImportant }, index) => {
  try {
    console.log(terminator);
    console.log(isImportant ? `${redANSI}` : "", `${index}. → ARG: ${arg}`);

    const num = 77.5234;
    const toExponential = num.toExponential(arg);

    console.log(toExponential);
  } catch (e) {
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
console.log(terminator);
