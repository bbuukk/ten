//todo recap String.prototype.split()

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

//!
//Parameters

//* separator

//     The pattern describing where each split should occur. Can be undefined, a string, or an object with a Symbol.split method — the typical example being a regular expression. Omitting separator or passing undefined causes split() to return an array with the calling string as a single element. //! All values that are not undefined or objects with a @@split method are coerced to strings.

//* limit Optional

//     A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

//         The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
//         If limit is 0, [] is returned.

//!
// Return value

// An Array of strings, split at each point where the separator occurs in the given string

// ! Warning: When the empty string ("") is used as a separator, the string is not split by user-perceived characters (grapheme clusters) or unicode characters (code points), but by UTF-16 code units. This destroys surrogate pairs

// If separator is a regexp that matches empty strings, whether the match is split by UTF-16 code units or Unicode code points depends on if the regex is Unicode-aware.

"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]

//examples

const emptyString = "";

// string is empty and separator is non-empty
console.log(emptyString.split("a"));
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []
