const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(FILE_PATH).toString().trim();

let cycle = 0;
let num = input;

while (true) {
  cycle++;
  if (num < 10) num = '0' + num;
  const [a, b] = num.toString();

  // 각 자리 숫자의 합
  const sum = (parseInt(a) + parseInt(b)).toString();

  // 새로운 수
  num = parseInt(b + sum[sum.length - 1]);

  if (num == input) break;
}

console.log(cycle);
