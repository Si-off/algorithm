// https://www.acmicpc.net/problem/3986

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().trim().split('\n');

const [n, ...list] = input;
let count = 0;

for (let i = 0; i < n; i++) {
  const stack = [];
  const row = list[i].split('');

  for (const char of row) {
    const top = stack[stack.length - 1];
    top === char ? stack.pop() : stack.push(char);
  }

  stack.length === 0 && count++;
}

console.log(count);
