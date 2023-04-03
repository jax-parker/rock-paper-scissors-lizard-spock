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
document.addEventListener("DOMContentLoaded", function () {
    for (button of buttons) {
        button.addEventListener('click', function () {
            playerChoice = this.getAttribute('data-type');
            playerImage = this.getAttribute()
            playGame(playerChoice);
        });
    }
});

// Function to decide which choice wins, loses or draws.
function playGame(playerChoice) {
    let computerChoice = compChoice();
    switch (playerChoice + computerChoice) {
        case "paperrock":
        case "paperspock":
        case "scissorspaper":
        case "scissorslizard":
        case "rockscissors":
        case "rocklizard":
        case "lizardpaper":
        case "lizardspock":
        case "spockrock":
        case "spockscissors":
            playerWin(playerChoice, computerChoice);
            break;
        case "rockpaper":
        case "spockpaper":
        case "paperscissors":
        case "lizardscissors":
        case "scissorsrock":
        case "lizardrock":
        case "paperlizard":
        case "rockspock":
        case "scissorsspock":
            compWin(playerChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            gameTie(playerChoice, computerChoice);
            break;
    }

}

//Chooses random word from the choices array
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

//function endGame()