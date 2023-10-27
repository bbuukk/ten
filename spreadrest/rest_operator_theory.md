# Rest operator f (...args) {}

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
providing a way to represent variadic functions in JavaScript.

Example:

```
function sum(...theArgs) {
let total = 0;
for (const arg of theArgs) {
total += arg;
}
return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

```

A function definition's last parameter can be prefixed with ... (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within an Array object.

A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
