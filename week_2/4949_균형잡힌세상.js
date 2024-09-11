// https://www.acmicpc.net/problem/4949

const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(FILE_PATH).toString().trim().split('\n');

//prettier-ignore
const regex = new RegExp('[\(\)\[\]]');

for (let line = 0; line < input.length - 1; line++) {
  const stack = [];
  let isBalanced = true;

  for (let i = 0; i < input[line].length; i++) {
    if (!isBalanced) break;
    const char = input[line][i];

    switch (char) {
      case ')':
        isBalanced = stack.pop() === '(';
        break;

      case ']':
        isBalanced = stack.pop() === '[';
        break;

      default:
        regex.test(`[${char}]`) && stack.push(char);
        break;
    }
  }
  isBalanced && !stack.length ? console.log('yes') : console.log('no');
}
