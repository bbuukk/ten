import { greenANSI, redANSI, terminator, yellowANSI } from "../variables.mjs";

// Number.isSafeInteger()

// The Number.isSafeInteger() static method determines whether the provided value is a number that is a safe integer.

const args = [
  { a: NaN, i: 0 },
  { a: Infinity, i: 0 },
  { a: -Infinity, i: 0 },
  { a: undefined, i: 0 },
  { a: null, i: 0 },
  { a: 5.0000000000000001, i: 0 },
  { a: 0.00000000000000000000000000000000000001, i: 1 }, //! it does not round to 0
  { a: 1.00000000000000000000000000000000000001, i: 1 }, //!imp BUT rounds to 1
  { a: 1.00000000000001, i: 1 },
  { a: 1.000000000000000000001, i: 1 }, // loss of precision
  { a: 2 ** 53, i: 0 },
  { a: 2 ** 53 - 1, i: 0 },
  { a: "3", i: 0 }, //! no coercion
  { a: 3, i: 1 },
  { a: 3.1, i: 1 },
  { a: Number.MAX_SAFE_INTEGER, i: 0 },
  { a: Number.MIN_SAFE_INTEGER, i: 0 },
  { a: Number.MIN_SAFE_INTEGER - 1, i: 1 }, //! no rounding
  { a: Number.MAX_SAFE_INTEGER + 0.1, i: 1 }, //! rounding
  { a: Number.MAX_SAFE_INTEGER + 0.4, i: 1 }, //! rounding
  { a: Number.MAX_SAFE_INTEGER + 0.5, i: 1 }, //! rounding
  { a: Number.MAX_VALUE, i: 0 },
  { a: {}, i: 0 },
];

args.forEach(({ a: arg, i: isImportant }, index) => {
  const isFinite = Number.isSafeInteger(arg);

  console.log(terminator);
  console.log(isImportant ? `${redANSI}` : "", `${index}. → ARG: ${arg}`);
  console.log(
    isFinite ? greenANSI : yellowANSI,
    isFinite ? "           SAFE" : "           NOT SAFE"
  );
});
console.log(terminator);
