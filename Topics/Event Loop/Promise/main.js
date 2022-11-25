setTimeout(() => console.log("timeout"));

Promise.resolve()
  .then(() => console.log("promise"));

Promise.resolve()
    .then(() => console.log("microtask"));

console.log("code");