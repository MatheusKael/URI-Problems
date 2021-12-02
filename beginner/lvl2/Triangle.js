const input = require("fs").readFileSync("./input/test.txt", "utf-8");

const [a, b, c] = input.split(" ").map((item) => parseFloat(item));

function IsTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return `Perimetro = ${(a + b + c).toFixed(1)}`;
  }
  return `Area = ${(((a + b) * c) / 2).toFixed(1)}`;
}
const isTriangle = IsTriangle(a, b, c);

console.log(isTriangle);
