const proto = { z: 3 };
const obj = { __proto__: proto, a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(Object.keys(obj));

for (const key in obj) {
  console.log(key);
}
for (const key in obj2) {
  console.log(key);
}
