const assert = require("assert");

const validParentheses = parens => {
  let open = 0;
  let close = 0;
  let c = 0;
  const obj = {};
  while (c <= parens.length) {
    if (parens[c] === "(") obj[c] = false;
    if (parens[c] === ")") {
      const objValues = Object.values(obj);
      // empty object => no opening parents found
      if (!objValues.length) return false;

      let falseValues = 0;
      for (value of objValues) {
        // trying to close nonexisting parents (all are already closed)
        if (!value) falseValues++;
      }
      if (!falseValues) return false;

      const objKeys = Object.keys(obj)
        .sort((a, b) => a - b)
        .reverse();

      for (key of objKeys) {
        if (!obj[key]) {
          obj[key] = true;
          break;
        }
      }
    }
    c++;
  }
  const objValues = Object.values(obj);
  for (value of objValues) {
    // some parents are not closed after the script is finished
    if (!value) return false;
  }
  return true;
};

console.log(validParentheses("))"));
console.log(validParentheses("((()))"));
console.log(validParentheses("((()()))"));
console.log(validParentheses("((((())))"));
console.log(validParentheses("())"));

assert.deepStrictEqual(validParentheses("))"), false);
assert.deepStrictEqual(validParentheses("((()))"), true);
assert.deepStrictEqual(validParentheses("((()()))"), true);
assert.deepStrictEqual(validParentheses("((((())))"), false);
assert.deepStrictEqual(validParentheses("())"), false);
