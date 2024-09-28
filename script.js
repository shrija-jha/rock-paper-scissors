const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultParagraph = document.getElementById('result');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('rock', computerChoice);
    resultParagraph.textContent = `Computer chose ${computerChoice}. ${result}`;
});

paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('paper', computerChoice);
    resultParagraph.textContent = `Computer chose ${computerChoice}. ${result}`;
});

scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('scissors', computerChoice);
    resultParagraph.textContent = `Computer chose ${computerChoice}. ${result}`;
});