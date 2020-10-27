const assert = require("assert");

const unluckyDays = year => {
  let unluckyDaysTotal = 0;
  for (let i = 0; i < 12; i++) {
    const date = new Date(year, i, 13);
    if (date.getDay() === 5) unluckyDaysTotal++;
  }
  return unluckyDaysTotal;
};

assert.strictEqual(unluckyDays(1586), 1);
assert.strictEqual(unluckyDays(1001), 3);
assert.strictEqual(unluckyDays(2819), 2);
assert.strictEqual(unluckyDays(2792), 2);
assert.strictEqual(unluckyDays(2723), 2);
assert.strictEqual(unluckyDays(1909), 1);
assert.strictEqual(unluckyDays(1812), 2);
assert.strictEqual(unluckyDays(1618), 2);
assert.strictEqual(unluckyDays(2132), 1);
assert.strictEqual(unluckyDays(2065), 3);

console.log("All tests passed");
