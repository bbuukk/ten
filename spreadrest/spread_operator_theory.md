# Spread operator ...

Create a shallow copy of items in resulting iterable object such as string or array.

There are three distinct places that accept the spread syntax:

    Function arguments list (myFunction(a, ...iterableObj, b))
    Array literals ([1, ...iterableObj, '4', 'five', 6])
    Object literals ({ ...obj, key: 'value' })

## ... can be used with objects props to create new one

    const obj1 = { foo: "bar", x: 42 };
    const obj2 = { bar: "baz", y: 13 };

    const mergedObj = { ...obj1, ...obj2 };

## Overriding properties

when props with same name are encountered in same object, last one value get assigned, all values before ignored

    const obj1 = { foo: "bar", x: 42 };
    const obj2 = { foo: "baz", y: 13 };

    const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }

## ... can be used to create new arrays

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const mergedArr = [...arr1, ...arr2];

## ... can be used to conditionally apply prop to object

    const isSummer = false;
    const fruits = {
    apple: 10,
    banana: 5,
    ...(isSummer && { watermelon: 30 }),
    };

## all primitives can be spread into object, but only strings will be saved to result

But primitives can't be spread into array, as it is not iterable

    const obj = { ...true, ..."test", ...10 };
    // { '0': 't', '1': 'e', '2': 's', '3': 't' }
