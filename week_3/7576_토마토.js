// https://www.acmicpc.net/problem/7576

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const board = input.map((row) => row.split(' ').map(Number));
const dist = Array.from(Array(N), () => Array(M).fill(0));
let day = 0;

const DIR = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const queue = [];

// 익은 토마토를 전부 큐에
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1) {
      queue.push([i, j]);
    }
    if (board[i][j] === 0 || board[i][j] === -1) dist[i][j] = -1;
  }
}

// BFS
while (queue.length) {
  // 익은 토마토 위치
  const [x, y] = queue.shift();

  for (let [nx, ny] of DIR) {
    nx += x;
    ny += y;
    if (nx < 0 || N <= nx || ny < 0 || M <= ny) continue; // out of range
    if (board[nx][ny] === -1 || 0 <= dist[nx][ny]) continue; // 익은 토마토, 빈 공간 무시
    queue.push([nx, ny]);
    dist[nx][ny] = dist[x][y] + 1;
  }
}

let isPossible = true;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (dist[i][j] === -1) isPossible = false;
    day = Math.max(day, dist[i][j]);
  }
}

isPossible ? console.log(day) : console.log(-1);
