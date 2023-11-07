// Number.parseInt()

import { redANSI, terminator } from "../variables.mjs";

// The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.

// Parameters

// string
//     The value to parse, coerced to a string. Leading whitespace in this argument is ignored.

// radix Optional
//     An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string.

//     If radix is ! undefined or 0,! it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X, in which case a radix of 16 is assumed. doesn't work with 0b

//when encounters first character of ouf current redix system it stops and evaluetes the number, not throwing an error

const args = [
  { a: NaN, i: 0, r: 0 },
  { a: "Hello" - 42, i: 0, r: 0 },
  { a: Infinity, i: 0, r: 0 },
  { a: -Infinity, i: 0, r: 0 },
  { a: undefined, i: 0, r: 0 },
  { a: null, i: 1, r: 0 }, //!imp does evaluate to zero, unlike parseFloat()
  { a: 5.0000000000000001, i: 0, r: 0 },
  { a: 0.00000000000000000000000000000000000001, i: 0, r: 0 },
  { a: "13y48r", i: 1, r: 0 },
  { a: "1e308", i: 0, r: 0 },
  { a: "10", i: 0, r: 0 },
  { a: "10.1", i: 0, r: 0 },
  { a: "X", i: 1, r: 0 },
  { a: "0XF", i: 1, r: 0 },
  { a: "0b10", i: 1, r: 0 },
  { a: " ", i: 0, r: 0 },
  { a: "3,14", i: 1, r: 0 },
  { a: "0.1111111111111111111111111111111111111111111111", i: 0, r: 0 },
  { a: "          1032974  ", i: 0, r: 0 },
  { a: "          1032974", i: 0, r: 0 },
  { a: "    0.11 01234 ", i: 1, r: 0 },
  { a: "0xF", i: 1, r: 199 },
  { a: "0xF", i: 1, r: 8 },
  { a: "0123", i: 1, r: 2 },
  { a: "0X0123", i: 1, r: undefined },
  { a: "0b0123", i: 1, r: undefined },
  //!imp infinity gets converted to NaN, and NaN to zero, zero to decimal
  { a: "12134", i: 1, r: Infinity },
  { a: "12134", i: 1, r: -Infinity }, //!imp
  { a: "12134", i: 1, r: 1000 },
];

args.forEach(({ a: arg, r: radix, i: isImportant }, index) => {
  const parsed = Number.parseInt(arg, radix);

  console.log(terminator);
  console.log(
    isImportant ? `${redANSI}` : "",
    `${index}. → ARG: ${arg}, RDX: ${radix}`
  );
  console.log(parsed);
});
console.log(terminator);

Number.parseInt("11232", Infinity);
