let wins = 0;
let losses = 0;
let ties = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let resultText = '';
  if (userChoice === computerChoice) {
    resultText = "It's a tie!";
    ties++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultText = "You win!";
    wins++;
  } else {
    resultText = "Computer wins!";
    losses++;
  }

  document.getElementById('result').innerHTML = `
    You chose <b>${userChoice}</b>.<br/>
    Computer chose <b>${computerChoice}</b>.<br/>
    <b>${resultText}</b>
  `;
  document.getElementById('winCount').textContent = wins;
  document.getElementById('lossCount').textContent = losses;
  document.getElementById('tieCount').textContent = ties;
}