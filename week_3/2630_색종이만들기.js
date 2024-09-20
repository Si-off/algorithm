// https://www.acmicpc.net/problem/2630

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().trim().split('\n');

const N = +input.shift();
const board = input.map((row) => row.split(' ').map(Number));
const count = { white: 0, blue: 0 };

// 한 변의 길이가 n인 정사각형
const recursion = (x, y, n) => {
  const color = board[x][y];
  const half = n / 2;

  // for (let j = y; j < y + n; j++) => for (let j = y; i < y + n; j++)
  // i, j 잘못씀...
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (board[i][j] !== color) {
        recursion(x, y, half); // 좌상단
        recursion(x + half, y, half); // 우상단
        recursion(x, y + half, half); // 좌하단
        recursion(x + half, y + half, half); // 우하단
        return;
      }
    }
  }
  color === 0 ? count.white++ : count.blue++;
};

recursion(0, 0, N);
console.log(`${count.white}\n${count.blue}`);
