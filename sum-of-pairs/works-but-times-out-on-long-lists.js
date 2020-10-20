const assert = require("assert");

const sum_pairs = (ints, s) => {
  console.log(ints);
  const result = [];
  const testArr = [];
  for (i of ints) {
    if (testArr.length < 1) {
      testArr.push(i);
      continue;
    }
    testArr.push(i);

    for (const i2 of testArr) {
      const a = [...testArr];
      a.splice(a.indexOf(i2), 1);
      for (const i3 of a) {
        if (i2 + i3 === s) {
          return [i2, i3];
        }
      }
    }
  }
};

console.log("\n\n\n\n", sum_pairs([1, 4, 8, 7, 3, 15], 8));

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];

assert.deepStrictEqual(sum_pairs(l1, 8), [1, 7]);
assert.deepStrictEqual(sum_pairs(l2, -6), [0, -6]);
assert.deepStrictEqual(sum_pairs(l3, -7), undefined);
assert.deepStrictEqual(sum_pairs(l4, 2), [1, 1]);
assert.deepStrictEqual(sum_pairs(l5, 10), [3, 7]);
assert.deepStrictEqual(sum_pairs(l6, 8), [4, 4]);
assert.deepStrictEqual(sum_pairs(l7, 0), [0, 0]);
assert.deepStrictEqual(sum_pairs(l8, 10), [13, -3]);
