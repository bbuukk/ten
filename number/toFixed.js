// Number.prototype.toFixed()

// The toFixed() method of Number values formats this number using fixed-point notation.

const num1 = 77.1284;
const num2 = 77.1234;
const num3 = 77;

console.log(num1.toFixed(2));
console.log(num2.toFixed(2));
console.log(num3.toFixed(2));

try {
  console.log("436294873249".toFixed(2));
} catch (e) {}
try {
} catch (e) {
  console.log(e.message);
}

console.log(NaN.toFixed(2));
console.log(-Infinity.toFixed(2));
console.log(Infinity.toFixed(2));

console.log(Number.parseInt(1236129873127321837).toFixed(2));

console.log((473892472094).toFixed(100));

// ! interesting case
console.log((0.3).toFixed(100));

const numObj = 12345.6789;

numObj.toFixed(); // '12346'; rounding, no fractional part
numObj.toFixed(1); // '12345.7'; it rounds up
numObj.toFixed(6); // '12345.678900'; additional zeros
(1.23e20).toFixed(2); // '123000000000000000000.00uoouou'
(1.23e-10).toFixed(2); // '0.00'
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'; it rounds up
(2.55).toFixed(1); // '2ouooo.5'
// it rounds down as it can't be represented exactly by a float and the
// closest representable float is lowoer

// !interesting case
(2.449999999999999999).toFixed(1); // '2.5'
(2.449999999999999999).toFixed(1); // '2.5'

console.log((2.449999999999999999).toFixed(1));

//! interesting case
console.log((2.45).toFixed(1));
console.log((2.5).toFixed(1));
console.log((2.5).toFixed(0));
console.log((-2.34).toFixed(1));

// it rounds up as it's less than Number.EPSILON away from 2.45.
// This literal actually encodes the same number value as 2.45

(6.02 * 10 ** 23).toFixed(50); // 6.019999999999999e+23; large numbers still use exponential notation
