// Math.round()

// The Math.round() static method returns the value of a number rounded to the nearest integer.

console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95));

//!
console.log(Math.round(5.5));
console.log(Math.round(-5.5));

console.log(Math.round(-5.05));

Math.round(-Infinity); // -Infinity
Math.round(-20.51); // -21
Math.round(-20.5); // -20
Math.round(-0.1); // -0
Math.round(0); // 0
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(42); // 42
Math.round(Infinity); // Infinity
