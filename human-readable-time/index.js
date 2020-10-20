const assert = require("assert");

const humanReadable = providedSeconds => {
  if (providedSeconds > 359999) return false;
  let hr = 0; // max 99
  let min = 0; // max 59
  let sec = 0; // max 59
  for (let i = 0; i < providedSeconds; i++) {
    if (sec === 59) {
      sec = 0;
      if (min === 59) {
        min = 0;
        hr++;
      } else {
        min++;
      }
    } else {
      sec++;
    }
  }
  return `${hr.toString().length < 2 ? "0" + hr : hr}:${
    min.toString().length < 2 ? "0" + min : min
  }:${sec.toString().length < 2 ? "0" + sec : sec}`;
};

console.log(humanReadable(0), "00:00:00");
console.log(humanReadable(5), "00:00:05");
console.log(humanReadable(60), "00:01:00");
console.log(humanReadable(86399), "23:59:59");
console.log(humanReadable(359999), "99:59:59");

assert.deepStrictEqual(humanReadable(0), "00:00:00");
assert.deepStrictEqual(humanReadable(5), "00:00:05");
assert.deepStrictEqual(humanReadable(60), "00:01:00");
assert.deepStrictEqual(humanReadable(86399), "23:59:59");
assert.deepStrictEqual(humanReadable(359999), "99:59:59");

console.log("All tests passed!");
