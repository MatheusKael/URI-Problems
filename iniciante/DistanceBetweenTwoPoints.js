const input = require("fs").readFileSync("./input/teste.txt", "utf8");

const [x, y] = input.split("\n").map((cada) => {
  parseFloat(cada);
  const transformado = cada.split(" ");
  return transformado;
});

const [x1, y1, x2, y2] = x.concat(y);

const conta = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(conta.toFixed(4));
