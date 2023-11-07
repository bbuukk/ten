import {
  blueANSI,
  greenANSI,
  redANSI,
  terminator,
  yellowANSI,
  yellow,
  flash,
  green,
  red,
  black,
} from "../variables.mjs";

//  function split(text, divider)
// (заборонено використовувати нативні методи. Реалізація повинна бути без перевикористань інших методів)
// Повторити поведінку нативниї методів 1 в 1.
// divider can be anything, slovo, text anything
function split(text, separator, limit = text.length) {
  if (limit === 0 || isNaN(limit)) {
    return [];
  }

  if (limit < 0) {
    limit = text.length;
  }

  // Omitting separator or passing undefined causes split() to return an array with the calling string as a single element. All values that are not undefined or objects with a @@split method are coerced to strings.
  if (separator === undefined || separator === null) {
    return [text];
  } else if (separator === text) {
    return ["", ""];
  } else if (separator.length >= text.length) {
    return [text];
  } else if (!(typeof separator[Symbol.split] === "function")) {
    separator = String(separator);
  }

  let result = [];

  let word = "";
  let parsedSep = "";

  // only for strings, not regex
  const textLength = text.length;
  for (let i = 0, j = 0; i <= textLength; i++) {
    const ch = text[i];
    if (!ch) {
      result.push(word);
    }

    if (ch === separator[j]) {
      parsedSep += ch;
      ++j;

      if (parsedSep === separator) {
        result.push(word);
        j = 0;
        word = "";
        parsedSep = "";
      }
    } else {
      word += parsedSep;
      word += ch;
      parsedSep = "";
      j = 0;
    }
  }

  return result.length === 0 ? [text] : result;
}

// This method defines custom splitting behavior
const separator = {
  [Symbol.split](str) {
    return str.split(" "); // Split the input string by spaces
  },
};

const args = [
  { s: "Hello my name is Bohdan", sp: " ", l: undefined, i: 0 },
  { s: "Hello my name is Bohdan", sp: ",", l: undefined, i: 0 },
  { s: "Hello my name is Bohdan", sp: ",", l: undefined, i: 0 },
  {
    s: "Hello my name is Bohdan",
    sp: "Hello my name is Bohdan",
    l: undefined,
    i: 0,
  },
  { s: "foo", sp: "o", l: undefined, i: 0 },
  { s: "foo", sp: "f", l: undefined, i: 0 },
  { s: "foo", sp: "fo", l: undefined, i: 0 },
  { s: "foo", sp: "fooooooooooooooo", l: undefined, i: 0 },
  { s: "foo", sp: "ooo", l: undefined, i: 0 },
  {},
  { s: "foo", sp: null, l: undefined, i: 0 },
  { s: "foo", sp: undefined, l: undefined, i: 0 },
  {},
  // { s: "foo", sp: new RegExp("o"), l: undefined, i: 0 },
  { s: "foo", sp: separator, l: undefined, i: 0 },
];

args.forEach(({ s: str, sp: separator, l: limit, i: isImportant }, index) => {
  if (isImportant !== undefined) {
    let defSplit = null;
    let mySplit = null;

    console.log(terminator);

    console.time("DEF");
    try {
      defSplit = str.split(separator, limit);
    } catch (e) {
      console.log(redANSI, `DEF ERR: ${e.message}`);
    }
    console.timeEnd("DEF");
    console.time("MY");
    try {
      mySplit = split(str, separator, limit);
    } catch (e) {
      console.log(blueANSI, `MY ERR: ${e.message}`);
    }
    console.timeEnd("MY");

    const isImp = isImportant ? `${red}→${flash}` : `${black}→${flash}`;
    console.log(
      "\n",
      `${isImp} STR: "${str}"\n`,
      `${isImp} SEP: "${separator}"\n`,
      `${isImp} LIM: ${limit}\n`
    );

    console.log(isEqual(defSplit, mySplit) ? green : yellow, "result:", flash);
    console.log("DEF: ", defSplit);
    console.log("MY:  ", mySplit);
  } else {
    console.log(`${terminator}\n\n${terminator}\n`);
  }
});
console.log(terminator);

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
