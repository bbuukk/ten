// Number.isSafeInteger()

// The Number.isSafeInteger() static method determines whether the provided value is a number that is a safe integer.

console.log(Number.isSafeInteger(3)); // true
console.log(Number.isSafeInteger(2 ** 53)); // false
console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
console.log(Number.isSafeInteger(NaN)); // false
console.log(Number.isSafeInteger(Infinity)); // false
console.log(Number.isSafeInteger("3")); // fals
console.log(Number.isSafeInteger(3.1)); // false
console.log(Number.isSafeInteger(3.0)); // true

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
