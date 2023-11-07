// Math.floor()

// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

//!
// Return value
// The largest integer smaller than or equal to x. It's the same value as -Math.ceil(-x).

//same value as -Math.ceil(-x)
console.log(Math.floor(5.06));
console.log(-Math.ceil(-5.06));

console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05)); // -6

Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
