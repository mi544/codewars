const assert = require("assert");

const getMiddle = s =>
  s.length % 2 ? s[Math.ceil(s.length / 2) - 1] : s[s.length / 2 - 1] + s[s.length / 2];

assert.strictEqual(getMiddle("test"), "es");
assert.strictEqual(getMiddle("testing"), "t");
assert.strictEqual(getMiddle("middle"), "dd");
assert.strictEqual(getMiddle("A"), "A");

console.log("All tests passed!");
