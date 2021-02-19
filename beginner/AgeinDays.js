const input = require("fs").readFileSync("./input/test.txt", "utf-8");

const value = parseInt(input);

const years = value / 365;

const months = (value % 365) / 30;
const days = (value % 365) % 30;

console.log(parseInt(years) + " ano(s)");
console.log(parseInt(months) + " mes(es)");
console.log(parseInt(days) + " dia(s)");
