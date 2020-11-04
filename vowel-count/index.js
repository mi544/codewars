const assert = require("assert");

const getCount = s =>
  s
    .toLowerCase()
    .split("")
    .filter(i => ["a", "e", "i", "o", "u"].includes(i)).length;

assert.strictEqual(getCount("hello"), 2);
assert.strictEqual(getCount("HOW ARE YOU DOING?"), 7);

console.log("All tests passed");
