// const obj1 = { foo: "bar", x: 42 };
// const obj2 = { bar: "baz", y: 13 };

// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);

// obj1.foo = "fox";
// obj1.x = 48;
// console.log(mergedObj);
// console.log(obj1);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergedArr = [...arr1, ...arr2];

// console.log(mergedArr);
// arr1[0] = 10;
// console.log(mergedArr);

// const slice = arr1.slice(0, 2);
// console.log(slice);
// arr1[0] = 21;
// console.log(slice);

const a = 1;
const str = "test";

const arr = [...a, ...str];
console.log(arr);
