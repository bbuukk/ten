// String.prototype.includes()

// The includes() method of String values performs a // !case-sensitive search
//to determine whether a given string may be found within this string, returning true or false as appropriate.

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// Expected output: "The word "fox" is in the sentence"

//!
// Parameters

// * searchString

//     A string to be searched for within str. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes includes() to search for the string "undefined", which is rarely what you want.

// * position Optional

//     The position within the string at which to begin searching for searchString. (Defaults to 0.)

const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true
