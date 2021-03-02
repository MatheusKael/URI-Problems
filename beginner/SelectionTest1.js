const input = require("fs").readFileSync("./input/test.txt", "utf8");

const [a, b, c, d] = input.split(" ").map((each) => parseInt(each));

const sumCD = c + d;
const sumAB = a + b;

if (b > c && d > a && sumCD > sumAB && c > 0 && d > 0 && a % 2 === 0) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
