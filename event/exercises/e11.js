const fs = require("fs");

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
  setImmediate(() => console.log("this is setImmediate 1"));
  process.nextTick(() =>
    console.log("this is inner process.nextTick inside readFile")
  );
  Promise.resolve().then(() =>
    console.log("this is inner Promise.resolve inside readFile")
  );
});
