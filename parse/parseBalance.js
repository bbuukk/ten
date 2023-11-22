// Дозволено використовувати:
// - 1 цикл for
// - charCodes

function parseBalance(text) {
  const lowerBound = "0".codePointAt(0);
  const upperBound = "9".codePointAt(0);

  let balance = 0;

  const textLength = text.length;
  for (let i = 0; i < textLength; i++) {
    const ch = text[i];
    const codePoint = ch?.charCodeAt(0);
    if (codePoint >= lowerBound && codePoint <= upperBound) {
      balance += ch;
    }
  }

  return balance;
}

console.log(parseBalance("My wallet balance is 14960 USDT"));
