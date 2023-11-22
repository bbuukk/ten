// Обмеження:
// - 1 цикл for
// - charCodeAt

// expected result
// 13019

const text =
  "My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat";

function countBalance(text) {
  const decimal = 10;
  const lowerBound = "0".codePointAt(0);
  const upperBound = "9".codePointAt(0);

  let sumOfParsed = 0;
  let lastNum = 0;

  for (let i = text.length, numLen = 0; i--; ) {
    const cp = text[i].charCodeAt(0);

    if (cp >= lowerBound && cp <= upperBound) {
      if (!numLen) lastNum = 0;
      let value = cp - lowerBound;
      lastNum += value * decimal ** numLen;
      ++numLen;

      continue;
    }

    if (numLen) {
      numLen = 0;
      sumOfParsed += lastNum;
    }
  }

  const spent = sumOfParsed - lastNum;

  return lastNum - spent;
}

console.log(countBalance(text));
