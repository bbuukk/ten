// Повторити поведінку нативниї методів 1 в 1.
// ! only charcodes and loops for parseIntegers
// read logic of wrting such functoins
// check perfomance of your-self written methods

import { greenANSI, redANSI } from "../variables.mjs";

// Number.parseInt()
// The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.

// Parameters

// * string
//     The value to parse, coerced to a string. Leading whitespace in this argument is ignored.
// * radix Optional
//     An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string.
//     If radix is ! undefined or 0,! it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X, in which case a radix of 16 is assumed.

// If the string begins with "0x" or "0X", the radix is 16 (hexadecimal).
//when encounters first character of ouf current redix system it stops and evaluetes the number, not throwing an error

function sliceStart(str, startIdx) {
  let result = "";
  const strLength = str.length;
  for (var i = startIdx; i < strLength; i++) {
    result += str[i];
  }

  return result;
}

function removeLeadingWhitespaces(str) {
  let result = "";
  const strLength = str.length;
  let i = 0;
  while (i < strLength && str[i] === " ") {
    i++;
  }

  for (; i < strLength; i++) {
    result += str[i];
  }

  return result;
}

function parseInteger(str, radix) {
  let iterator = 0;
  str = String(str);

  //remove leading whitespaces
  while (str[iterator] === " ") {
    iterator++;
  }

  if (radix === 16 || !radix) {
    if (str[0] === "0" && str[1].toUpperCase() === "X") {
      radix = 16;
      str = sliceStart(str, 2);
    }
  }

  if (radix === Infinity || radix === -Infinity || !radix) {
    radix = 10;
  }

  if (typeof radix !== "number" || radix < 2 || radix > 36) {
    return NaN;
  }

  radix -= radix % 1; // (floor) remove fractional part from radix

  let sign = 1;
  if (str[iterator] === "+" || str[iterator] === "-") {
    sign = str[iterator] === "-" ? -1 : 1;
    iterator++;
  }

  const lowerNumberBound = "0".charCodeAt(0);
  const upperNumberBound = lowerNumberBound + radix - 1;

  const lowerLetterBound = "A".charCodeAt(0);
  const upperLetterBound = lowerLetterBound + radix - 11;

  const strLength = str.length;
  let validStr = "";
  for (let i = iterator; i < strLength; i++) {
    const ch = str[i];
    const codePoint = ch.toUpperCase().charCodeAt(0);
    if (codePoint >= lowerNumberBound && codePoint <= upperNumberBound) {
      validStr += ch;
    } else if (codePoint >= lowerLetterBound && codePoint <= upperLetterBound) {
      validStr += ch;
    } else {
      break;
    }
  }

  let number = null;
  const validStrLength = validStr.length;
  for (let i = 0; i < validStrLength; i++) {
    const ch = validStr[i];
    const codePoint = ch.toUpperCase().charCodeAt(0);

    if (codePoint >= lowerNumberBound && codePoint <= upperNumberBound) {
      let value = codePoint - lowerNumberBound;
      value = value * radix ** (validStrLength - i - 1);
      number += value;
    } else if (codePoint >= lowerLetterBound && codePoint <= upperLetterBound) {
      let value = codePoint - lowerLetterBound + 10;
      value = value * radix ** (validStrLength - i - 1);
      number += value;
    } else {
      break;
    }
  }

  return (number ?? NaN) * sign;
}

//test cases

const testData = [
  { x: 0, s: "123", r: undefined }, // assigns 10 to falsy radix
  { x: 1, s: "123", r: NaN }, // assigns 10 to falsy radix
  { x: 2, s: "123", r: null }, // assigns 10 to falsy radix
  { x: 3, s: "123", r: Infinity }, // assigns 10 to falsy radix
  { x: 4, s: "123", r: -Infinity }, // assigns 10 to falsy radix
  { x: 5, s: "123", r: 10 }, // radix 10
  { x: 6, s: "100", r: 2 }, // radix is 2
  { x: 7, s: "100", r: 8 }, // radix is 8
  { x: 8, s: "100", r: 16 }, // radix is 16
  { x: 9, s: "0x100", r: undefined }, // radix is 16, no letters
  { x: 10, s: "0xF", r: undefined }, // radix is 16,  with letters
  { x: 11, s: "0x100", r: 199 }, // radix is out of range
  { x: 12, s: "0x100F", r: 8 }, // wrong radix
  { x: 13, s: "1050F2030", r: 10 }, //  char from other number system
  { x: 14, s: "123abc456", r: 10 }, //  char from other number system
  { x: 15, s: "3.14", r: 10 }, //  char from other number system
  { x: 16, s: "   42  is a number", r: 10 }, //  char from other   number system
  { x: 17, s: "", r: 10 }, // str is empty
  { x: 18, s: "         ", r: 10 }, // str is filled with whitespaces
  { x: 19, s: "0b123213", r: 10 }, // using 0b binary notation
  { x: 20, s: "10a", r: 10 }, // letters in decimal system
  { x: 21, s: "123456789012345678901234567890", r: 10 }, // Very large number
  { x: 22, s: "-42", r: 10 }, // Negative number
  { x: 23, s: "0", r: 10 }, // Zero value
  { x: 24, s: "123  ", r: 10 }, // Whitespace at the end
  { x: 25, s: "12 34", r: 10 }, // Whitespace in the middle
  { x: 26, s: "12-34", r: 10 }, // Invalid character (-) for a positive integer
  { x: 27, s: "42", r: 2.5 }, // Non-integer radix
  { x: 28, s: "   -42", r: 10 }, // Whitespace and negative number
  { x: 29, s: "0x1Ab", r: 16 }, // Mixed case hexadecimal input
  { x: 30, s: "$100", r: 36 }, // Non-alphanumeric characters in radix 36
  { x: 31, s: "0x0x10", r: 16 }, // Multiple radix prefixes
  { x: 32, s: "0x", r: undefined }, // Empty radix with hexadecimal input
  { x: 33, s: "1 2 3 4", r: 10 }, // Whitespace between digits in a valid input
  { x: 34, s: "x2312342", r: 16 }, // wrong char in 16 number system, X is out of range
  { x: 35, s: "42", r: -10 }, // todo describe
  { x: 36, s: "+42", r: 10 }, // todo describe
  { x: 37, s: "10", r: 2.5 }, // todo describe
  { x: 38, s: "42", r: 2.5 }, // todo describe
  { x: 39, s: "314e-2", r: 10 }, // todo describe
  { x: 40, s: "0.0314E+2", r: 10 }, // todo describe
  { x: 41, s: "15e2", r: 10 }, // todo describe
  { x: 42, s: "-15e1", r: 10 }, // todo describe
  { x: 43, s: "0e0", r: 16 }, // todo describe
  { x: 44, s: "-15.1", r: 10 }, // todo describe
  { x: 45, s: "-15.99", r: 10 }, // todo describe
  { x: 46, s: "1e7", r: 10 }, // todo describe
  { x: 47, s: "Infinity", r: 10 }, // todo describe
  { x: 48, s: "-Infinity", r: 10 }, // todo describe
  { x: 49, s: "NaN", r: 10 }, // todo describe
  { x: 50, s: 72349, r: 10 }, // todo describe
  { x: 51, s: NaN, r: 10 }, // todo describe
  { x: 52, s: Infinity, r: 10 }, // todo describe
  { x: 53, s: undefined, r: 10 }, // todo describe
  { x: 54, s: "0x", r: undefined }, // todo describe
  { x: 32, s: "0x", r: 10 }, // Empty radix with hexadecimal input
];

function test(arr) {
  const terminator = "-------------------------------";

  arr.forEach(({ s: str, r: radix }, x) => {
    console.time("DEF");
    const defaultRes = Number.parseInt(str, radix);
    console.timeEnd("DEF");

    console.time("MY");
    const myRes = parseInteger(str, radix);
    console.timeEnd("MY");

    console.log(
      `|--- ${x}: ${
        defaultRes === myRes ||
        (Number.isNaN(defaultRes) && Number.isNaN(myRes))
          ? greenANSI
          : redANSI
      }`,
      `DEF ${defaultRes}, MY ${myRes}`
    );
    console.log(terminator);
  });
}

console.log();
test(testData);
console.log();
