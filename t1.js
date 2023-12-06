function countMyBalance(text) {
  const lowerBound = "0".charCodeAt();
  const uppperBound = "9".charCodeAt();

  const textLen = text.length;
  let isDecimal = false;

  let decimal = 0;
  let number = 0;

  let spendSum = 0;
  let depositSum = 0;

  for (let i = 0, decLen = 0; i < textLen; i++) {
    const ch = text[i];
    const cp = ch.charCodeAt();

    if (cp >= lowerBound && cp <= uppperBound) {
      const value = cp - lowerBound;
      if (!isDecimal) {
        number = number * 10 + value;
        continue;
      } else {
        decimal = decimal * 10 + value;
        ++decLen;
        continue;
      }
    } else if (ch === ".") {
      isDecimal = true;

      continue;
    }

    decimal = decimal / 10 ** decLen;
    number += decimal;

    if (spendSum) {
      spendSum += number;
    } else if (spendSum < number && number != 0) {
      depositSum = number;
    } else {
      spendSum += number;
    }

    isDecimal = false;
    number = 0;
    decimal = 0;
    decLen = 0;
  }

  return depositSum - spendSum;
}

const text = `Max received 2400 USDT.
Kate received 1900.044 USDT.
Andrey received 2550.23 USDT.
Before I confirmed first transaction platform deposit was 11750 USDT.
Than I send Money to charity 900 USDT and paid for flat 1600.93 USDT`;

const foo = "Max received 2400.0084 USDT";

// console.log(countMyBalance(foo));
console.log(countMyBalance(text));
console.log(11750 - 2400 - 1900.044 - 2550.23 - 900 - 1600.93);
// 2398.7960000000003
