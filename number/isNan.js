import { greenANSI, redANSI, terminator, yellowANSI } from "../variables.mjs";

// Number.isNaN()

// The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function.

// The function Number.isNaN() provides a convenient way to check for equality with NaN. Note that you cannot test for equality with NaN using either the == or === operators, because unlike all other value comparisons in JavaScript, these evaluate to false whenever one operand is NaN, even if the other operand is also NaN.

const args = [
  { a: NaN, i: 0 },
  { a: Number.NaN, i: 0 },
  { a: 0 / 0, i: 0 },
  { a: "Hello" - 42, i: 0 },
  { a: Infinity, i: 0 },
  { a: -Infinity, i: 0 },
  { a: undefined, i: 0 },
  { a: null, i: 0 },
  { a: 5.0000000000000001, i: 0 },
  { a: 0.00000000000000000000000000000000000001, i: 0 },
];

args.forEach(({ a: arg, i: isImportant }, index) => {
  const isFinite = Number.isNaN(arg);

  console.log(terminator);
  console.log(isImportant ? `${redANSI}` : "", `${index}. → ARG: ${arg}`);
  console.log(
    isFinite ? greenANSI : yellowANSI,
    isFinite ? "           NAN" : "           NOT NAN"
  );
});
console.log(terminator);
