Promise.resolve().then(() => console.log("promise 1"));

new Promise((resolve) => {
  console.log("promise 2");
  resolve();
});

queueMicrotask(() => {
  console.log("microtask");
});
