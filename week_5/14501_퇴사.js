// https://www.acmicpc.net/problem/14501

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().split('\n');

const N = +input.shift();
const table = [];

for (const data of input) {
  table.push(data.split(' ').map(Number));
}

const dp = Array(N + 2).fill(0);

for (let i = N; i >= 1; i--) {
  const [time, pay] = table[i - 1];

  // i번째 상담이 가능할 때
  if (i + time <= N + 1) {
    dp[i] = Math.max(dp[i + 1], dp[i + time] + pay);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(Math.max(...dp));
