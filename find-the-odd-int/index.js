const assert = require("assert");

const findOdd = a => {
  const b = new Map();
  for (const i of a) {
    if (b.has(i)) {
      b.set(i, b.get(i) + 1);
      continue;
    }
    b.set(i, 1);
  }
  for (const i of b.entries()) {
    if (i[1] % 2) return i[0];
  }
  return a;
};

assert.strictEqual(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
assert.strictEqual(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
assert.strictEqual(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
assert.strictEqual(findOdd([10]), 10);
assert.strictEqual(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
assert.strictEqual(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);

console.log("All tests passed!");
