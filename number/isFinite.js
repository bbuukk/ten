// Number.isFinite();

// The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.

// Difference between Number.isFinite() and global isFinite()

// In comparison to the global isFinite() function, this method doesn't first convert the parameter to a number. This means only values of the type number and are finite return true, and non-numbers always return false.

// ```isFinite("0"); // true; coerced to number 0
// Number.isFinite("0"); // false
// isFinite(null); // true; coerced to number 0
// Number.isFinite(null); // false```;

console.log(Number.isFinite(0));
console.log();

console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite("0"));
console.log(Number.isFinite("123219"));
console.log(Number.isFinite(0 / 0));

console.log();
console.log(Number.isFinite(null));
console.log(Number.isFinite(undefined));
console.log();

console.log(isFinite(null));
console.log(isFinite(undefined));
console.log(isFinite(NaN));
console.log();

console.log(Number.isFinite(352903232432243843982942343743294638));
console.log(Number.isFinite(0.0000000000000000000000000000001));
console.log(Number.isFinite([]));
console.log(Number.isFinite({}));
console.log(Number.isFinite());
console.log(Number.isFinite("1000"));
console.log(Number.isFinite(() => {}));
console.log(Number.isFinite(new Date()));

// * interesting case
console.log(Number.isFinite(Number.MAX_VALUE + 1000));
console.log(Number.isFinite(Number.MAX_VALUE + Number.MAX_VALUE));

console.log(Number.isFinite(-0));

console.log(Number.isFinite(Number.EPSILON));
