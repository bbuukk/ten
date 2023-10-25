function async1() {
  console.log("async1 start");
  async2().then(function () {
    console.log("async1 end");
  });
}

function async2() {
  return new Promise(function (resolve) {
    resolve();
    console.log("async2");
  });
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

console.log("script end");
