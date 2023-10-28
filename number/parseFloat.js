// Number.parseFloat()

// The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

// Parameters

// string

//     The value to parse, coerced to a string. Leading whitespace in this argument is ignored.

console.log(Number.parseFloat("10"));
console.log(Number.parseFloat(10));
console.log(Number.parseFloat(10));
console.log();

// ! interesting case
//Return value
// A floating point number parsed from the given string.
// Or NaN when the first non-whitespace character cannot be converted to a number.
console.log(Number.parseFloat("13y48r"));
console.log(parseFloat("1e308"));
console.log(parseFloat("1e309"));
console.log();

// ! interesting case
console.log(parseFloat("3,14"));
console.log();

console.log(parseFloat("3.14000000000"));
console.log(parseFloat("3.14000000000"));
console.log(parseFloat("0.1111111111111111111111111111111111111111111111"));

console.log(parseFloat("1032974       973298"));
console.log(parseFloat("    0.11 01234 "));
