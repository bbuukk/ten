// todo to recap // String.prototype.replace()

// The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. //! If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(p.replace("dog", "monkey"));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, "ferret"));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

//!
// Parameters

// pattern

//     Can be a string or an object with a Symbol.replace method — the typical example being a regular expression. Any value that doesn't have the Symbol.replace method will be coerced to a string.
// replacement

//     Can be a string or a function.

//         If it's a string, it will replace the substring matched by pattern. A number of special replacement patterns are supported; see the Specifying a string as the replacement section below.
//         If it's a function, it will be invoked for every match and its return value is used as the replacement text. The arguments supplied to this function are described in the Specifying a function as the replacement section below.

//!
// A string pattern will only be replaced once. To perform a global search and replace, use a regular expression with the g flag, or use replaceAll() instead.
