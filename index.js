const choices = ['rock', 'paper', 'scissors'];

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('playDisplay').innerText = 'PLAYER: ' + playerChoice;
  document.getElementById('playComputer').innerText = 'COMPUTER: ' + computerChoice;
  let result;

  if (playerChoice === computerChoice) {
    result = 'It\'s a tie!';
    document.getElementById('showResult').style.color = 'orange';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    document.getElementById('showResult').style.color = 'green';
  } else {
    result = 'You lose!';
    document.getElementById('showResult').style.color = 'red';
  }

  document.getElementById('showResult').innerText = result;
}