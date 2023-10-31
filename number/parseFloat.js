import { redANSI, terminator } from "../variables.mjs";

// Number.parseFloat()

// The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

// Parameters

// string
//     The value to parse, //! coerced to a string. Leading whitespace in this argument is ignored.

//Return value
// A floating point number parsed from the given string.
// Or NaN when the first non-whitespace character cannot be converted to a number.

const args = [
  { a: NaN, i: 0 },
  { a: "Hello" - 42, i: 0 },
  { a: Infinity, i: 0 },
  { a: -Infinity, i: 0 },
  { a: undefined, i: 0 },
  { a: null, i: 1 }, //!imp
  { a: 5.0000000000000001, i: 0 },
  { a: 0.00000000000000000000000000000000000001, i: 0 },
  { a: "13y48r", i: 1 },
  { a: "1e308", i: 0 },
  { a: "10", i: 0 },
  { a: "10.1", i: 0 },
  { a: "X", i: 1 },
  { a: "0XF", i: 1 },
  { a: "0b10", i: 1 },
  { a: " ", i: 0 },
  { a: "3,14", i: 1 },
  { a: "0.1111111111111111111111111111111111111111111111", i: 1 },
  { a: "          1032974  ", i: 0 },
  { a: "          1032974", i: 0 },
  { a: "    0.11 01234 ", i: 1 },
];

args.forEach(({ a: arg, i: isImportant }, index) => {
  const parsed = Number.parseFloat(arg);

  console.log(terminator);
  console.log(isImportant ? `${redANSI}` : "", `${index}. → ARG: ${arg}`);
  console.log(parsed);
});
console.log(terminator);
