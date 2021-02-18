let input = require("fs").readFileSync("./input/test.txt", "utf8");

let valor = parseInt(input);

let lista = [100, 50, 20, 10, 5, 2, 1];
console.log(valor);
for (const nota of lista) {
  let qtdNotas = parseInt(valor / nota);
  console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
  valor = valor % nota;
}
