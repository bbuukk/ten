import {
  blueANSI,
  greenANSI,
  redANSI,
  terminator,
  yellowANSI,
} from "../variables.mjs";

// 2) function includes(text, matchStr, index)
// (заборонено використовувати indexOf та інщі методи. Реалізація повинна бути без перевикористань інших методів)
// matchStr can be large text, text, one symbol, many syymbols
// do it one foo loop!

function includes(text, matchStr, index = 0) {
  if (matchStr instanceof RegExp) {
    throw TypeError("match must not be a regular expression"); //throw if matchStr is a regex object
  } else {
    matchStr = String(matchStr); //coercing to string
  }

  if (matchStr === "") {
    return true;
  }

  let result = false;

  const textLength = text.length;
  for (let i = index, m = 0; i < textLength; i++) {
    if (matchStr.length === m) {
      result = true;
    }

    const ch = text[i];
    if (ch === matchStr[m]) {
      m++;
    } else {
      m = 0;
    }
  }
  return result;
}

const args = [
  { s: "Hello", m: "el", p: undefined, i: 0 },
  { s: "Hello", m: "meme", p: 0, i: 0 },
  { s: "Hello", m: "Hel", p: 0, i: 0 },
  { s: "Hello", m: "hel", p: 1, i: 0 },
  { s: "Hello", m: "hel", p: 1000, i: 0 },
  { s: "Hello", m: "H", p: 3, i: 0 },
  {},
  { s: "", m: "meme", p: 0, i: 0 },
  {},
  { s: "", m: "", p: 0, i: 0 },
  { s: "fhsdjfsh", m: "", p: 0, i: 0 },
  {},
  { s: "fhsdjfsh", m: undefined, p: 0, i: 0 },
  { s: "fhsdjfsh", m: null, p: 0, i: 0 },
  {},
  { s: "fhsdjfsh", m: "s", p: 0, i: 0 },
  {},
  {
    s: "fhsdjfsh",
    m: "If youve imported a user configuration profile in Visual Studio Code, you can use it to set your preferred settings for your workspace or the entire editor. Heres how to use a user configuration profile in VS Code:",
    p: 0,
    i: 0,
  },
  {
    s: "If youve imported a user configuration profile in Visual Studio Code, you can use it to set your preferred settings for your workspace or the entire editor. Heres how to use a user configuration profile in VS Code:",
    m: "imported a user",
    p: 0,
    i: 0,
  },
  {},
  { s: "fhsdjfsh", m: {}, p: 0, i: 0 },
  { s: "fhsdjfsh", m: [], p: 0, i: 0 }, // !
  // { s: [], m: "", p: 0, i: 0 }, // ! array prototype has .includes method as well
  //  { s: {}, m: "", p: 0, i: 0 }, // ! object prototype does not have one
  {},
  //regex usage in matchString
  { s: "fhsdjfsh", m: new RegExp(""), p: 0, i: 0 },
  { s: "fhsdjfsh", m: new RegExp(""), p: 0, i: 0 },
  {},
  //regex usage
];

args.forEach(({ s: str, m: matchStr, p: position, i: isImportant }, index) => {
  try {
    if (isImportant !== undefined) {
      let defIncludes = null;
      let myIncludes = null;

      console.log(terminator);

      try {
        defIncludes = str.includes(matchStr, position).toString().toUpperCase();
      } catch (e) {
        console.log(redANSI, `DEF ERR: ${e.message}`);
      }
      try {
        myIncludes = includes(str, matchStr, position)
          ?.toString()
          .toUpperCase();
      } catch (e) {
        console.log(blueANSI, `MY ERR: ${e.message}`);
      }
      console.log(
        isImportant ? `${redANSI}` : "",
        `${index}. → STR: ${str}, MTCH: ${matchStr}, POS: ${position}`
      );

      console.log(
        defIncludes === myIncludes ? greenANSI : yellowANSI,
        `      DEF: ${defIncludes}, MY: ${myIncludes}`
      );
    } else {
      console.log(`${terminator}\n\n${terminator}\n`);
    }
  } catch (e) {
    console.log(terminator);
    console.log(redANSI, `ERR: ${e.message}`);
  }
});
