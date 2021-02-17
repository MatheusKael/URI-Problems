const distance = require("fs").readFileSync("./input/test.txt", "utf8");

const time = distance * 2;

console.log(time + " minutos");
