// https://www.acmicpc.net/problem/1620

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(FILE_PATH)
  .toString()
  .split('\n')
  .map((elem) => elem.trim());

// 포켓몬의 갯수 N, 맞춰야하는 문제의 갯수 M
const [N, M] = input[0].split(' ').map(Number);
const answer = [];
const dogam = new Map();

for (let i = 1; i <= N; i++) {
  dogam.set(i.toString(), input[i]);
  dogam.set(input[i], i.toString());
}

for (let i = N + 1; i <= N + M; i++) {
  answer.push(dogam.get(input[i]));
}

console.log(answer.join('\n'));
