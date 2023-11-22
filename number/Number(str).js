import { greenANSI, redANSI, terminator, yellowANSI } from "../variables.mjs";

const args = [
  { a: NaN, i: 0 }, // nan
  { a: Infinity, i: 0 }, // infinity
  { a: -Infinity, i: 0 }, // -infinity
  { a: undefined, i: 0 }, // ! gives NaN
  { a: null, i: 1 }, //! gives zero
  { a: "", i: 1 }, //! gives zero wft?
  { a: "   \n\t", i: 1 }, // 0 // toNumber coercion trimming leading and trailing whitespaces
  { a: [""], i: 1 }, // 0
  { a: [null], i: 1 }, // 0
  { a: [undefined], i: 1 }, //it is absoulutely bonkers
  { a: [undefined, undefined], i: 1 },
  { a: [[[[[]]]]], i: 1 },
  { a: Number.MAX_VALUE, i: 0 },
  { a: Number.MAX_VALUE + Number.MAX_VALUE, i: 0 },
  { a: "1234", i: 0 },
  { a: "1234.1234", i: 0 },
  { a: 5.0000000000000001, i: 1 },
  { a: 0.00000000000000000000000000000000000001, i: 1 }, //! it does not round to 0
  { a: 1.00000000000000000000000000000000000001, i: 1 }, //!imp BUT rounds to 1
  { a: 1.00000000000001, i: 1 },
  { a: 1.8, i: 1 },
  { a: {}, i: 0 },
  { a: "  23434        ", i: 0 },
  { a: "  23  434        ", i: 1 },
  { a: "  23,434        ", i: 1 },
  { a: "  23.434        ", i: 0 },
  { a: "Hello", i: 0 },
  { a: "2Hello2", i: 0 },
  { a: "0000000001", i: 1 },
];

args.forEach(({ a: arg, i: isImportant }, index) => {
  const number = Number(arg);

  console.log(terminator);
  console.log(isImportant ? `${redANSI}` : "", `${index}. → ARG: ${arg}`);
  console.log(number);
});
console.log(terminator);
