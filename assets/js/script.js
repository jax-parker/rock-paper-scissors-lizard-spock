//Global variables
const result = document.getElementById('result-message');
let playerImage = document.getElementById('player-img');
let compImage = document.getElementById('comp-img');
const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
let playerScore = 0;
let compScore = 0;
let playerScoreSpan = document.getElementById('player-score');
let computerScoreSpan = document.getElementById('computer-score');
let buttons = document.getElementsByTagName('button');
let replayBtn = document.getElementById('replay-btn');
let playerChoice;
let randomChoice;
let compFinalChoice;

// Wait for the DOM to finish loading before running the game
// Add event listeners to buttons 
document.addEventListener("DOMContentLoaded", function () {
    for (buttons of buttons) {
        buttons.addEventListener('click', function () {
            playerChoice = this.getAttribute('data-type');
            playGame(playerChoice);
        });
    }
    replayGame();
});

// Add user choice image to the div
function playGame(playerChoice) {
    playerImage.innerHTML = '<img src="assets/images/' + playerChoice + '.png" alt="Rock">';
    compChoice();
}

//Chooses random word from the choices array for the computers turn & adds image to div
function compChoice() {
    randomChoice = (Math.floor(Math.random() * 5));
    compFinalChoice = choices[randomChoice];
    compImage.innerHTML = '<img src="assets/images/' + compFinalChoice + '.png" alt="Rock">';
    gameOptions();
}

// Function to decide which choice wins, loses or draws and runs corresponding function.
function gameOptions() {
    switch (playerChoice + compFinalChoice) {
        case "PaperRock":
        case "PaperSpock":
        case "ScissorsPaper":
        case "ScissorsLizard":
        case "RockScissors":
        case "RockLizard":
        case "LizardPaper":
        case "LizardSpock":
        case "SpockRock":
        case "SpockScissors":
            playerWin(playerChoice, compFinalChoice);
            break;
        case "RockPaper":
        case "SpockPaper":
        case "PaperScissors":
        case "LizardScissors":
        case "ScissorsRock":
        case "LizardRock":
        case "PaperLizard":
        case "RockSpock":
        case "ScissorsSpock":
            compWin(playerChoice, compFinalChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
        case "LizardLizard":
        case "SpockSpock":
            gameTie(playerChoice, compFinalChoice);
            break;
    }
}

// If player wins, increments score by 1 and shows message
function playerWin(playerChoice, compFinalChoice) {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    result.innerHTML = `${playerChoice} beats ${compFinalChoice}. You win!`;
    endGame();
}

// If computer wins, increments score by 1 and shows message
function compWin(playerChoice, compFinalChoice) {
    compScore++;
    computerScoreSpan.innerHTML = compScore;
    result.innerHTML = `${compFinalChoice} beats ${playerChoice}. You lose!`;
    endGame();
}

//If both parameters are equal, no score and display message
function gameTie(playerChoice, compFinalChoice) {
    result.innerHTML = ` ${playerChoice} equals ${compFinalChoice} . It's a tie!`;
}

// Game ends when the user or the computer gets to 10 points, returns message & resets game
function endGame() {
    if (playerScore === 10) {
        result.innerHTML = "Congratulations! You beat the computer!";
        resetGame();
    } else if (compScore === 10) {
        result.innerHTML = "Sorry! The computer has beaten you!";
        resetGame();
    }
}

// Function to reset the game when finished, clearing scores and images
function resetGame() {
    playerScore = 0;
    compScore = 0;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = compScore;
    playerImage.innerHTML = "";
    compImage.innerHTML = "";
}

// Function to allow the user to reset the game at any point during the game using the 'Play again' button(span)
// Assistance with a bug in this function was given from Josh in CI Student Support
function replayGame() {
        replayBtn.addEventListener('click', () => {
        playerScore = 0;
        compScore = 0;
        playerScoreSpan.innerHTML = playerScore;
        computerScoreSpan.innerHTML = compScore;
        playerImage.innerHTML = "";
        compImage.innerHTML = "";
        result.innerHTML= "Who wins?";
    });
}