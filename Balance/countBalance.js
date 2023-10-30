// zпорахувати в кого скільки грошей
// ! no names without @
// ! no names with " " inside names

// console.log(
//     countBalance(
//       "Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT"
//     )
//   );

function countBalance(text) {
  let result = {};

  const lessThan = "<".charCodeAt(0);
  const whitespace = " ".charCodeAt(0);

  const lowerBound = "0".codePointAt(0);
  const upperBound = "9".codePointAt(0);

  let balance = null;
  let name = null;

  const textLength = text.length;
  for (let i = 0; i <= textLength; ++i) {
    const ch = text[i];
    const codePoint = ch?.charCodeAt(0);

    if (codePoint === lessThan || !codePoint) {
      if (name) {
        result[name] = balance;
      }

      balance = null;
      i++; //skipping @
      name = "";
      continue;
    }

    if (balance?.length >= 0) {
      if (codePoint >= lowerBound && codePoint <= upperBound) {
        balance += ch;
      }
      continue;
    }
    if (name?.length >= 0) {
      if (codePoint === whitespace) {
        result[name] = null;
        balance = "";
      } else {
        name += ch;
      }
    }
  }
  return result;
}

// result {
//  kate: 1000,
//  dmitrty: 350,
//  max: 600
//}
const text =
  "Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT";
console.log(countBalance(text));
