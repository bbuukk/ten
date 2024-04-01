import { greenANSI, redANSI, terminator, yellowANSI } from "../variables.mjs";

const args = [
  { a: [1, 2, 4, 5], b: 0, c: 0, d: 3 },
  { a: [1, 2, 4, 5], b: 0, c: 1, d: 3 },
  { a: [1, 2, 4, 5], b: 0, c: 4, d: 3 },
  { a: [1, 2, 4, 5], b: 0, c: 10, d: 3 },
  { a: [1, 2, 4, 5], b: "0", c: 2, d: 3 },
  { a: [1, 2, 4, 5], b: "0", c: "2", d: "3" },
  { a: [1, 2, 4, 5], b: undefined, c: "2", d: "3" },
  { a: [1, 2, 4, 5], b: undefined, c: undefined, d: "3" },
  { a: [1, 2, 4, 5], b: undefined, c: undefined, d: undefined },
  { a: [1, 2, 4, 5], b: undefined, c: undefined, d: undefined },
];

args.forEach(({ a, b, c, d }, index) => {
  const spliced = a.splice(b, c, d);

  console.log(terminator);
  console.log(a);
});
console.log(terminator);

const val = 2;
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; ) {
    console.log(nums[i] == val);
    if (nums[i] == val) {
      nums.splice(i, 1);
      console.log(nums);
    } else {
      i++;
    }
  }

  return nums;
};

console.log(removeElement(nums, val));
const nums = [2, 3, 3, 2];
nums.splice(1);
console.log(nums);
