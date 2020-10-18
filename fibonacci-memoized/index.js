const assert = require("assert");

const fibonacci = n => {
  if (n < 1) return 0;
  const arr = [];
  for (let c = 0; c < n; c++) {
    if (c < 2) {
      arr.push(1);
      continue;
    }
    arr.push(arr[c - 2] + arr[c - 1]);
  }
  return arr[arr.length - 1];
};

assert.deepStrictEqual(fibonacci(70), 190392490709135);
assert.deepStrictEqual(fibonacci(60), 1548008755920);
assert.deepStrictEqual(fibonacci(50), 12586269025);
