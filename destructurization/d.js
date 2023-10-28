// {
//   const arr = ["ara1", "ara2", ["ara3", "ara4"]];

//   const [a = "bima", z, [c, d]] = arr;

//   console.log(a, z, c, d);
//   console.log(arr);
// }

{
  //   const obj = { a: "kima", b: "lymon" };
  //   const { z, b } = obj;
  //   console.log(z, b);
}

{
  // const numbers = [];
  // const obj = { a: 1, b: 2 };
  // ({ a: numbers[0], b: numbers[1] } = obj);
  // console.log(numbers);
}

{
  // const { b = console.log("hey") } = { b: undefined };
  // Does not log anything, because `b` is defined and there's no need
  // to evaluate the default value.
}

// const array = [
//   { pop: "foo", push: "bar" },
//   { pop: "baz", push: "qux" },
// ];

// const [{ pop: p1, push: p2 }, { pop, push }] = array;

// console.log(p1); // Outputs: "foo"
// console.log(p2); // Outputs: "foo"
// console.log(pop); // Outputs: "foo"
// console.log(push); // Outputs: "foo"

const { a, toFixed } = 1;
console.log(a, toFixed);
