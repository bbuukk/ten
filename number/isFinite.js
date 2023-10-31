import { greenANSI, redANSI, terminator, yellowANSI } from "../variables.mjs";

// Number.isFinite();

// The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.

// Difference between Number.isFinite() and global isFinite()

// In comparison to the global isFinite() function, r. This means only values of the type number and are finite return true, and non-numbers always return false.

// ```isFinite("0"); // true; coerced to number 0
// Number.isFinite("0"); // false
// isFinite(null); // true; coerced to number 0
// Number.isFinite(null); // false```;

const args = [
  { a: 0, i: 0 },
  { a: NaN, i: 0 },
  { a: Infinity, i: 0 },
  { a: -Infinity, i: 0 },
  { a: undefined, i: 0 },
  { a: null, i: 0 },
  { a: "0", i: 1 }, //!this method doesn't first convert the parameter to a number
  { a: "123219", i: 0 },
  { a: 0 / 0, i: 0 },
  { a: 3.529032324322438e35, i: 0 },
  { a: 0.0000000000000000000000000000001, i: 0 },
  { a: 352903232432243843982942343743294638, i: 0 },
  { a: Number.MAX_VALUE + 1000, i: 1 }, //! rounds down to infinity
  { a: Number.MAX_VALUE + Number.MAX_VALUE, i: 1 }, //! number is too large to round down to infinity
  { a: Number.EPSILON, i: 0 },
  { a: 1e-31, i: 0 },
  { a: [], i: 0 },
  { a: {}, i: 0 },
  { a: 1.7976931348623157e308, i: 0 },
  { a: -0, i: 0 },
  { a: 2.220446049250313e-16, i: 0 },
  { a: () => {}, i: 0 },
  { a: new Date(), i: 1 },
];

args.forEach(({ a: arg, i: isImportant }, index) => {
  const isFinite = Number.isFinite(arg);

  console.log(terminator);
  console.log(isImportant ? `${redANSI}` : "", `${index}. → ARG: ${arg}`);
  console.log(
    isFinite ? greenANSI : yellowANSI,
    isFinite ? "           FINITE" : "           NOT FINITE"
  );
});
console.log(terminator);

// !important
// !  This is because JavaScript functions stop processing input arguments as soon as they have enough to return a result.
console.log(Number.isFinite(...args));
