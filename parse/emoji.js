import {
  red,
  blackANSI,
  blueANSI,
  flash,
  redANSI,
  terminator,
  green,
} from "../variables.mjs";

function countEmoji(msg, emoji) {
  let result = {};

  const lessThan = "<";
  const moreThan = ">";
  const whitespace = " ";
  const semicolon = ":";
  const slash = "/";
  const at = "@";

  const lowerLetterBound = "A";
  const upperLetterBound = "Z";

  let parsedEmoji = "";
  let emojiBeingParsed = false;
  let count = 0;

  // while we don't encounter new emoji, we don't reset names variable
  let names = [];
  let nameBeingParsed = false;

  for (let i = msg.length; --i, i > 0; ) {
    let ch = msg[i];
    // const ch = ch.charCodeAt(0); //todo using codepoints for comparison is much more efficient

    //converting letters to lowercase
    if (ch >= lowerLetterBound && ch <= upperLetterBound) {
      ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    // parsed one valid emoji
    if (parsedEmoji === emoji) {
      // if we encountered new valid emoji and names is not empty
      if (names.length) {
        count = 0;
        names = [];
      }

      ++count;
    }

    // to start parsing emoji or stop parsing emoji
    if (ch === semicolon) {
      if (emojiBeingParsed) {
        parsedEmoji = "";
        emojiBeingParsed = false;
      } else {
        emojiBeingParsed = true;
      }
      continue;
    }

    // parsing emoji
    if (emojiBeingParsed) {
      parsedEmoji = ch + parsedEmoji;
      //   continue;
    }

    // start parsing a nameBeingParsed
    // if out of idx is false because msg[i - 1] gives undefined
    if (ch === moreThan) {
      //reset parsedEmoji and emojiBeingParsed
      parsedEmoji = "";
      emojiBeingParsed = false;

      nameBeingParsed = true;
      names.push("");

      --i; //skipping next iteration of loop with char = slash
      continue;
    }

    //stop parsing a nameBeingParsed
    if (ch === at) {
      nameBeingParsed = false;

      // giving count to appropriate nameBeingParsed in result object
      result[names[names.length - 1]] ??= 0; // init prop on object if it is not yet
      result[names[names.length - 1]] += count;

      --i; //skipping next iteration of loop with char = lessThan
      continue;
    }

    //parsing a nameBeingParsed
    if (nameBeingParsed) {
      //adding to last nameBeingParsed encountered, skipping whitespaces
      if (ch !== whitespace && ch !== slash) {
        names[names.length - 1] = ch + names[names.length - 1];
      }
    }
  }

  return result;
}

const args = [
  //simple example
  {
    msg: "<@Kate />:apple: <@Max /><@alisa /> :like: received:apple::apple:",
    em: "apple",
    ex: { kate: 1, max: 2, alisa: 2 },
    i: 0,
  },
  {},
  //no valid emoji between max and alisa
  {
    msg: "<@Kate />:apple: <@Max/>you did your job well<@alisa /> you amazing girl :like: received:apple::apple:",
    ex: { kate: 1, max: 2, alisa: 2 },
    em: "apple",
    i: 0,
  },
  {
    msg: "<@Kate />:apple: <@Max/>:apple apple: :apple<@alisa /> :like: received:apple::apple:",
    em: "apple",
    ex: { kate: 1, max: 2, alisa: 2 },
    i: 0,
  },

  {},
  // case insensitivity test
  {
    msg: "<@Kate />:apple: <@Max/>:apple: :apple: :apple:<@alisa /> :like: received:apple::apple: <@kate/> lalalal <@KATE / > :apple: :apple: askdsahgjd",
    em: "apple",
    ex: { kate: 5, max: 3, alisa: 2 },

    i: 0,
  },
  {
    msg: ":apple: :apple:  <@Kate />:apple: <@Max/>:apple: :apple: :apple:<@alisa /> :like: received:apple::apple: <@kate/> lalalal <@KATE / > :APPLE: :Apple: askdsahgjd <@gena /><@igor/ >",
    em: "apple",
    ex: { kate: 5, max: 3, alisa: 2, gena: 0, igor: 0 },
    i: 0,
  },
  {},
  //link of any length
  {
    msg: "<@Kate />:apple: <@Max/><@nick/><@gena/><@masha/><@dima/><@alisa /> you amazing girl :like: received:apple::apple:",
    ex: { kate: 1, alisa: 2, dima: 2, masha: 2, gena: 2, nick: 2, max: 2 },
    em: "apple",
    i: 0,
  },
  {},
  //inconsistent input
  {
    msg: "<@Kate />",
    ex: { kate: 0 },
    em: "apple",
    i: 0,
  },
  {
    msg: "<@Kate /> :::::apple, :nsa:dhjfjsdfhjsdbjsdbjb <@Max/> :::::::apple::::: ",
    ex: { kate: 1, max: 1 },
    em: "apple",
    i: 0,
  },
  {
    msg: "<@Kate /> apple, :nsa:dhjfjsdfhjsdbjsdbjb <@Max/> :::::::apple::::: ",
    ex: { kate: 1, max: 1 },
    em: "apple",
    i: 0,
  },
  {
    msg: ":apple: :apple:",
    ex: {},
    em: "apple",
    i: 0,
  },
  {},
  {
    msg: "<@MANNNIe />:apple:adhfsfsdj<@Kate />dhfjs:apple: dhfjkds:apple:<@Max /><@alisa />:: :like: :: received:apple::apple:",
    ex: { kate: 2, max: 2, alisa: 2, mannnie: 1 },
    em: "apple",
    i: 0,
  },
];

args.forEach(({ msg: message, em: emoji, ex: expected, i: isImportant }) => {
  // try {
  if (isImportant !== undefined) {
    const result = sortObject(countEmoji(message, emoji));
    expected = sortObject(expected);

    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(terminator);
    console.log(passed ? `${green}PASSED` : `${red}FAILED`, flash);
    console.log(`RES: `, result);
    console.log(`EXP: `, expected);
  } else {
    console.log(`${terminator}\n\n${terminator}\n`);
  }
  // } catch (e) {
  // console.log(redANSI, `ERR: ${e.message}`);
  // }
});
console.log(terminator);

function sortObject(obj) {
  return Object.keys?.(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}
