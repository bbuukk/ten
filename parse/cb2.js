//countBalance

function countBalance(msg) {
  let result = {};

  const lowerNumberBound = "0".codePointAt();
  const upperNumberBound = "9".codePointAt();

  const at = "@".charCodeAt();
  const lowerLetterBound = "A".codePointAt();
  const upperLetterBound = "Z".codePointAt();

  let name = "";
  let balance = 0;

  let nameParsing = false;

  const msgLen = msg.length;
  for (let i = 0; i <= msgLen; ++i) {
    let ch = msg[i];
    const cp = ch?.charCodeAt();

    const isLetter = cp >= lowerLetterBound && cp <= upperLetterBound;
    const isNumber = cp >= lowerNumberBound && cp <= upperNumberBound;
    const isAt = cp == at;

    if (isLetter || isAt) {
      ch = String.fromCharCode(cp + 32); //lowercasing letters
      name += ch;
    } else if (isNumber) {
    } else {
    }

    //start/stop name parsing
    if (!cp || cp == lessThan) {
      nameParsing = true;

      //assigning balance to name
      if (name) {
        result[name] = balance;
      }

      //resetting
      name = "";
      balance = 0;

      i++; //skipping @ symbol
      continue;
    } else if (cp == slash) {
      nameParsing = false;
      continue;
    }

    if (nameParsing) {
      if (ch != " ") {
        name += ch;
      }
      continue;
    }

    //parsing balance
    if (cp >= lowerNumberBound && cp <= upperNumberBound) {
      const value = cp - lowerNumberBound;
      balance = balance * 10 + value;
      continue;
    }
  }
  return result;
}

const msg =
  "Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT";
console.log(countBalance(msg));

// result {
//  kate: 1000,
//  dmitrty: 350,
//  max: 600
//}
