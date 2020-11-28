const assert = require("assert");

Array.prototype.square = function () {
  return this.map(x => x ** 2);
};
Array.prototype.cube = function () {
  return this.map(x => x ** 3);
};
Array.prototype.average = function () {
  return this.reduce((acc, val) => acc + val, 0) / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0);
};
Array.prototype.even = function () {
  return this.filter(x => !(x % 2));
};
Array.prototype.odd = function () {
  return this.filter(x => x % 2);
};

var numbers = [1, 2, 3, 4, 5];
assert.deepStrictEqual(numbers.square(), [1, 4, 9, 16, 25]);
assert.deepStrictEqual(numbers.cube(), [1, 8, 27, 64, 125]);
assert.strictEqual(numbers.sum(), 15);
assert.strictEqual(numbers.average(), 3);
assert.deepStrictEqual(numbers.even(), [2, 4]);
assert.deepStrictEqual(numbers.odd(), [1, 3, 5]);

console.log("All tests passed!");
