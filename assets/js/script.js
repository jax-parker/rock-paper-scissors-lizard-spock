//Global variables
let playerScore = 0;
let compScore = 0;
let playerScoreSpan = document.getElementById('player-score');
let computerScoreSpan = document.getElementById('computer-score');
const result = document.getElementById('result-message');
const playerImage = document.getElementById('player-img');
const compImage = document.getElementById('comp-img');
const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
let buttons = document.getElementsByTagName('button');
let playerChoice;



// Wait for the DOM to finish loading before running the game
// Add event listeners to buttons 
document.addEventListener("DOMContentLoaded", function(){
    for (button of buttons) {
        button.addEventListener('click', function(){
            playerChoice = this.getAttribute('data-type');
            console.log('clicked')
            playGame(playerChoice);
        });
    }
    });

// Function to decide which choice wins, loses or draws.
function playGame(playerChoice) {
    const computerChoice = compChoice();
    console.log('comp choice ' + computerChoice)
    console.log('user choice ' + playerChoice)
    switch (playerChoice + computerChoice) {
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
            console.log('player wins')
            playerWin(playerChoice, computerChoice);
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
            compWin(playerChoice, computerChoice);
            console.log('comp wins')
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
        case "LizardLizard":
        case "SpockSpock":
            gameTie(playerChoice, computerChoice);
            console.log('tie')
            break;
    }
}

//Chooses random word from the choices array for the computer turn
function compChoice() {
    const randomChoice = (Math.floor(Math.random() * 5));
    return choices[randomChoice];
}

// If player wins, increments score by 1 and shows message
function playerWin(playerChoice, computerChoice) {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    result.innerHTML = `${playerChoice} beats ${computerChoice}. You win!`;
}

// If computer wins, increments score by 1 and shows message
function compWin(playerChoice, computerChoice) {
    compScore++;
    computerScoreSpan.innerHTML = compScore;
    result.innerHTML = `${computerChoice} beats ${playerChoice}. You lose!`;

}

//If both parameters are equal, no score and display message
function gameTie(playerChoice, computerChoice) {
    result.innerHTML = ` ${playerChoice} equals ${computerChoice} . It's a tie!`;

}

