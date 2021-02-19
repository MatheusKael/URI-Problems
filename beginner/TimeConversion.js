let input = require("fs").readFileSync("./input/test.txt", "utf8");

let seconds = parseInt(input % 60);
let minutesinhours = input / 60;
let minutes = minutesinhours % 60;
let hours = input / 3600;

console.log(
  parseInt(hours) + ":" + parseInt(minutes) + ":" + parseInt(seconds)
);
