# Destructuring assignment

It defines which values to unpack from the sourced variable.

Example:
let a, b, rest;
[a, b] = [10, 20];

    console.log(a);
    // Expected output: 10

    console.log(b);
    // Expected output: 20

    [a, b, ...rest] = [10, 20, 30, 40, 50];

    console.log(rest);
    // Expected output: Array [30, 40, 50]

## For both object and array destructuring, there are two kinds of destructuring patterns: binding pattern and assignment pattern, with slightly different syntaxes.
