// https://www.acmicpc.net/problem/11727

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = +require('fs').readFileSync(FILE_PATH).toString();

// 2 x i 크기의 직사각형을 채우는 방법의 수
const dp = Array(N + 2);

dp[1] = 1;
dp[2] = 3;

const solution = () => {
  if (N < 3) return;

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }
};

solution();
console.log(dp[N]);
