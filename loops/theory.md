# for

it create new lexical env for every iteration

# for...in

The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

## Deleted, added, or modified properties

Any property added to the currently visited object during iteration will not be visited, because all own properties of the current object have already been saved beforehand.
If multiple objects in the prototype chain have a property with the same name, only the first one will be considered, and it is only visited if it's enumerable. If it is non-enumerable, no other properties with the same name further up the prototype chain will be visited, even if they are enumerable.

In general, it is best not to add, modify, or remove properties from the object during iteration, other than the property currently being visited. The spec explicitly allows the implementation to not follow the algorithm above in one of the following cases:

    The object's prototype chain is modified during iteration.
    A property is deleted from the object or its prototype chain during iteration.
    A property is added to the object's prototype chain during iteration.
    A property's enumerability is changed during iteration.

## Array iteration and for...in

Array indexes are just enumerable properties with integer names and are otherwise identical to general object properties. The for...in loop will traverse all integer keys before traversing other keys, and in strictly increasing order, making the behavior of for...in close to normal array iteration. However, the for...in loop will return all enumerable properties, including those with non–integer names and those that are inherited. Unlike for...of, for...in uses property enumeration instead of the array's iterator. In sparse arrays, for...of will visit the empty slots, but for...in will not.
