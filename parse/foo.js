// const lowerBound = "0".codePointAt(0);
// const upperBound = "9".codePointAt(0);
// const whitespace = " ".charCodeAt(0);

// const num = " 1234";
// let result = 0;
// let itr = 0;

// for (let i = num.length; --i; ) {
//   const decimal = 10;
//   const ch = num[i];
//   const codePoint = ch.charCodeAt(0);

//   if (codePoint >= lowerBound && codePoint <= upperBound) {
//     let value = codePoint - lowerBound;
//     value *= decimal ** itr;
//     ++itr;
//     result += value;
//   }
// }

// console.log(result);

// const result = { kate: 400 };
const result = {};
console.log(result["kate"]);
result["kate"] = result["kate"];

console.log(result);

const emoji = null;
console.log(emoji + ":");
