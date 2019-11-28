const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Guess the number!');
rl.question('Please input your guess ', (guess) => {
  console.log('You guessed: ', guess);
  rl.close();
});
