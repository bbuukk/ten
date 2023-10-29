// Повторити поведінку нативниї методів 1 в 1.
// ! only charcodes and loops for parseIntegers
// read logic of wrting such functoins
// check perfomance of your-self written methods

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

//todo Leading whitespace in this argument is ignored.

function parseInteger(str, radix) {
  str = String(str);
  str = removeLeadingWhitespaces(str);

  let negative = false;
  if (str[0] === "-") {
    negative = true;
    str = sliceStart(str, 1);
  }

  //todo check for bugs
  if (radix === 16 || !radix) {
    if (str[0] === "0" && str[1].toUpperCase() === "X") {
      radix = 16;
      str = sliceStart(str, 2);
    }
  }

  radix = (radix !== Infinity && radix !== -Infinity && radix) || 10;

  if (typeof radix !== "number" || radix < 2 || radix > 36) {
    return NaN;
  }

  const lowerNumberBound = "0".charCodeAt(0);
  const upperNumberBound = lowerNumberBound + radix - 1;

  const lowerLetterBound = "A".charCodeAt(0);
  const upperLetterBound = lowerLetterBound + radix - 11;

  const strLength = str.length;

  let validStr = "";
  for (let i = 0; i < strLength; i++) {
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
      let value = codePoint - lowerLetterBound + 10; // todo make adequate comment adding 10 cuz we need soo
      value = value * radix ** (validStrLength - i - 1);
      number += value;
    } else {
      break;
    }
  }

  if (negative) {
    number = -number;
  }

  return number ?? NaN;
}

//test cases
const testData = [
  { s: "123", r: undefined }, // assigns 10 to falsy radix
  { s: "123", r: NaN }, // assigns 10 to falsy radix
  { s: "123", r: null }, // assigns 10 to falsy radix
  { s: "123", r: Infinity }, // assigns 10 to falsy radix
  { s: "123", r: -Infinity }, // assigns 10 to falsy radix
  { s: "123", r: 10 }, // radix 10
  { s: "100", r: 2 }, // radix is 2
  { s: "100", r: 8 }, // radix is 8
  { s: "100", r: 16 }, // radix is 16
  { s: "0x100", r: undefined }, // radix is 16, no letters
  { s: "0xF", r: undefined }, // radix is 16,  with letters
  { s: "0x100", r: 199 }, // radix is out of range
  { s: "0x100F", r: 8 }, // wrong radix
  { s: "1050F2030", r: 10 }, //  char from other number system
  { s: "123abc456", r: 10 }, //  char from other number system
  { s: "3.14", r: 10 }, //  char from other number system
  { s: "   42  is a number", r: 10 }, //  char from other   number system
  { s: "", r: 10 }, // str is empty
  { s: "         ", r: 10 }, // str is filled with whitespaces
  { s: "0b123213", r: 10 }, // using 0b binary notation
  { s: "10a", r: 10 }, // letters in decimal system
  { s: "123456789012345678901234567890", r: 10 }, // Very large number
  { s: "-42", r: 10 }, // Negative number
  { s: "0", r: 10 }, // Zero value
  { s: "123  ", r: 10 }, // Whitespace at the end
  { s: "12 34", r: 10 }, // Whitespace in the middle
  { s: "12-34", r: 10 }, // Invalid character (-) for a positive integer
  { s: "42", r: 2.5 }, // Non-integer radix
  { s: "   -42", r: 10 }, // Whitespace and negative number
  { s: "0x1Ab", r: 16 }, // Mixed case hexadecimal input
  { s: "$100", r: 36 }, // Non-alphanumeric characters in radix 36
  { s: "0x0x10", r: 16 }, // Multiple radix prefixes
  { s: "0x", r: undefined }, // Empty radix with hexadecimal input
  { s: "1 2 3 4", r: 10 }, // Whitespace between digits in a valid input
  { s: "x2312342", r: 16 }, // wrong char in 16 number system, X is out of range
  { s: "42", r: -10 },
];

function test(arr) {
  const greenANSI = "\x1b[32m%s\x1b[0m";
  const redANSI = "\x1b[31m%s\x1b[0m";
  const terminator = "-------------------------------";
  const arrLength = arr.length;

  arr.forEach(({ s: str, r: radix }) => {
    console.time("DEF");
    const defaultRes = Number.parseInt(str, radix);
    console.timeEnd("DEF");

    console.time("MY");
    const myRes = parseInteger(str, radix);
    console.timeEnd("MY");

    console.log(
      `${
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

// console.log(parseInteger("2312342", -10));
