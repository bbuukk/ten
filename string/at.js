// * String.prototype.at()

// The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

//* Example

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// let index = 5;

// console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// // Expected output: "Using an index of 5 the character returned is u"

// index = -4;

// console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// // Expected output: "Using an index of -4 the character returned is d"

// * Return value

// A String consisting of the single UTF-16 code unit located at the specified position. Returns undefined if the given index can not be found.

const str = "🌍";
const char = str.at(0); // Returns "🌍"
console.log(char);
