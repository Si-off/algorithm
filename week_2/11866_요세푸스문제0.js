// https://www.acmicpc.net/problem/11866

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().trim().split(' ').map(Number);

const [n, k] = input;

const queue = Array.from(Array(n), (_, i) => i + 1);

const answer = [];

let cursor = 0;
while (queue.length) {
  cursor = (cursor + k - 1) % queue.length;
  answer.push(queue[cursor]);
  queue.splice(cursor, 1);
}

console.log(`<${answer.join(', ')}>`);
