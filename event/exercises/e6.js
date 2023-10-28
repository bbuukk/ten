async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2 start");
  return new Promise((resolve) => {
    setTimeout(() => {
      //timer 2
      console.log("async2 end");
      resolve();
    }, 1000);
  });
}

function* generate() {
  console.log("generate-1");
  yield;
  console.log("generate-1.2");
  yield;
  console.log("generate-1.3");
}

function* generate2() {
  console.log("generate-2");
  yield;
  console.log("generate-2.2");
  yield;
  console.log("generate-2.3");
}

console.log("script start");

setTimeout(function () {
  //timer 1
  console.log("setTimeout");
}, 0);

const generator1 = generate();
async1();

const generator2 = generate2();

process.nextTick(() => {
  //tick 1
  setTimeout(() => {
    console.log("some timer 1");
    generator1.next();
    generator2.next();
  }, 0);

  console.log("next tick 1");

  setTimeout(() => {
    console.log("some timer 2");
    generator1.next();
    generator2.next();
  }, 0);
});

queueMicrotask(() => {
  console.log("microtask 1");

  setTimeout(() => {
    console.log("some timer 3");
    generator1.next();
    generator2.next();
  }, 0);
});

queueMicrotask(() => {
  console.log("microtask 2");

  setImmediate(async () => {
    await new Promise(function (resolve) {
      console.log("promise1");
      resolve();
    }).then(function () {
      console.log("promise2");
      generator1.next();
      generator2.next();
    });

    process.nextTick(() => {
      console.log("next tick in setImmediate");
      generator1.next();
      generator2.next();
    });

    setTimeout(() => {
      console.log("setTimeout in setImmediate");
      generator1.next();
      generator2.next();
    }, 0);

    queueMicrotask(() => {
      console.log("microtask in setImmediate");
      generator1.next();
      generator2.next();
    });
  });
});

generator1.next();
generator2.next();

setImmediate(() => {
  process.nextTick(() => {
    generator1.next();
    generator2.next();
  });
});

console.log("script end");
