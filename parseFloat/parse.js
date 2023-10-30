function sliceStart(str, startIdx) {
  let result = "";
  const strLength = str.length;
  for (var i = startIdx; i < strLength; i++) {
    result += str[i];
  }

  return result;
}

//! Namely, parseFloat() does not support non-decimal literals with 0x, 0b, or 0o prefixes but supports everything else

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

function parseFloat(str) {
  const decimal = 10;
  let iterator = 0;
  str = String(str);

  //remove leading whitespaces
  while (str[iterator] === " ") {
    iterator++;
  }

  if (str > Number.MAX_VALUE) {
    return Infinity;
  }
  if (str < -Number.MAX_VALUE) {
    return -Infinity;
  }

  let sign = 1;
  if (str[iterator] === "+" || str[iterator] === "-") {
    sign = str[iterator] === "-" ? -1 : 1;
    iterator++;
  }

  const lowerBound = "0";
  const upperBound = "9";

  let intNumPart = "";
  let decimalNumPart = "";

  const strLength = str.length;
  for (let i = iterator, decimalPart = false; i < strLength; i++) {
    const ch = str[i];
    if (ch >= lowerBound && ch <= upperBound) {
      if (decimalPart) {
        decimalNumPart += ch;
      } else {
        intNumPart += ch;
      }
    } else if (ch === ".") {
      decimalPart = true;
      continue;
    } else {
      break;
    }
  }

  let number = null;

  const intNumPartLength = intNumPart.length;
  for (let i = 0; i < intNumPartLength; i++) {
    const ch = intNumPart[i];
    let value = ch.charCodeAt(0) - lowerBound.charCodeAt(0);

    // value += value * decimal * (intNumPartLength - i - 1);
    number += value;
  }

  let decimalPart = null;

  const decNumPartLength = decimalNumPart.length;
  for (let i = decNumPartLength; --i; ) {
    const ch = decimalNumPart[i];
    let value = ch.charCodeAt(0) - lowerBound.charCodeAt(0);
    value /= decimal * (decNumPartLength - i);
    decimalPart += value;
  }

  return number + decimalPart * sign;

  // return (number ?? NaN) * sign;
}

//test cases
const testData = [
  "123", // 0
  "123", // 1
  "123", // 2
  "123", // 3
  "123", // 4
  "123", // 5
  "100", // 6
  "100", // 7
  "100", // 8
  "0x100", // 9
  "0xF", // 10
  "0x100", // 11
  "0x100F", // 12
  "1050F2030", // 13
  "123abc456", // 14
  "3.14", // 15
  "   42  is a number", // 16
  "", // 17
  "         ", // 18
  "0b123213", // 19
  "10a", // 20
  "123456789012345678901234567890", // 21
  "-42", // 22
  "0", // 23
  "123  ", // 24
  "12 34", // 25
  "12-34", // 26
  "42", // 27
  "   -42", // 28
  "0x1Ab", // 29
  "$100", // 30
  "0x0x10", // 31
  "0x", // 32
  "1 2 3 4", // 33
  "x2312342", // 34
  "42", // 35
  "+42", // 36
  "10", // 37
  "42", // 38
  "1.7976931348623159e+308", // 39
  "Infinity", // 40
  "-Infinity", // 41
];

function test(arr) {
  const greenANSI = "\x1b[32m%s\x1b[0m";
  const redANSI = "\x1b[31m%s\x1b[0m";
  const terminator = "-------------------------------";

  arr.forEach((str, idx) => {
    console.log(`>--- ${idx}:  `);
    console.time("DEF");
    const defaultRes = Number.parseFloat(str);
    console.timeEnd("DEF");

    console.time("MY");
    const myRes = parseFloat(str);
    console.timeEnd("MY");

    console.log("ARG:  \x1b[33m%s\x1b[0m", str);

    console.log(
      `${
        defaultRes === myRes ||
        (Number.isNaN(defaultRes) && Number.isNaN(myRes))
          ? greenANSI
          : redANSI
      }`,
      `DEF: ${defaultRes}\nMY: ${myRes}`
    );
    console.log(terminator);
  });
}

// console.log();
// test(testData);
// console.log();

console.log(parseFloat("3.14"));
