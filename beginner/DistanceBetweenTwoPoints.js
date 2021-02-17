const input = require("fs").readFileSync("./input/test.txt", "utf8");

const [x, y] = input.split("\n").map((each) => {
  parseFloat(each);
  const parsed = each.split(" ");
  return parsed;
});

const [x1, y1, x2, y2] = x.concat(y);

const result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(result.toFixed(4));
