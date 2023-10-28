// Number.prototype.valueOf()

// The valueOf() method of Number values returns the value of this number.

const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"

console.log(NaN.valueOf());
console.log(Infinity.valueOf());
// console.log(null.valueOf());
// console.log(undefined.valueOf());
