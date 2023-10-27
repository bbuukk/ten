const proto = { z: 3 };
const obj = { __proto__: proto, a: 1, b: 2 };

console.log(Object.keys(obj));
