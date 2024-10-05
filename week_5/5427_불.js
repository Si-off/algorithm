// https://www.acmicpc.net/problem/5427

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().split('\n');

const DIR = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const T = +input.shift();
const answer = [];

for (let t = 0; t < T; t++) {
  const [w, h] = input.shift().split(' ').map(Number);
  const building = Array.from(Array(w), () => Array(h));
  const dist = Array.from(Array(w), () => Array(h));

  const queue = [];
  let time = 0;

  for (let i = 0; i < h; i++) {
    const line = input.shift().trim().split('');
    building[i] = line;
  }

  console.log(building);

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (building[i][j] === '@') {
        startX = j;
        startY = i;
        queue.push([j, i]);
        break;
      }
    }
  }

  // BFS
  while (queue.length) {
    const [x, y] = queue.shift();
    time++;

    for (let [nx, ny] of DIR) {
      nx += x;
      ny += y;

      if (nx < 0 || w <= nx || ny < 0 || h <= ny) answer.push(time);
      if (building[nx][ny] === '#' || building[nx][ny] === '*' || building[nx][ny] === '-1')
        continue;

      queue.push([nx, ny]);
    }
  }

  answer.push('IMPOSSIBLE');
}

console.log(answer.join('\n'));
