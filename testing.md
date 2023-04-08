# TESTING

## Manual testing

### Features

Feature Tested | Expected Result | Actual Result | Pass/Fail
---------------|-----------------|--------------|--------------
Diplay game all elements present | Show game elements on page| As expected | Pass
Hover colour change on buttons | Player hovers mouse over each button, pointer changes to hand and colour changes| As expected | Pass
Rules button | On click opens rules page | As expected | Pass
Play Game button | On rules page, takes you back to game page | As expected | Pass
Choice buttons | Button choice corresponds to image and text | As expected | Pass
Message div | Shows correct message corresponding to images | As expected | Pass
Scoreboard | Score increments by one depending on player or computer win | As expected | Pass 
Play again? button | Game resets and scores return to zero | As expected | Pass
End Game | Player cannot use buttons after score of ten is reached | As expected | Pass

## Bugs

Bug | Status | Fix  
----|--------|-----
Game allowed user to keep incrementing scores after 10| Resolved | ?????
Game showed comp image and alt image on play again button| Resolved | ????


## Remaining Bugs

  * No bugs remaining.

## Validator Testing

* HTML - tested through the [W3C HTML Validator](https://validator.w3.org/) and no errors were found.<br>
 ![W3C HTML Test](assets/readme-images/html-check.png)
 * CSS - tested through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and no errors were found.<br>
 ![W3C CSS Validator](assets/readme-images/css-check.png)
 * JavaScript - tested through the [Jshint.com](https://jshint.com) and no errors were found.<br>
 ![Jshint Test](assets/readme-images/js-check.png)<br>one warning was shown as explained in the Portfolio Project Scope video.

## Testing User Stories

* As a visiting user, I want to be able to understand how to play the game after reading the rules.
    * The user can see all the buttons, messages and images on the page.<br>
   
   ![Game Page](testingmd-images/game-page.png)

* As a visiting user, I want to be able visually see which choice I made.
    * The user can clearly see which button they are targeting as it changes colour and the pointer turns into a hand.<br>
    * The user can see the image of the choice they made and the random choice of the computer.<br>

   ![Button Hover](testingmd-images/button-hover.png)
   ![Image Choice](testingmd-images/game-graphic.png)

* * As a visiting user, I want to be able to see who won the point and see the scores.
    * User sees message & images explaining who one the point and score is incremented accordingly.<br>

    ![Score Increment & Message](testingmd-images/Score-graphic.png)

* As a visiting user, I want to be able to be able to replay after the game has finished.
    * When the score of either player reaches 10, a message to the player to say who one is shown.<br> 
    
    ![Winner Message](testingmd-images/end-message.png)