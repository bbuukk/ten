function split(text, separator, limit = text.length) {
  if (limit === 0 || isNaN(limit)) {
    return [];
  }

  if (limit < 0) {
    limit = text.length;
  }

  // Omitting separator or passing undefined causes split() to return an array with the calling string as a single element. All values that are not undefined or objects with a @@split method are coerced to strings.
  if (separator === undefined) {
    return [text];
  } else if (separator === text) {
    return ["", ""];
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
    if (!ch || parsedSep === separator) {
      result.push(word);
      j = 0;
      word = "";
      parsedSep = "";
    }

    if (ch === separator[j]) {
      parsedSep += ch;
      ++j;
    } else {
      word += parsedSep;
      word += ch;
      parsedSep = "";
      j = 0;
    }
  }

  return result.length === 0 ? [text] : result;
}

const text = "Hello my name is Bohdan";
console.log(split(text, text));
console.log(split("foo", "f"));
console.log(split("foo", "fo"));
console.log(split("foo", "o"));
