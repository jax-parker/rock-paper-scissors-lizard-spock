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

const buttons = document.getElementById('img-choice');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-img');
const compImage = document.getElementById('comp-img');
const result = document.getElementById('result');
const choices = ['rock','paper','scissors','lizard','spock'];


