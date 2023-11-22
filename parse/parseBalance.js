function parse(msg) {
  const upperBound = "9".charCodeAt();
  const lowerBound = "0".charCodeAt();
  const point = ".".charCodeAt();

  let result = 0;
  let isDecimal = false;

  const msgLen = msg.length;
  for (let i = 0, decLen = 1; i < msgLen; i++) {
    const ch = msg[i];
    const cp = ch.charCodeAt();

    if (cp >= lowerBound && cp <= upperBound) {
      const value = cp - lowerBound; //getting digit on i
      if (!isDecimal) {
        result = result * 10 + value;
        continue;
      } else {
        result += value / 10 ** decLen;
        ++decLen;
        continue;
      }
    } else if (cp === point) {
      isDecimal = true;
    } else {
      isDecimal = false;
    }
  }
  return result;
}

const text = "My balance is 2400.000095 USDT.";
console.log(parse(text));
