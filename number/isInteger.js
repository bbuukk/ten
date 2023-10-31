import { greenANSI, redANSI, terminator, yellowANSI } from "../variables.mjs";

// Number.isInteger()

// The Number.isInteger() static method determines whether the passed value is an integer.
// If the value is NaN or Infinity, return false. The method will also //! return true for floating point numbers that can be represented as integer. It will always return false if the value is not a number.

const args = [
  /////
  { a: NaN, i: 0 },
  { a: Infinity, i: 0 },
  { a: -Infinity, i: 0 },
  { a: undefined, i: 0 },
  { a: null, i: 0 },
  /////
  { a: 123, i: 0 },
  { a: -12, i: 0 },
  { a: +12, i: 0 },
  { a: +12423426477875346348675463567878970, i: 0 },
  { a: -12423426477875346348675463567878970, i: 0 },
  { a: -12423426477875346348675463567878970.013247823, i: 1 }, //! too big, loos of precision
  { a: +1.0000000000000000000000000000000000001, i: 1 }, // !loss of precision, look line below
  { a: +0.0000000000000000000000000000000000001, i: 1 }, //! but here is not, clearly buggy
  { a: "238173", i: 1 }, //!mp no coercing
  //////
  { a: 5.000000000000001, i: 1 }, //!imp  numbers around the magnitude of Number.MAX_SAFE_INTEGER will suffer from loss of precision and make Number.isInteger return true even when it's not an integer.
  { a: 5.0000000000000001, i: 1 },
  { a: 4500000000000000.1, i: 1 }, //!  The actual threshold varies based on how many bits are needed to represent the decimal — for example, Number.isInteger(4500000000000000.1) is true, but Number.isInteger(4500000000000000.5) is false.)
  { a: 4500000000000000.5, i: 1 }, //!
  //   /////////
  { a: Number.MAX_SAFE_INTEGER + 30.03532, i: 1 }, //! rounded
  { a: Number.MAX_VALUE + 0.111, i: 1 }, //! rounded
  { a: Number.EPSILON, i: 1 },
];

args.forEach(({ a: arg, i: isImportant }, index) => {
  const isFinite = Number.isInteger(arg);

  console.log(terminator);
  console.log(isImportant ? `${redANSI}` : "", `${index}. → ARG: ${arg}`);
  console.log(
    isFinite ? greenANSI : yellowANSI,
    isFinite ? "           INTEGER" : "           NOT INTEGER"
  );
});
console.log(terminator);

Number.isInteger(-12423426477875346348675463567878970);
