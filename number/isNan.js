// Number.isNaN()

// The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function.

// The function Number.isNaN() provides a convenient way to check for equality with NaN. Note that you cannot test for equality with NaN using either the == or === operators, because unlike all other value comparisons in JavaScript, these evaluate to false whenever one operand is NaN, even if the other operand is also NaN.

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hsdfdsj"));
console.log(Number.isNaN(1000));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(null));
console.log(Number.isNaN(undefined));

Number.isNaN(Number.NaN); // true
Number.isNaN({});

console.log(0 / 0);
