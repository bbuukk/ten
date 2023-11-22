//countBalance

function countBalance(msg) {
  let result = {};

  const lessThan = "<".charCodeAt();
  const slash = "/".charCodeAt();

  const lowerBound = "0".codePointAt();
  const upperBound = "9".codePointAt();

  let name = "";
  let balance = 0;

  let nameParsing = false;

  const msgLen = msg.length;
  for (let i = 0; i <= msgLen; ++i) {
    const ch = msg[i];

    const cp = ch?.charCodeAt();

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
    }

    if (cp == slash) {
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
    if (cp >= lowerBound && cp <= upperBound) {
      const value = cp - lowerBound;
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
