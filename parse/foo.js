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
    if (ch === moreThan && msg[i - 1] === slash) {
      //reset parsedEmoji and emojiBeingParsed
      parsedEmoji = "";
      emojiBeingParsed = false;

      nameBeingParsed = true;
      names.push("");

      --i; //skipping next iteration of loop with char = slash
      continue;
    }

    //stop parsing a nameBeingParsed
    if (ch === at && msg[i - 1] === lessThan) {
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
      if (ch !== whitespace) {
        names[names.length - 1] = ch + names[names.length - 1];
      }
    }
  }

  return result;
}

const msg =
  "<@Kate />:apple: <@Max/>:apple apple: :apple<@alisa /> :like: received:apple::apple:";
console.log(countEmoji(msg, "apple"));
