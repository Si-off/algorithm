const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const table = {};
for (let i = 1; i <= 30; i++) table[i] = false;

require('fs')
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split('\n')
  .forEach((elem) => (table[parseInt(elem)] = true));

Object.entries(table).forEach(([key, value]) => {
  !value && console.log(key);
});
