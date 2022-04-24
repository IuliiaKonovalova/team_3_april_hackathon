# Testing
## **Contents**
* [Manual Testing](#manual-testing)
* [Testing User Story](#testing-user-story)
* [Bugs](#bugs)
  * [Known bugs](#known-bugs)
  * [Solved bugs](#solved-bugs)
* [Validation](#validation)
  * [HTML validation](#html-validation)
  * [CSS validation](#css-validation)
  * [JS validation](#js-validation)
* [Lighthouse Report](#lighthouse-report)
* [Compatibility](#compatibility)
* [Responsiveness](#responsiveness)

|     | User Actions           | Expected Results | Y/N | Comments    |
|-------------|------------------------|------------------|------|-------------|
| **Navigation** | | |
| *Desktop menu* | | |
| Home button     | Leads to the main display      |     Y        |  Button is working as expected       |
| Rules button    | Leads to the rules page         |   Y          |  Button presents rules as expected        |
| Leader board    | Leads to the leader board       |    N/A         |     In progress     |
| Sound button     | Turn sound on/off          |     N/A        |    In progress      |
| Play button     | Difficulty level options              |      Y       |    User is able to freely choose between difficulties      |
| *Mobile menu*     |            |             |          |
| Hamburger menu  | Opens menu on the whole screen |             | If menu is opened during the game, game is paused    |
| **Difficulty level** | |             |          |
| Easy button     | Difficulty level is set to easy + leads to theme gallery |             |  Y |After choosing the easy mode, the user continues on to choose the game theme for them       
| Hard button     | Difficulty level is set to hard + leads to theme gallery |             |    Y   |After choosing the difficult mode, the user continues on to choose the game theme for them   
| **Theme Gallery** | | | |
| Arrow left     | Moves to the previous theme + leads to theme gallery |      N/A      |  |In progress        
| Arrow right     | Moves to the next theme + leads to theme gallery |          |  N/A      |In progress
| Button Play     | Starts the game |            |  Y   |Game begins as expected after the play button is pressed     
| **Footer** | | |
| Creators Button | Opens dropdown menu with creators |             |   N/A       | In progress
| Creator Avatar + Name | leads to creator's github page |             |   N/A      |In progress
| **Game View**| | | Game bar appears In the top right corner with timer, lives, and scores |
| If the user plays easy mode | No new items appear |          |    N/A      |In progress
| If the user plays hard mode | New items appear with time |           |  N/A    |In progress
| Garbage Item | moves on drag with |             |  N/A        |Items stays where the user left it
| User drops correct organic garbage item in the red bin | Success + item disappear + add scores | |N/A | sound effect if it was set by the user
| User drops correct plastic garbage item in the blue bin | Success + item disappear + add scores | | N/A |sound effect if it was set by the user
| User drops correct glass garbage item in the green bin | Success + item disappear + add scores | | N/A|sound effect if it was set by the user
| User drops correct paper garbage item in the yellow bin | Success + item disappear + add scores | | N/A|sound effect if it was set by the user
| User drops item in the correct bin | combo increase by 1 + item disappear + add scores | | N/A|sound effect if it was set by the user
| User drops item in the wrong bin | combo drops to 0 + item  goes back to screen + user loses 1 life | | sound effect if it was set by the user|
| The user cleans all screen from garbage items | All items disappear + add scores + game over + goes to the leader board | | |
| **Rules section** | | |  |
| User clicks outside of the rules block| leads to main page | |N/A | In progress
| User clicks on the rules button again| leads to rules page + with rules + 1 random fact on the environment | | |
| User clicks on the close rules button| leads to main page | | |
| User clicks on the bins | specific rules appear | | |
| User clicks on the play button | leads to chose difficulty page | | Y| After clicking the play button the user will then be led onto choosing the game difficulty
| Leader board | | |N/A | In progress