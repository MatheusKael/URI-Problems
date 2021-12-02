const input = require("fs").readFileSync("./input/test.txt", "utf-8");

const [a, b] = input.split(" ").map((item) => parseFloat(item));

function Multiple(a, b) {
  if (b % a === 0 || a % b === 0) return "Sao Multiplos";
  return "Nao sao Multiplos";
}

console.log(Multiple(a, b));
