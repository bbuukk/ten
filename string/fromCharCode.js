// String.fromCharCode()

// The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.

// ! charCodeAt() always returns a value that is less than 65536,

console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="

// !
// Parameters

// num1, …, numN

//     A number between 0 and 65535 (0xFFFF) representing a UTF-16 code unit.//! Numbers greater than 0xFFFF are truncated to the last 16 bits.
// No validity checks are performed.

//!
// Return value

// A string of length N consisting of the N specified UTF-16 code units.

console.log(String.fromCharCode(65, 66, 67)); // returns "ABC"
console.log(String.fromCharCode(0x2014)); // returns "—"
console.log(String.fromCharCode(0x12014)); // also returns "—"; the digit 1 is truncated and ignored
console.log(String.fromCharCode(8212)); // also returns "—"; 8212 is the decimal form of 0x2014

console.log(String.fromCharCode(0xd83c, 0xdf03)); // Code Point U+1F303 "Night with Stars" === "\uD83C\uDF03"
console.log(String.fromCharCode(55356, 57091)); // Code Point U+1F303 "Night with Stars" === "\uD83C\uDF03"

console.log(String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07)); // "\uD834\uDF06a\uD834\uDF07"
