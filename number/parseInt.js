// Number.parseInt()

// The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.

// Parameters

// string

//     The value to parse, coerced to a string. Leading whitespace in this argument is ignored.
// radix Optional

//     An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string.

//     If radix is ! undefined or 0,! it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X, in which case a radix of 16 is assumed.

//when encounters first character of ouf current redix system it stops and evaluetes the number, not throwing an error

console.log(Number.parseInt("123"));
console.log(Number.parseInt("0xF", 16));
console.log(Number.parseInt("0xF"));
console.log();

// ! interesting case
console.log(Number.parseInt("0xF", 199));
console.log(Number.parseInt("0xF", 35));
console.log(Number.parseInt("0xF", 20));
console.log(Number.parseInt("0xF", 8));
console.log(Number.parseInt("0xF", 2));
console.log(Number.parseInt("0123123", 2));
console.log(Number.parseInt("0101011", 2));
console.log();

console.log(Number.parseInt("3.14", 10)); // 3
console.log(Number.parseInt("123abc456", 10)); // 123
console.log(Number.parseInt("", 10)); // NaN
console.log(Number.parseInt("   42  is a number", 10)); // 42
console.log(Number.parseInt("123", 37)); // NaN
