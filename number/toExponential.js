// Number.prototype.toExponential()

// The toExponential() method of Number values returns a string representing this number in exponential notation.

console.log(Number.parseFloat(123456).toExponential());
console.log(Number.parseFloat(123456).toExponential(2));
console.log(Number.parseFloat(123456).toExponential(0));
try {
  console.log(Number.parseFloat(123456).toExponential(-1));
  console.log(Number.parseFloat(123456).toExponential(Infinity));
} catch (e) {
  console.log(e.message);
}
console.log(Number.parseFloat(123456).toExponential(NaN));
console.log(Number.parseFloat(123456).toExponential(undefined));
console.log(Number.parseFloat(123456).toExponential(null));
console.log(Number.parseFloat(123456).toExponential(1.1232));
console.log(Number.parseFloat(123456).toExponential(1, 1232));
console.log(Number.parseFloat(123456).toExponential(2, 1232));

const numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
console.log(numObj.toExponential(2)); // 7.71e+1
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77).toExponential()); // 7.7e+1
