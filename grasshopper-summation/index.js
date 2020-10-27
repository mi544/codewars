const assert = require("assert");

const summation = num => {
  const arr = [];
  let c = 0;
  while (true) {
    const result = arr.reduce((acc, val) => acc + val, 0);
    if (c === num) return result;
    c++;
    arr.push(c);
  }
};

assert.strictEqual(summation(1), 1);
assert.strictEqual(summation(8), 36);

console.log("All tests passed!");
