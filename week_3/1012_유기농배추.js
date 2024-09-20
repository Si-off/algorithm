// https://www.acmicpc.net/problem/1012

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().trim().split('\n');

const DIR = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let T = +input.shift();

while (T--) {
  const [M, N, K] = input.shift().split(' ').map(Number);
  const board = Array.from(Array(M), () => Array(N).fill(false)); // 배추밭
  const pos = []; // 배추 위치

  for (let i = 0; i < K; i++) {
    const [x, y] = input.shift().split(' ').map(Number);
    board[x][y] = true;
    pos.push([x, y]);
  }

  const visited = Array.from(Array(M), () => Array(N).fill(false));
  const queue = [];
  let count = 0; // 마리수

  for (let i = 0; i < K; i++) {
    const [cx, cy] = pos.shift(); // 배추의 위치
    if (visited[cx][cy]) continue; // 이미 방문한 위치라면 건너뜀

    // BFS 시작
    queue.unshift([cx, cy]);
    count++;

    while (queue.length) {
      const [x, y] = queue.shift();

      if (visited[x][y]) continue;
      visited[x][y] = true;

      for (let [nx, ny] of DIR) {
        nx += x;
        ny += y;
        if (nx < 0 || M <= nx || ny < 0 || N <= ny) continue;
        if (board[nx][ny] && !visited[nx][ny]) {
          queue.push([nx, ny]);
        }
      }
    }
  }
  console.log(count);
}
