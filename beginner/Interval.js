const input = require("fs").readFileSync("./input/test.txt", "utf8");

// I did the hard way on purpose

const value = parseFloat(input);
const list = [0, 25, 50, 75, 100];
let lastElement = list[list.length - 1];
if (input < 0 || input > lastElement) {
  console.log("Fora de intervalo\n");
  return;
}

const result = list.map((each, index, list) => {
  let parsed = parseFloat(each);
  if (parsed < value || value === 0) {
    let nextValue = list[index + 1];
    if (value <= nextValue) {
      if (value <= 25 && value >= 0) {
        return `[${parsed},${nextValue}]`;
      } else {
        return `(${parsed},${nextValue}]`;
      }
    }
  }
});

const [found] = result.filter((each) => each);

console.log(`Intervalo ${found}\n`);
