//input에 대한 함수 예시
const solution = (data) => {
  console.log(data);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];
rl.on("line", function (line) {
  data.push(line);
  rl.close();
}).on("close", function () {
  solution(data);
  process.exit();
});
