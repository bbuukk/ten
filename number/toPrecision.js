// Number.prototype.toPrecision()

// The toPrecision() method of Number values returns a string representing this number to the specified precision.

console.log((123.456).toPrecision(5));
console.log((0.4).toPrecision(5));
console.log((0.0004).toPrecision(5));
console.log((1.23e5).toPrecision(5));
// console.log((1.23e5).toPrecision(-1));
// console.log((1.23e5).toPrecision(NaN));
// console.log((1.23e5).toPrecision(null));
// console.log((1.23e5).toPrecision(undefined));
// console.log((1.23e5).toPrecision(Infinity));

let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // '1.2e+3'
