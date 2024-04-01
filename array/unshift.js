const arr = [1, 2, 3];
const resArr = arr.unshift();
console.log(arr);

// The unshift() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};

Array.prototype.unshift.call(arrayLike, 1, 2);
console.log(arrayLike);
