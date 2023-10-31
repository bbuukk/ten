//! yes, this solution is not quite efficient, but efficiency was not in requirements

const text =
  "I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.";

function countBalance(text) {
  const decimal = 10;

  const lowerBound = "0".codePointAt(0);
  const upperBound = "9".codePointAt(0);
  const whitespace = " ".charCodeAt(0);

  let sumOfParsed = 0;
  let lastNumParsed = 0;
  let parsedLength = 0; //  length of number currently getting parsed
  let firstNumParsed = 0;
  for (let i = text.length; i--; ) {
    const codePoint = text[i].charCodeAt(0);

    if (codePoint >= lowerBound && codePoint <= upperBound) {
      if (!parsedLength) lastNumParsed = 0;
      let value = codePoint - lowerBound;
      lastNumParsed += value * decimal ** parsedLength;
      ++parsedLength;
    } else if (parsedLength && codePoint === whitespace) {
      if (!sumOfParsed) firstNumParsed = lastNumParsed;

      parsedLength = 0;
      sumOfParsed += lastNumParsed;
    }
  }
  const spent = sumOfParsed - firstNumParsed;

  return firstNumParsed - spent;
}

console.log(countBalance(text));
