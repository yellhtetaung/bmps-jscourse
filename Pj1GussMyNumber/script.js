'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(p.textContent);
// document.querySelector('.message').textContent = 'Correct Number...';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 15;
// document.querySelector('.guess').value = 10;

let luckyNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    displayMessage('No Number ...');
  } else if (guessNumber === luckyNumber) {
    displayMessage('Correct Number ...');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = luckyNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== luckyNumber) {
    if (score > 0) {
      displayMessage(
        guessNumber > luckyNumber ? 'Too High Number ...' : 'Too Low Number ...'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose The Game ...';
    }
  } else {
    document.querySelector('.message').textContent = 'Incorrect Number ...';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  displayMessage('Start guessing...');
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  luckyNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
});
