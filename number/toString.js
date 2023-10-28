// Number.prototype.toString()

// The toString() method of Number values returns a string representing this number value.

// Parameters

// radix Optional

//     An integer in the range 2 through 36 specifying the base to use for representing the number value. Defaults to 10.

//interesting case
console.log(toString("123"));

const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
console.log(bin);
const binii = parseInt(bin, 2).toString(16);
console.log(binii);

console.log((0x23213).toString(16));

console.log((Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER).toString());

console.log();
// console.log((232132145).toString(123214));
// console.log((232132145).toString(null));
// console.log((232132145).toString(NaN));
// console.log((232132145).toString(Infinity));
console.log((232132145).toString(undefined));
