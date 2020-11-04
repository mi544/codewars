const assert = require("assert");

const highAndLow = n => {
  const r = n.split(" ").sort((a, b) => a - b);
  return `${r[r.length - 1]} ${r[0]}`;
};

assert.strictEqual(highAndLow("1 2 3 4 5 6 7"), "7 1");
assert.strictEqual(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

console.log("All tests passed!");
