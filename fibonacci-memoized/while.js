const assert = require("assert");

const fibonacci = n => {
  if (n < 1) return 0;
  const arr = [];
  let c = 0;
  while (c < n) {
    if (c < 2) {
      arr.push(1);
      c++;
      continue;
    }
    arr.push(arr[c - 2] + arr[c - 1]);
    c++;
  }
  return arr[arr.length - 1];
};

assert.deepStrictEqual(fibonacci(70), 190392490709135);
assert.deepStrictEqual(fibonacci(60), 1548008755920);
assert.deepStrictEqual(fibonacci(50), 12586269025);
