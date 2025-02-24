'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFIlePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
async function main() {
  for (let count = 0; count < 30; count++) {
    await appendFIlePromise(fileName, 'おはようございます\n');
    await appendFIlePromise(fileName, 'こんにちは\n');
    await appendFIlePromise(fileName, 'こんばんは\n');
  }
}

main();