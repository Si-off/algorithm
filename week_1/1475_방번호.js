const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs')
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split('')
  .map((elem) => {
    if (elem === '6') return 9;
    return Number(elem);
  });

const list = input.sort((a, b) => a - b);

let mode = -1; // 최빈값
let maxCount = -1; // 필요한 세트 개수
let count = 0;

for (let i = 0; i < list.length; i++) {
  count++;

  if (maxCount < count) {
    maxCount = count;
    mode = Math.max(mode, list[i]);
  }

  if (list[i] !== list[i + 1]) {
    count = 0;
  }
}

if (mode === 9) {
  maxCount = Math.round(maxCount / 2);
}

console.log(maxCount);
