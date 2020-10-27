const assert = require("assert");

function Calculator() {
  const map = {
    "*": function (num1, num2) {
      return num1 * num2;
    },
    "/": function (num1, num2) {
      return num1 / num2;
    },
    "+": function (num1, num2) {
      return num1 + num2;
    },
    "-": function (num1, num2) {
      return num1 - num2;
    }
  };

  this.evaluate = function (string) {
    const numArr = string.split(" ").filter(s => s !== " ");
    let pos = 0;
    let secondary = false;
    while (numArr.length > 1) {
      if (!secondary) {
        if (["*", "/"].includes(numArr[pos])) {
          const result = map[numArr[pos]](
            Number(numArr[pos - 1]),
            Number(numArr[pos + 1])
          );
          numArr.splice(pos - 1, 3, result);
        } else {
          if (pos + 1 > numArr.length) {
            pos = 0;
            secondary = true;
          } else {
            pos++;
          }
        }
      } else {
        if (["+", "-"].includes(numArr[pos])) {
          const result = map[numArr[pos]](
            Number(numArr[pos - 1]),
            Number(numArr[pos + 1])
          );
          numArr.splice(pos - 1, 3, result);
          pos = 0;
        } else {
          pos++;
        }
      }
    }
    return Number(numArr[0]);
  };
}

const calculate = new Calculator();
assert.strictEqual(calculate.evaluate("127"), 127);
assert.strictEqual(calculate.evaluate("2 + 3"), 5);
assert.strictEqual(calculate.evaluate("2 - 3 - 4"), -5);
assert.strictEqual(calculate.evaluate("10 * 5 / 2"), 25);
assert.strictEqual(calculate.evaluate("2 / 2 + 3 * 4 - 6"), 7);

console.log("All tests passed!");
