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
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-img');
const compImage = document.getElementById('comp-img');
const result = document.getElementById('result');
const choices = ['rock','paper','scissors','lizard','spock'];
let buttons = document.getElementsByTagName('button');
let playerChoice;



// Wait for the DOM to finish loading before running the game
// Add event listeners to buttons 
document.addEventListener("DOMContentLoaded", function(){
for (button of buttons) {
    button.addEventListener('click', function(){
        playerChoice = this.getAttribute('data-type');
        playGame(playerChoice);
    });
}
});

function playGame(playerChoice) {
    const computerChoice = compChoice();
    console.log('computer choice =>'  + compChoice())
    console.log('player choice =>'  + playerChoice)
}

function compChoice() {
    const randomChoice=(Math.floor(Math.random()*5));
    return choices[randomChoice];
}

//function options()

//function checkWinner()

//function updateScores()

//function playerMessage()

//function endGame()