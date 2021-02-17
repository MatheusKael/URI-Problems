const input = require("fs").readFileSync("./input/test.txt", "utf8");

const [spentTime, averageSpeed] = input.split("\n");

const distance = spentTime * averageSpeed;

const liters = distance / 12;

console.log(liters.toFixed(3));
