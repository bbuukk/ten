//todo make support for not caring for cases in emojis and names

function countEmoji(message, emoji) {
  let result = {};

  const lessThan = "<".charCodeAt(0);
  const whitespace = " ".charCodeAt(0);
  const semicolon = ":".charCodeAt(0);

  //   const lowerBound = "0".codePointAt(0);
  //   const upperBound = "9".codePointAt(0);

  let emojiParsed = null;
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

    if (emojiParsed) {
      emojiParsed += ch;
      if (codePoint === semicolon) {
        if ((emojiParsed = emoji)) {
          balance += 1;
          emojiParsed = null;
        }
      }
    }

    if (balance !== null) {
      if (codePoint === semicolon) {
        emojiParsed = ch;
      }
      continue;
    }

    if (name?.length >= 0) {
      if (codePoint === whitespace) {
        result[name] = result[name]; //init item in array, giving it undefined on first time
        balance = 0;
      } else {
        name += ch;
      }
    }
  }
  return result;
}

// expected result
// {
// kate: 1,
// max: 2,
// alisa: 2
// }

const text =
  "<@Kate />:apple: <@Max /><@alisa /> :like: received:apple::apple:";

// const text =
//   "Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT";

// ! assumptions
// * giving emoij argument with semicolorns
console.log(countEmoji(text, ":apple:"));
