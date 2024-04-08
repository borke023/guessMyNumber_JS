'use strict';

function getRandomNumber(max) {
  return Math.trunc(Math.random() * 20) + 1;
}

function checkHighScore(currentScore) {
  if (currentScore >= highScore) {
    highScore = currentScore;
  }

  return highScore;
}

function resetGame() {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = getRandomNumber(20);
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.background = '#eee';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').textContent = '?';
  document.querySelector('header').style.borderColor = '#eee';
  document.querySelector('h1').style.color = '#eee';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.check').disabled = false;
}

function winGame() {
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('h1').style.color = '#008000';
  document.querySelector('h1').textContent = 'Congratulations, you won!';
  checkHighScore(score);
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').style.background = '#008000';
  document.querySelector('.number').style.color = '#eee';
  document.querySelector('.number').textContent = number;
  document.querySelector('header').style.borderColor = '#008000';
  document.querySelector('.check').disabled = true;
}

function lostGame() {
  document.querySelector('.message').textContent = 'You lost!';
  document.querySelector('h1').style.color = 'red';
  document.querySelector('h1').textContent = 'You lost the game, try again!';
  document.querySelector('.number').style.background = 'red';
  document.querySelector('.number').style.color = '#eee';
  document.querySelector('.number').textContent = number;
  document.querySelector('header').style.borderColor = 'red';
  document.querySelector('.check').disabled = true;
}

function decreasScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function wrongGuess() {
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number should be between 1 and 20!';
  } else {
    if (guess > number) {
      document.querySelector('.message').textContent = 'Too High!';
    } else {
      document.querySelector('.message').textContent = 'Too Low!';
    }
  }
  document.querySelector('.guess').value = '';
  decreasScore();
}
//--------------------------------------
//Variable declaration
let guess;
let number = getRandomNumber(20);
let score = 20;
let highScore = 0;
//--------------------------------------

//Main part where everything happens!
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (guess === number) {
    winGame();
  } else {
    if (score > 1) {
      wrongGuess();
    } else {
      decreasScore();
      lostGame();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});
