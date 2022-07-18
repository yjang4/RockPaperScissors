function getRandomInt(maplayerInput) {
return Math.floor(Math.random() * maplayerInput);
}
function getComputerInput() {
    const randomNumber = getRandomInt(3);
    let computerInput = '';
    switch(randomNumber) {
        case 0:
            computerInput = 'Rock';
            break;
        case 1:
            computerInput = 'Scissors';
            break;
        case 2:
            computerInput = 'Paper';
            break;
        default:
            break;
    }
    return computerInput;
}
function playRockPaperScissors(playerInput) {
    let computerInput = getComputerInput();
    playerInput = playerInput.toUpperCase();
    let result = '';
    if (playerInput == 'ROCK' && computerInput == 'Scissors' ||
            playerInput == 'SCISSORS' && computerInput == 'Paper' ||
            playerInput == 'PAPER' && computerInput == 'Rock') {
        result = 'Win';
    }
    else if (playerInput == 'ROCK' && computerInput == 'Paper' ||
            playerInput == 'SCISSORS' && computerInput == 'Rock' ||
            playerInput == 'PAPER' && computerInput == 'Scissors') {
        result = 'Lose';           
    }
    else {
        result = 'Tie';
    }
    return result;
}
let rockButton = document.querySelector('.rock-button');
let paperButton = document.querySelector('.paper-button');
let scissorsButton = document.querySelector('.scissors-button');
let result = document.querySelector('.result');
let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');
let winnerDisplay = document.querySelector('.winner-display');

let playerScore = 0;
let computerScore = 0;
playerScoreDisplay.textContent = `Player score: ${playerScore}`;
computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
let gameOutcome = '';
function gameUpdate() {
    result.textContent = gameOutcome;
    if(gameOutcome == 'Win') {
        playerScore ++;
    }
    else if(gameOutcome == 'Lose') {
        computerScore ++;
    }
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    if(playerScore > 4) {
        winnerDisplay.textContent = 'Player wins';
    }
    else if(computerScore > 4) {
        winnerDisplay.textContent = 'Computer wins';
    }
}
function game() {
    /*
    for (i = 0; i < 5; i ++) {
        let playerInput = prompt("Cast your die");
        console.log(playRockPaperScissors(playerInput));
    }*/
    
    rockButton.addEventListener('click', () => {
        gameOutcome = playRockPaperScissors('ROCK');
        gameUpdate();
    });
    paperButton.addEventListener('click', () => {
        gameOutcome = playRockPaperScissors('PAPER');
        gameUpdate();
    });
    scissorsButton.addEventListener('click', () => {
        gameOutcome = playRockPaperScissors('SCISSORS');
        gameUpdate();
    });
    
    
    
}
game();
