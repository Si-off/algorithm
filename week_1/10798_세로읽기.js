const FILE_PATH =
  process.platform === 'linux' ? '/dev/stdin' : require('path').resolve(__dirname, '../input.txt');

const input = require('fs').readFileSync(FILE_PATH).toString().split('\n');

let res = '';

for (let j = 0; j < 15; j++) {
  for (let i = 0; i < 5; i++) {
    res += input[i].charAt(j);
  }
}

console.log(res);
