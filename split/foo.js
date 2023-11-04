function split(text, separator, limit = text.length) {
  if (limit === 0 || isNaN(limit)) {
    return [];
  } else if (limit < 0) {
    limit = text.length;
  }

  if (typeof separator !== "string") {
    return [text];
  } else if (!(typeof separator[Symbol.split] === "function")) {
    separator = String(separator);
  } else {
    //handling regex
  }

  const word = "";

  const textLength = text.length;
  for (let i = 0; i < textLength; i++) {
    const ch = text[i];

    word += ch;

    if (ch === separator[j]) {
    }
  }
}

// console.log(split("foo", "o"));
