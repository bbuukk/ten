async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2 start");
  return new Promise((resolve) => {
    setTimeout(() => {
      // timer n
      console.log("async2 end");
      resolve();
    }, 1000);
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

setTimeout(function () {
  console.log("setTimeout"); //timer 1
}, 0);

const generator1 = generate();
async1();

const generator2 = generate2();

process.nextTick(() => {
  //tick 1
  setTimeout(() => {
    //timer 3
    console.log("some timer 1");
    generator1.next();
  }, 0);

  console.log("next tick 1");

  setTimeout(() => {
    //timer 4
    console.log("some timer 2");
    generator1.next();
  }, 0);
});

queueMicrotask(() => {
  //micro 1
  console.log("microtask 1");

  setTimeout(() => {
    // timer 5
    console.log("some timer 3");
    generator2.next();
  }, 0);
});

queueMicrotask(() => {
  //micro 2
  console.log("microtask 2");

  setImmediate(async () => {
    // check 2
    await new Promise(function (resolve) {
      console.log("promise1");
      resolve();
    }).then(function () {
      console.log("promise2");
      generator2.next();
    });

    process.nextTick(() => {
      //tick 1
      console.log("next tick in setImmediate");
      generator2.next();
    });

    setTimeout(() => {
      //timer 1
      console.log("setTimeout in setImmediate");
      generator1.next();
    }, 0);

    queueMicrotask(() => {
      //micro 1
      console.log("microtask in setImmediate");
      generator1.next();
    });

    process.nextTick(() => {
      //tick 2
      console.log("next tick in setImmediate after microtask");
      generator1.next();
    });

    setTimeout(() => {
      //timer 2
      console.log("setTimeout in setImmediate after microtask");
      generator1.next();
    }, 0);

    queueMicrotask(() => {
      //micro 2
      console.log("microtask in setImmediate after setTimeout");
      generator1.next();
    });

    process.nextTick(() => {
      //tick 3
      console.log("next tick in setImmediate after setTimeout");
      generator1.next();
    });

    setTimeout(() => {
      //timer 3
      console.log("setTimeout in setImmediate after nextTick");
      generator1.next();
    }, 0);

    queueMicrotask(() => {
      //micor 3
      console.log("microtask in setImmediate after nextTick and setTimeout");
      generator1.next();
    });

    process.nextTick(() => {
      //tick 4
      console.log(
        "next tick in setImmediate after nextTick and setTimeout and microtask"
      );
      generator1.next();
    });
  });
});

generator2.next();

setImmediate(() => {
  // check 1
  process.nextTick(() => {
    generator2.next();
  });
});

console.log("script end");
