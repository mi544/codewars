const assert = require("assert");

const spinWords = str =>
  str
    .split(" ")
    .map(i => (i.length >= 5 ? i.split("").reverse().join("") : i))
    .join(" ");

assert.strictEqual(spinWords("Welcome"), "emocleW");
assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
assert.strictEqual(spinWords("This is a test"), "This is a test");
assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
assert.strictEqual(
  spinWords("You are almost to the last test"),
  "You are tsomla to the last test"
);
assert.strictEqual(
  spinWords("Just kidding there is still one more"),
  "Just gniddik ereht is llits one more"
);
assert.strictEqual(
  spinWords("Seriously this is the last one"),
  "ylsuoireS this is the last one"
);

console.log("All tests passed!");
