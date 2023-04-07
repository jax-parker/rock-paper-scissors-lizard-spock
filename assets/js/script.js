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
let playerChoice;
let randomChoice;
let compFinalChoice;
let script = ['Paper wraps Rock', 'Paper smothers Spock', 'Scissors cut Paper', 'Scissors chop Lizard',
    'Rock blunts Scissors', 'Rock crushes Lizard', 'Lizard eats Paper', 'Lizard poisons Spock'
]
const computerChoice = compChoice();




// Wait for the DOM to finish loading before running the game
// Add event listeners to buttons 
document.addEventListener("DOMContentLoaded", function () {
    for (button of buttons) {
        button.addEventListener('click', function () {
            playerChoice = this.getAttribute('data-type');
            playGame(playerChoice);
        });
    }
});

// Add user choice image to the div
function playGame(playerChoice) {
    document.getElementsByClassName('img-choice').value = "";
    playerImage.innerHTML = `<img src="./assets/images/${playerChoice}.png" alt="Rock">`;
    compChoice();

}

//Chooses random word from the choices array for the computers turn
function compChoice() {
    randomChoice = (Math.floor(Math.random() * 5));
    compFinalChoice = choices[randomChoice];
    compImage.innerHTML = `<img src="./assets/images/${compFinalChoice}.png" alt="Rock">`;
    gameOptions();
}

// Function to decide which choice wins, loses or draws.
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
            console.log('player wins')
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
            console.log('comp wins')
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
        case "LizardLizard":
        case "SpockSpock":
            gameTie(playerChoice, compFinalChoice);
            console.log('tie')
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

// Game ends when the user or the computer gets to 10 points
function endGame() {
    if (playerScore === 10){
        result.innerHTML = "Congratulations! You beat the computer!"
    } else if(compScore === 10){
        result.innerHTML = "Sorry! The computer has beaten you!"
    }
}