const sum = require("./sum");

test(" sum of args 2 + 3 ", () => {
  expect(sum(2, 3)).toBe(5);
});
