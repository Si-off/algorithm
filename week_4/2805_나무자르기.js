// https://www.acmicpc.net/problem/2805

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().split('\n');

// 나무의 수 N, 나무의 길이 M
const [N, M] = input.shift().split(' ').map(Number);
const logs = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(logs);

let st = 0;
let en = 0;

let mid = Math.ceil((st + en) / 2);
