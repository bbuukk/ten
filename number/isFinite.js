// Number.isFinite();

import { greenANSI, redANSI } from "../variables.mjs";

// The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.

// Difference between Number.isFinite() and global isFinite()

// In comparison to the global isFinite() function, this method doesn't first convert the parameter to a number. This means only values of the type number and are finite return true, and non-numbers always return false.

// ```isFinite("0"); // true; coerced to number 0
// Number.isFinite("0"); // false
// isFinite(null); // true; coerced to number 0
// Number.isFinite(null); // false```;

const args = [
  0,
  NaN,
  Infinity,
  -Infinity,
  "0",
  "123219",
  0 / 0,
  null,
  undefined,
  352903232432243843982942343743294638,
  0.0000000000000000000000000000001,
  [],
  {},
  Number.MAX_VALUE + 1000,
  Number.MAX_VALUE + Number.MAX_VALUE,
  -0,
  Number.EPSILON,
  () => {},
  new Date(),
];

console.log(args);

// !imp
console.log(Number.isFinite(...args));

args.forEach((arg, index) => {
  console.log();
});
