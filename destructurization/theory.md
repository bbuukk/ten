# Destructuring assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

Example:
let a, b, rest;
[a, b] = [10, 20];

## For both object and array destructuring, there are two kinds of destructuring patterns: binding pattern and assignment pattern, with slightly different syntaxes.

In assignment patterns, the pattern does not start with a keyword. Each destructured property is assigned to a target of assignment — which may either be declared beforehand with var or let, or is a property of another object — in general, anything that can appear on the left-hand side of an assignment expression.

    const numbers = [];
    const obj = { a: 1, b: 2 };
    ({ a: numbers[0], b: numbers[1] } = obj);
    // The properties `a` and `b` are assigned to properties of `numbers`

# Default value

Each destructured property can have a default value.
The default value is used when the property is not present, or has value undefined.
It is not used if the property has value null.

    const [a = 1] = []; // a is 1
    const { b = 2 } = { b: undefined }; // b is 2
    const { c = 2 } = { c: null }; // c is null

## Cool examples

### Swapping variables

Two variables values can be swapped in one destructuring expression.

Without destructuring assignment, swapping two values requires a temporary variable (or, in some low-level languages, the XOR-swap trick).

    let a = 1;
    let b = 3;

    [a, b] = [b, a];
    console.log(a); // 3
    console.log(b); // 1

    const arr = [1, 2, 3];
    [arr[2], arr[1]] = [arr[1], arr[2]];
    console.log(arr); // [1, 3, 2]

### Ignoring some returned values

You can ignore return values that you're not interested in:

    function f() {
    return [1, 2, 3];
    }

    const [a, , b] = f();
    console.log(a); // 1
    console.log(b); // 3

    const [c] = f();
    console.log(c); // 1

You can also ignore all returned values:

    [, ,] = f();

### important

#### On the other hand, object destructuring can only have an identifier as the rest property.

    const { a, ...{ b } } = { a: 1, b: 2 };
    // SyntaxError: `...` must be followed by an identifier in declaration contexts

    let a, b;
    ({ a, ...{ b } } = { a: 1, b: 2 });
    // SyntaxError: `...` must be followed by an assignable reference in assignment contexts

#### Non-iterables cannot be destructured as arrays.

js

const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable

##### The prototype chain is looked up when the object is deconstructed

When deconstructing an object, if a property is not accessed in itself, it will continue to look up along the prototype chain.

    const obj = {
    self: "123",
    __proto__: {
        prot: "456",
    },
    };
    const { self, prot } = obj;

    console.log(self); // "123"
    console.log(prot); // "456"
