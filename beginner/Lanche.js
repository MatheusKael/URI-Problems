const input = require("fs").readFileSync("./input/test.txt", "utf8");

const [codigo, quantidade] = input.split(" ").map((each) => parseFloat(each));

const itens = [4.0, 4.5, 5.0, 2.0, 1.0];

itens.map((item, index) => {
  if (index + 1 === codigo) {
    const result = item * quantidade;
    console.log(`Total: R$ ${result.toFixed(2)}`);
  }
});
