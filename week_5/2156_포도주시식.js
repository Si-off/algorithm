// https://www.acmicpc.net/problem/2156

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().split('\n').map(Number);

const [n, ...wine] = input;

// i번째 잔에서 마실 수 있는 최대 포도주 양
// 6, 10, 13, 9, 8, 1
const dp = Array(n).fill(0);
dp[0] = wine[0]; // 6
dp[1] = dp[0] + wine[1]; // 16
dp[2] = Math.max(dp[1], dp[0] + wine[2], wine[1] + wine[2]); // 1,2 | 1,3 | 2,3

for (let i = 3; i < n; i++) {
  // i번째 잔을 마신 경우
  // 6 + 13 + 9 | 6 + 10 + 9
  dp[i] = Math.max(dp[i - 3] + wine[i - 1] + wine[i], dp[i - 2] + wine[i]);

  // i번째 잔을 안 마신 경우
  dp[i] = Math.max(dp[i], dp[i - 1]);
}

console.log(dp[n - 1]);
