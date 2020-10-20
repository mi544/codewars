const assert = require("assert");

const sum_pairs = (ints, s) => {
  console.log(ints);
  const comparedMemoize = [];
  for (let i1 = 2; i1 < ints.length + 2; i1++) {
    for (let i2 = 0; i2 < ints.length; i2++) {
      if (i2 === i1) break;
      const firstNum = ints[0];
      const lastNum = ints[i1];
      const currentNum = ints[i2];
      for (let i3 = 0; i3 < ints.length; i3++) {
        if (i3 === i1) break;
        if (i3 === i2) continue;
        const currentSecondNum = ints[i3];
        if (
          comparedMemoize.includes(
            [currentNum, currentSecondNum] || [currentSecondNum, currentNum]
          )
        )
          continue;
        comparedMemoize.push([currentNum, currentSecondNum]);
        if (currentNum + currentSecondNum === s) {
          return [currentNum, currentSecondNum];
        }
      }
    }
  }
};

console.log("Solved:", sum_pairs([1, 4, 8, 7, 3, 15], 8));

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
