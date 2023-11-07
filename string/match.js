// String.prototype.match()

// The match() method of String values retrieves the result of matching this string against a regular expression.
{
  const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
  const regex = /[A-Z]/g;
  const found = paragraph.match(regex);
}

console.log(found);
// Expected output: Array ["T", "I"]

//!
//Pararameters
// regexp

//     A regular expression object, or any object that has a Symbol.match method.

//     If regexp is not a RegExp object and does not have a Symbol.match method, it is implicitly converted to a RegExp by using new RegExp(regexp).

//     If you don't give any parameter and use the match() method directly, you will get an Array with an empty string: [""], because this is equivalent to match(/(?:)/).

// Return value
// An Array whose contents depend on the presence or absence of the global (g) flag, or // !null if no matches are found.

//     If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups are not included.
//     If the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, match() will return the same result as RegExp.prototype.exec() (an array with some extra properties).

//!
// Examples
{
  const str = "For more information, see Chapter 3.4.5.1";
  //using i flag for case insensitivity
  const re = /see (chapter \d+(\.\d)*)/i;
  const found = str.match(re);

  console.log(found);
  // [
  //   'see Chapter 3.4.5.1',
  //   'Chapter 3.4.5.1',
  //   '.1',
  //   index: 22,
  //   input: 'For more information, see Chapter 3.4.5.1',
  //   groups: undefined
  // ]
}
{
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //using g(global) flag, to return all matches
  const regexp = /[A-E]/gi;
  const matches = str.match(regexp);

  console.log(matches);
  // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
}

{
  const str = "Nothing will come of nothing.";

  str.match(); // returns [""]
}

{
  const str1 =
    "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.";
  const str2 =
    "My grandfather is 65 years old and My grandmother is 63 years old.";
  const str3 = "The contract was declared null and void.";
  str1.match("number"); // "number" is a string. returns ["number"]
  str1.match(NaN); // the type of NaN is the number. returns ["NaN"]
  str1.match(Infinity); // the type of Infinity is the number. returns ["Infinity"]
  str1.match(+Infinity); // returns ["Infinity"]
  str1.match(-Infinity); // returns ["-Infinity"]
  str2.match(65); // returns ["65"]
  str2.match(+65); // A number with a positive sign. returns ["65"]
  str3.match(null); // returns ["null"]
}

{
  //! important
  console.log("123".match("1.3")); // [ "123" ]
  //   This is a match because . in a regex matches any character. In order to make it only match specifically a dot character, you need to escape the input.

  console.log("123".match("1\\.3")); // null
}
