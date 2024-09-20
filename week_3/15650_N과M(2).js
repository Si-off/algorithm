// https://www.acmicpc.net/problem/15650

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().trim().split(' ').map(Number);

const [N, M] = input;

const sequence = Array(N + 2); // 현재 수열
const isUsed = Array(N + 2).fill(false); // 사용된 1~N 까지의 자연수 상태
const answer = [];

// k 번째 숫자
const solve = (k = 0, start = 1) => {
  if (k === M) {
    answer.push(sequence.join(' ').trim());
    return;
  }

  for (let i = start; i <= N; i++) {
    if (isUsed[i]) continue;
    sequence[k] = i;
    isUsed[i] = true;
    solve(k + 1, i + 1);
    isUsed[i] = false;
  }
};

solve();

answer.forEach((elem) => console.log(elem));
