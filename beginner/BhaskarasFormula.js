const input = require("fs").readFileSync("./input/test.txt", "utf8");

const list = input.split(" ").map((each) => parseFloat(each));
const [a, b, c] = list;
const delta = Math.sqrt(Math.pow(b, 2) - 4 * a * c, 2);

if (isNaN(delta)) {
  console.log("Impossivel calcular");
} else if (a === 0) {
  console.log("Impossivel calcular");
} else {
  const bhaskara1 = -b + delta;
  const root1 = bhaskara1 / (2 * a);

  const bhaskara2 = -b - delta;
  const root2 = bhaskara2 / (2 * a);
  console.log(`R1 = ${root1.toFixed(5)}`);
  console.log(`R2 = ${root2.toFixed(5)}`);
}
