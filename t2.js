const combineNumbersLogicaly = (str) => {
  const lowerBound = "0".charCodeAt();
  const uppperBound = "9".charCodeAt();

  let isDecimal = false;

  let decimal = 0;
  let number = 0;
  const nums = [];

  let left = 0;
  let leftLen = 0;
  let right = 0;

  const strLen = str.length;
  for (let i = 0, decLen = 0; i <= strLen; i++) {
    const ch = str[i];
    const cp = ch?.charCodeAt();

    if (cp >= lowerBound && cp <= uppperBound) {
      const value = cp - lowerBound;
      if (!isDecimal) {
        number = number * 10 + value;

        ///
        if (left == 0) {
          ++leftLen;
        }
        continue;
      } else {
        decimal = decimal * 10 + value;
        ++decLen;
        continue;
      }
    } else if (ch === ",") {
      isDecimal = true;

      continue;
    }

    decimal = decimal / 10 ** decLen;
    number += decimal;

    if (left == 0) {
      left += number;
    } else {
      if (isDecimal) {
        left = left / 10 ** (decLen + leftLen);
        number += left;
      } else {
        if (!ch) {
          number = number * 10 ** leftLen;
          number += left;
        }
      }

      right += number;
    }

    isDecimal = false;
    number = 0;
    decimal = 0;
    decLen = 0;
  }
  return right;
};

const str1 = "Right part is 14978 and left part is 56,02";
const str2 = "Right part is 14978 and left part is 5602";

console.log(combineNumbersLogicaly(str1));
console.log(combineNumbersLogicaly(str2));
