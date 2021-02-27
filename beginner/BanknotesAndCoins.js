const input = require("fs").readFileSync("./input/test.txt", "utf8");

let valor = parseFloat(input);

let notesList = [100, 50, 20, 10, 5, 2];

let coinsList = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
for (let nota of notesList) {
  parseInt(nota);
  let qtdNotas = parseInt(valor / nota);
  console.log(`${qtdNotas} nota(s) de R$ ${nota}.00`);
  valor = valor % nota;
}

console.log("MOEDAS:");
for (let coin of coinsList) {
  parseInt(coin);
  let qtdMoedas = parseInt(valor.toFixed(2) / coin);
  console.log(`${qtdMoedas} moeda(s) de R$ ${coin.toFixed(2)}`);
  valor = valor % coin;
}
