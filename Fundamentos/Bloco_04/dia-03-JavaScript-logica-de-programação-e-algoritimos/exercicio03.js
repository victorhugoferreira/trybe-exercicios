
let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

console.log(biggestWord);
