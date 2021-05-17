const input = require("fs").readFileSync("./input/test.txt", "utf8");

const [notas, notaExame] = input.split("\n");

const notasList = notas.split(" ").map((each) => parseFloat(each));

const step1 =
  notasList[0] * 2 + notasList[1] * 3 + notasList[2] * 4 + notasList[3] * 1;

const media = step1 / (2 + 3 + 4 + 1);

console.log("Media: " + media.toFixed(1));
if (media >= 7) {
  console.log("Aluno aprovado.");
} else if (media < 5) {
  console.log("Aluno reprovado.");
} else if (media >= 5 && media < 7) {
  console.log("Aluno em exame.");
  console.log("Nota do exame: " + notaExame);

  const mediaFinal = (media + parseFloat(notaExame)) / 2;
  if (mediaFinal > 5) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log("Media final: " + mediaFinal.toFixed(1));
}
