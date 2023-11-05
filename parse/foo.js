const result = {};
const names = ["kate", "karen", "milana"];

result[names[0]] ??= 0;
result[names[0]] += 2;

console.log(result);
