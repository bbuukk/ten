// String.prototype.search()

// The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string

const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// Expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "."

//!
// Parameters

// regexp

//     A regular expression object, or any object that has a Symbol.search method.

//     If regexp is not a RegExp object and does not have a Symbol.search method, it is implicitly converted to a RegExp by using new RegExp(regexp).

// !
// The g flag of regexp has no effect on the search() result, and the search always happens as if the regex's lastIndex is 0. For more information on the behavior of search(), see RegExp.prototype[@@search]().

//examples

const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation
