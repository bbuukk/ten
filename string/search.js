import { greenANSI, redANSI, terminator, yellowANSI } from "../variables.mjs";

const args = [
  { a: "string", b: "t" },
  { a: "stringundefined", b: "undefined" },
  { a: "stringundefined", b: undefined },
  /*
  Here’s the relevant part of the ECMAScript specification that explains this behavior (Section 21.2.3.2.2):

    If pattern is undefined, let P be the empty string; otherwise, let P be ? ToString(pattern).

*/
  { a: "stringnull", b: null },
];

args.forEach(({ a, b, c, d }, index) => {
  const searched = a.search(b);

  console.log(terminator);
  console.log(searched);
});
console.log(terminator);

// const regex = new RegExp(undefined);
// console.log("🚀 ~ regex:", regex);

// console.log("helloundefined".search(undefined));
