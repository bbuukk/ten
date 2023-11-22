async function async1() {
  console.log("async1 start");
  async2().then(() => {
    generator1.next();
  });
}

function async2() {
  return new Promise((resolve) => {
    resolve();
    console.log("async2");
  });
}

function* generate() {
  console.log("generate-1");
  yield;
  console.log("generate-1.2");
}

function* generate2() {
  console.log("generate-2");
  yield;
  console.log("generate-2.2");
}

console.log("script start");

const generator1 = generate();
const generator2 = generate2();

//check 1
setImmediate(() => {
  console.log("microtask 1");

  //micro 1
  new Promise(function (resolve) {
    console.log("promise1");

    //check 3
    setImmediate(() => {
      resolve();
    });
  }).then(function () {
    console.log("promise2");
  });
});

queueMicrotask(() => {
  console.log("microtask 2");

  setTimeout(() => {
    console.log("some timer 3");
  }, 0);
});

(() => {
  process.nextTick(() => {
    async1();
  });
})();

//check 2
setImmediate(() => {
  generator1.next();

  //tick 1
  process.nextTick(() => {
    generator2.next();
  });

  generator2.next();
});

console.log("script end");
