// Math.trunc()

// The Math.trunc() static method returns the integer part of a number by removing any fractional digits.

console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0

//!
console.log(Math.trunc(-0.123));
// Expected output: -0

console.log(Math.trunc(Number.MAX_SAFE_INTEGER));
console.log(Math.trunc(Number.MAX_SAFE_INTEGER + 1000000));
console.log(Math.trunc(Number.MAX_SAFE_INTEGER + Number.MAX_VALUE));
console.log(Math.trunc(Number.MAX_VALUE + Number.MAX_VALUE));

Math.trunc(-Infinity); // -Infinity
Math.trunc("-1.123"); // -1
Math.trunc(-0.123); // -0
Math.trunc(-0); // -0
Math.trunc(0); // 0
Math.trunc(0.123); // 0
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(Infinity); // Infinity

//? Using bitwise no-ops to truncate numbers
//! Warning: This is not a polyfill for Math.trunc() because of non-negligible edge cases.
const original = 3.14;
const truncated1 = ~~original; // Double negation
const truncated2 = original & -1; // Bitwise AND with -1
const truncated3 = original | 0; // Bitwise OR with 0
const truncated4 = original ^ 0; // Bitwise XOR with 0
const truncated5 = original >> 0; // Bitwise shifting by 0

// Beware that this is essentially toInt32, which is not the same as Math.trunc. When the value does not satisfy -231 - 1 < value < 231 (-2147483649 < value < 2147483648), the conversion would overflow.

const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0

// Only use ~~ as a substitution for Math.trunc() when you are confident that the range of input falls within the range of 32-bit integers.
