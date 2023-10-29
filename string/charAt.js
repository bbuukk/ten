// * String.prototype.charAt()

// The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

// charAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt() and String.fromCodePoint().

// * Parameters

// index

//     Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.

// * Return value

// A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of the range of 0 – str.length - 1, charAt() returns an empty string.

console.log("dshlfhsdf"[0]);

let str = "dshlfhsdf";
str[0] = "b";

// When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed. The properties involved are neither writable nor configurable

console.log(str);

// !
console.log("dhfslffk".charAt(-4));
console.log("dhfslffk".at(-4));

// !
// charAt() is very similar to using bracket notation to access a character at the specified index. The main differences are:

//     charAt() attempts to convert index to an integer, while bracket notation does not, and directly uses index as a property name.
//    ! charAt() returns an empty string if index is out of range, while bracket notation returns undefined.

//! coercion
console.log("dhfslffk".charAt("0"));
console.log("dhfslffk".at("0"));
console.log();

// !
console.log("dhfslffk".at("234324320"));
console.log("dhfslffk".charAt("3249820"));
console.log();
