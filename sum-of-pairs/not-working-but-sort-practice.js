const assert = require("assert");

const sum_pairs = (ints, s) => {
  const result = [];
  for (const i1 of ints) {
    const a = [...ints];
    a.splice(ints.indexOf(i1), 1);
    let check = false;
    for (let i2c = 0; i2c < ints.length; i2c++) {
      const i2 = ints[i2c];
      if (i2 === i1 && !check) {
        check = true;
        continue;
      }
      if (i1 + i2 === s) {
        result.push([i2c, [i1, i2]]);
      }
    }
  }
  if (!result.length) return undefined;
  result.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] === b[0]) return 0;
  });
  return result[0][1];
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
assert.deepStrictEqual(sum_pairs(l7, 0), [1, 7]);
assert.deepStrictEqual(sum_pairs(l8, 10), [1, 7]);
