function isObject(obj) {
  return obj && Object.getPrototypeOf(obj) === Object.getPrototypeOf({})
    ? true
    : false;
}

const obj = { a: 1, b: 2 };
const arr = [1, 2];
class Bohdan {}
const bohdan = new Bohdan();
const newWeakMap = new WeakMap();

console.log(isObject(obj));
console.log(isObject(new Object()));
console.log(isObject({}));
console.log(isObject(new Object(null)));
console.log(isObject(new Object(undefined)));

console.log();
console.log(isObject(new Date()));
console.log(isObject(arr));
console.log(isObject(bohdan));
console.log(isObject(newWeakMap));
console.log(isObject(null));
console.log(isObject(undefined));
console.log(isObject(0));
console.log(isObject(100));
console.log(isObject("string"));
console.log(isObject(Object.create(null)));
console.log(isObject(() => {}));
console.log();

const strObj = new String("hsdfjf"); // String with new returns a string wrapper object.
console.log(isObject(strObj));

// argument: data convert to string is forbidden
// prototype.toString is forbidden
// class Bohdan {}i

// isObject(new Bohdan()) // false
// isObject(new WeakMap()) // false
// isObject(nulll) // false
// isObject(undefined) // false

// isObject(new Object()) // true
// isObject({}) // true
// or just {}
