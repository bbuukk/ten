// Objects are converted to primitives via the internal // ![[ToPrimitive]] method,
// which is responsible for both numeric and string conversion.

// !
//Parameters
// [[ToPrimitive]] is passed with an input value and preferred type of conversion: Number or String. preferredType is optional.

// Both numeric and string conversion make use of two methods of the input object: valueOf and toString . Both methods are declared on Object.prototype and thus available for any derived types, such as Date, Array, etc.

// In general the // !  algorithm is as follows:
// 1. If input is already a primitive, do nothing and return it.
// 2. Call input.toString(), if the result is primitive, return it.
// 3. Call input.valueOf(), if the result is primitive, return it.
// 4. If neither input.toString() nor input.valueOf() yields primitive, throw TypeError.

//! Numeric vs String conversion
// Numeric conversion first calls valueOf (3) with a fallback to toString (2). String conversion does the opposite: toString (2) followed by valueOf (3).

//! most built-in types don't have valueOf() method
// Most built-in types do not have valueOf, or have valueOf returning this object itself, so it’s ignored because it’s not a primitive. That’s why numeric and string conversion might work the same — both end up calling toString().

//! == and + operators exception
// Different operators can trigger either numeric or string conversion with a help of preferredType parameter. But there are two exceptions: loose equality == and binary + operators trigger default conversion modes (preferredType is not specified, or equals to default). In this case, most built-in types assume numeric conversion as a default, except Date that does string conversion.

// ! here is hwo we cen change logic of object type conversion
// ES6 Symbol.toPrimitive method
// In ES5 you can hook into object-to-primitive conversion logic by overriding toString and valueOf methods.
//!
// In ES6 you can go farther and completely replace internal[[ToPrimitive]] routine by implementing the[Symbol.toPrimtive] method on an object.

//! interesting example

// All operands are non-primitive values, so + starts with the leftmost triggering numeric conversion. Both Object’s and Array’s valueOf method returns the object itself, so it’s ignored. toString() is used as a fallback. The trick here is that first {} is not considered as an object literal, but rather as a block declaration statement, so it’s ignored. Evaluation starts with next +[] expression, which is converted to an empty string via toString() method and then to 0 .

//```
// {}+[]+{}+[1]
// ==> +[]+{}+[1]
// ==> 0 + {} + [1]
// ==> 0 + '[object Object]' + [1]
// ==> '0[object Object]' + [1]
// ==> '0[object Object]' + '1'
// ==> '0[object Object]1'
///```

//! interesting case
// - operator triggers numeric conversion for Date. Date.valueOf() returns number of milliseconds since Unix epoch.

// new Date(0) - 0
// ==> 0 - 0
// ==> 0

// ! overriding toString()
function MyFunction() {}

MyFunction.prototype.toString = function () {
  return "My amazing function";
};

var myAmazingFunc = new MyFunction();
console.log(myAmazingFunc.toString()); // coerce function to primitive using custom toString()
console.log(myAmazingFunc); // does not trigger toString()

// ! overriding valueOf()
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object1 = new MyNumberType(4);
console.log(object1 + 1); // Outputs: 5

//!  overriding toPrimitive

// The Symbol.toPrimitive method in ES6 allows you to control the default conversion of an object into a primitive value. //! When Symbol.toPrimitive is defined, JavaScript will call this method to convert an object to a primitive value, instead of calling valueOf and toString.

const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 42;
    }
    if (hint === "string") {
      return "forty two";
    }
    return true;
  },
};

console.log(+obj); // Outputs: 42 — hint is "number"
console.log(`${obj}`); // Outputs: "forty two" — hint is "string"
console.log(obj + ""); // Outputs: "true" — hint is "default"

//! abstance of [@@toPrimitive]() method on {} and []
// Neither {} nor [] have a [@@toPrimitive]() method. Both {} and [] inherit valueOf() from Object.prototype.valueOf, which returns the object itself. Since the return value is an object, it is ignored. Therefore, toString() is called instead. {}.toString() returns "[object Object]", while [].toString() returns "", so the result is their concatenation: "[object Object]".

//! built-in object using custom Symbol.toPrimitive method
// Date and Symbol objects are the only built-in objects that override the [@@toPrimitive]() method. Date.prototype[@@toPrimitive]() treats the "default" hint as if it's "string", while Symbol.prototype[@@toPrimitive]() ignores the hint and always returns a symbol.

//! we can overrite [@@toPrimitive]() on all the object in our js enviroment, creating custom [@@toPrimitive]() for Object.prototype

// Object.prototype[Symbol.toPrimitive] = function (hint) {
//   if (hint === "number") {
//     return 42;
//   }
//   if (hint === "string") {
//     return "Hello, world!";
//   }
//   return true;
// };

// console.log(+{}); // Outputs: 42 — hint is "number"
// console.log(`${{}}`); // Outputs: "Hello, world!" — hint is "string"
// console.log({} + ""); // Outputs: "true" — hint is "default"

// If the value is a primitive then ToPrimitive() is already done. Otherwise, the value is an object obj, which is converted to a promitive as follows:

//     Number mode: Return the result of obj.valueOf() if it is primitive. Otherwise, return the result of obj.toString() if it is primitive. Otherwise, throw a TypeError.
//     String mode: works like Number mode, but toString() is called first, valueOf() second.
//     Default mode: works exactly like Number mode.

{
  const obj = {
    [Symbol.toPrimitive](hint) {
      if (hint === "number") {
        return 42;
      }
      if (hint === "string") {
        return "forty two";
      }
      return true;
    },
  };

  console.log();
  console.log(obj.valueOf()); // Outputs: 42 — hint is "number"
  console.log(obj.toString()); // Outputs: "forty two" — hint is "string"
  console.log(obj + ""); // Outputs: "true" — hint is "default"
}

{
  var obj2 = {
    toString: function () {
      return "Hello";
    },
    valueOf: function () {
      return 42;
    },
  };

  console.log();
  console.log(+obj2); // Outputs: 42
  console.log(obj2 + "");
}

// ! In JavaScript, custom objects do not directly inherit the Symbol.toPrimitive method from Object.prototype. Instead, they inherit the valueOf and toString methods1.
