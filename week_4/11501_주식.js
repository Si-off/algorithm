// https://www.acmicpc.net/problem/11501

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().split('\n');

let T = +input.shift();
const answer = [];

while (T--) {
  const N = +input.shift(); // 날의 수
  const stock = input.shift().split(' ').map(Number); // 날짜 별 주가

  let profit = 0; // 최대이득
  let highest = -1;

  for (let i = N - 1; 0 <= i; i--) {
    if (stock[i] < highest) {
      profit += highest - stock[i];
    } else if (stock[i] > highest) {
      highest = stock[i];
    }
  }

  answer.push(profit);
}

console.log(answer.join('\n'));
