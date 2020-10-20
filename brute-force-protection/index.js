const assert = require("assert");

const obj = {};

const bruteForceDetected = ({ sourceIP, successful }) => {
  if (!obj[sourceIP]) obj[sourceIP] = 0;
  if (successful) {
    obj[sourceIP] = 0;
  } else {
    obj[sourceIP]++;
  }
  if (obj[sourceIP] < 20) {
    return false;
  } else {
    return true;
  }
};

const safeRequest = { sourceIP: "216.58.209.67", successful: true };

assert.deepStrictEqual(bruteForceDetected(safeRequest), false);

const bruteForce = { sourceIP: "87.98.231.40", successful: false };

for (let i = 0; i < 19; i++) {
  assert.deepStrictEqual(bruteForceDetected(bruteForce), false);
}

// on the 21th request the attack should be detected
assert.deepStrictEqual(bruteForceDetected(bruteForce), true);

console.log("All test passed!");
