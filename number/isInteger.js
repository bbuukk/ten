// Number.isInteger()

// The Number.isInteger() static method determines whether the passed value is an integer.
// If the value is NaN or Infinity, return false. The method will also return true for floating point numbers that can be represented as integer. It will always return false if the value is not a number.

//* interesting case
// For example, 5.0000000000000001 only differs from 5 by 1e-16, which is too small to be represented
console.log(Number.isInteger(5.0000000000000001));
console.log(Number.isInteger(Number.EPSILON));
console.log();
//* interesting case
// numbers around the magnitude of Number.MAX_SAFE_INTEGER will suffer from loss of precision and make Number.isInteger return true even when it's not an integer.
console.log(Number.isInteger(Number.MAX_VALUE + 0.111));

// The actual threshold varies based on how many bits are needed to represent the decimal — for example, Number.isInteger(4500000000000000.1) is true, but Number.isInteger(4500000000000000.5) is false.)
console.log(Number.isInteger(Number.MAX_VALUE + 0.711));
console.log(Number.isInteger(Number.MAX_VALUE + 0.9));
console.log(Number.isInteger(4500000000000000.1));
console.log(Number.isInteger(4500000000000000.167));
console.log(Number.isInteger(4500000000000000.355));
console.log(Number.isInteger(4500000000000000.5));
console.log();

console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log(Number.isInteger(NaN));
console.log();

console.log(Number.isInteger(5.0));
console.log(Number.isInteger(5.000000000000001));
console.log(Number.isInteger(5.0000000000000001));
console.log();
