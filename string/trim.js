// String.prototype.trim()

// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

const str = "   foo  ";
console.log(str.trim()); // 'foo'
