function includes(text, matchStr, index = 0) {
  if (matchStr instanceof RegExp) {
    throw TypeError("match must not be a regular expression"); //throw if matchStr is a regex object
  } else {
    matchStr = String(matchStr); //coercing to string
  }

  if (matchStr === "") {
    return true;
  } else if (text === matchStr) {
    return true;
  }

  let result = false;

  const textLength = text.length;
  for (let i = index, m = 0; i < textLength; i++) {
    if (matchStr.length === m) {
      result = true;
      break;
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

console.log(includes("foo", "foo"));
