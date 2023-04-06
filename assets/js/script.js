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
    gameOptions();
    compChoice();
}

//Chooses random word from the choices array for the computers turn
function compChoice() {
    randomChoice = (Math.floor(Math.random() * 5));
    compFinalChoice = choices[randomChoice];
    compImage.innerHTML = `<img src="./assets/images/${compFinalChoice}.png" alt="Rock">`;
    
}

// Function to decide which choice wins, loses or draws.
function gameOptions() {

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