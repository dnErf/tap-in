// const readline = require('readline'); native prompt is hard to use

const prompts = require('prompts');
 
(async () => {
  console.log('Guess the number!');
  let secret_number = Math.floor(Math.random() * 101);
  console.log('The secret number is ' + secret_number);
  loop:
  while (true) {
    let { guess } = await prompts({
      type: 'number',
      name: 'guess',
      message: 'Please input your guess'
    });
    switch (true) {
      case (guess < secret_number) : console.log('too small!'); break;
      case (guess > secret_number) : console.log('too big!'); break;
      case (guess === secret_number) :
      default:
        console.log('nice, you win!');
        break loop;
    }
  }
})();
