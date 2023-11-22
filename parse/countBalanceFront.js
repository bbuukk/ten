const text =
  "I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.";

function countBalance(text) {
  const decimal = 10;

  const lowerBound = "0".codePointAt(0);
  const upperBound = "9".codePointAt(0);

  let sum = 0;
  let lastNum = 0;
  let numLen = 0; //  length of number currently getting parsed
  let firstNumParsed = 0;

  for (let i = text.length; i--; ) {
    const cp = text[i].charCodeAt(0);

    if (cp >= lowerBound && cp <= upperBound) {
      if (!numLen) lastNum = 0;
      let value = cp - lowerBound;
      lastNum += value * decimal ** numLen;
      ++numLen;
      continue;
    }
    if (numLen) {
      if (!sum) firstNumParsed = lastNum;

      numLen = 0;
      sum += lastNum;
    }
  }

  const spent = sum - firstNumParsed;

  return firstNumParsed - spent;
}

console.log(countBalance(text));
