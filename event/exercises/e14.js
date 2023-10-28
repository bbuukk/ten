await new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
  generator2.next();
});

async function async1() {
  console.log("async1 start");
  async2().then(() => {
    console.log("async1 end");
  });
}

function async2() {
  return new Promise((resolve) => {
    resolve();
    console.log("async2");
  });
}
