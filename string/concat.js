// String.prototype.concat()

// The concat() method of String values concatenates the string arguments to this string and returns a new string.

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"

//!
// If the arguments are not of the type string, they are converted to string values before concatenating.

// !
// The concat() method is very similar to the addition/string concatenation operators (+, +=), except that concat() coerces its arguments directly to strings, while addition coerces its operands to primitives first. For more information, see the reference page for the + operator.

const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
