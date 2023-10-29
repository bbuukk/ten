// String.prototype.trimStart()

// The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

//!
// Return value

// A new string representing str stripped of whitespace from its beginning (left side). //! Whitespace is defined as white space characters plus line terminators.

//!important
const greeting = "  \n Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";

let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
