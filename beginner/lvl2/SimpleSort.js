const input = require("fs").readFileSync("../input/test.txt", "utf-8");

const list = input.split(" ").map((item) => Number(item));
const notSorted = [...list];

function Sort(list) {
  let aux = 0;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[i] < list[j]) {
        aux = list[i];
        list[i] = list[j];
        list[j] = aux;
      }
    }
  }
  return list;
}

Sort(list);

console.log(list[0] + "\n" + list[1] + "\n" + list[2] + "\n");
console.log(notSorted[0] + "\n" + notSorted[1] + "\n" + notSorted[2]);
