'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(p.textContent);
// document.querySelector('.message').textContent = 'Correct Number...';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 15;
// document.querySelector('.guess').value = 10;

const luckyNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = luckyNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No Number ...';
  } else if (guessNumber === luckyNumber) {
    document.querySelector('.message').textContent = 'Correct Number ...';
  } else if (guessNumber > luckyNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High Number ...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose The Game ...';
    }
  } else if (guessNumber < luckyNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low Number ...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose The Game ...';
    }
  } else {
    document.querySelector('.message').textContent = 'Incorrect Number ...';
  }
});
