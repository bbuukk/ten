// todo make function case-insensitive
function countEmoji(msg, emoji) {
  let result = {};

  const lessThan = "<";
  const moreThan = ">";
  const whitespace = " ";
  const semicolon = ":";
  const slash = "/";
  const at = "@";

  let parsedEmoji = "";
  let count = 0;

  // while we don't encounter new emoji, we don't reset names variable
  let names = [];
  let name = false;

  for (let i = msg.length; --i; ) {
    const ch = msg[i];
    // const ch = ch.charCodeAt(0);

    // to start parsing emoji
    if (ch === semicolon) {
      parsedEmoji += ch;
    }

    // parsing emoji
    if (parsedEmoji) {
      parsedEmoji += ch;
    }

    // parsed one valid emoji
    if (parsedEmoji === emoji) {
      ++count;
      parsedEmoji = "";

      // if we encountered new valid emoji
      // reset count
      // rest names
      count = 0;
      names = [];
    }

    // start parsing a name
    // if out of idx is false because msg[i - 1] gives undefined
    if (ch === moreThan && msg[i - 1] === slash) {
      name = true;
      names.push("");

      ++i; //skipping slash char in next iteration of loop
    }

    //stop parsing a name
    if (ch === at && msg[i - 1] === lessThan) {
      name = false;

      //todo trim name

      // giving count to appropriate name in result object
      result[names[names.length - 1]] ??= 0; // init prop on object if it is not yet
      result[names[names.length - 1]] += count;
    }

    //parsing a name
    if (name) {
      //adding to last name encountered
      names[names.length - 1] += ch;
    }
  }

  return result;
}

//return str with no whitespaces on start and end of it
const trim = (str) => {
  return str;
};

const msg = "<@Kate />:apple: <@Max /><@alisa /> :like: received:apple::apple:";

// // ! assumptions
// // * giving emoij argument with semicolorns
console.log(countEmoji(msg, ":apple:"));
