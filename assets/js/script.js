/* functions
    DOM load finish
    Event Listener for buttons
    Play the game - 
    Show correct choice picked image
    Generate random computer choice 
    Check winner
    Correct message player win/ comp win / tie
    Update scores 
    Play again? after game ends
*/
/* Declare constants for DOM elements and choice array*/

//const buttons = document.getElementById('img-choice');
let playerScore = 0;
let compScore = 0;
let playerScoreSpan = document.getElementById('player-score');
let computerScoreSpan = document.getElementById('computer-score');
const playerImage = document.getElementById('player-img');
const compImage = document.getElementById('comp-img');
const result = document.getElementById('result-message');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let buttons = document.getElementsByTagName('button');
let playerChoice;



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

function playGame(playerChoice) {
    const computerChoice = compChoice();
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
            compWin();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            gameTie();
            break;
    }

}

function compChoice() {
    const randomChoice = (Math.floor(Math.random() * 5));
    return choices[randomChoice];
}

function playerWin(playerChoice, computerChoice) {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    result.innerHTML = playerChoice + " beats " + computerChoice + ". You win!";
    
}

function compWin() {
    compScore++;
    computerScoreSpan.innerHTML = compScore;
    

}

function gameTie() {
    console.log("It's a tie!")
    
}

function resultMessage() {
     
}



