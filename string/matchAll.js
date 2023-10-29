// String.prototype.matchAll()

// The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.

const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

//!
// Parameters

// regexp

//     A regular expression object, or //! any object that has a Symbol.matchAll method.

//     If regexp is not a RegExp object and does not have a Symbol.matchAll method, it is //! implicitly converted to a RegExp by using new RegExp(regexp, 'g').

//!important
//     If regexp is a regex, then it must have the global (g) flag set, or a TypeError is thrown.

// Return value

// An iterable iterator object (which is not restartable) of matches. Each match is an array with the same shape as the return value of RegExp.prototype.exec().

{
  // With matchAll() available, you can avoid the while loop and exec with g. Instead, you get an iterator to use with the more convenient for...of, array spreading, or Array.from() constructs:

  const regexp = /foo[a-z]*/g;
  const str = "table football, foosball";
  const matches = str.matchAll(regexp);

  for (const match of matches) {
    console.log(
      `Found ${match[0]} start=${match.index} end=${
        match.index + match[0].length
      }.`
    );
  }
  // Found football start=6 end=14.
  // Found foosball start=16 end=24.

  // matches iterator is exhausted after the for...of iteration
  // Call matchAll again to create a new iterator
  Array.from(str.matchAll(regexp), (m) => m[0]);
  // [ "football", "foosball" ]
}
