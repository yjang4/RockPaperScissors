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
function game() {
    /*
    for (i = 0; i < 5; i ++) {
        let playerInput = prompt("Cast your die");
        console.log(playRockPaperScissors(playerInput));
    }*/
    let rockButton = document.querySelector('.rock-button');
    let paperButton = document.querySelector('.paper-button');
    let scissorsButton = document.querySelector('.scissors-button');
    let result = document.querySelector('.result');
    let playerScoreDisplay = document.querySelector('.player-score');
    let computerScoreDisplay = document.querySelector('.computer-score');
    let playerScore = 0;
    let computerScore = 0;
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

    rockButton.addEventListener('click', () => {
        const gameOutcome = playRockPaperScissors('ROCK');
    });
    paperButton.addEventListener('click', () => {
        const gameOutcome = playRockPaperScissors('PAPER');
    });
    paperButton.addEventListener('click', () => {
        const gameOutcome = playRockPaperScissors('PAPER');
    });
    result.textContent = gameOutcome;
    if(gameOutcome == 'Win') {
        playerScore ++;
    }
    else if(gameOutCome == 'Lose') {
        computerScore ++;
    }
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    
    
}
game();
