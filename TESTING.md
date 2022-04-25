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


## Testing User Story

|-------------------------------|--------------------------|-------------------|
|       **User Stories**        |   **Requirements met**   |     **Image**     |
|-------------------------------|--------------------------|-------------------|
| **First Time Visitor Goals:** | | |
| As a first time visitor, I want to be able to easily understand the purpose of the website, so I can decide whether I want to use it or not. | On the landing page of the site it is clear where the user may go to learn the rules of the game. It is also clear how to play the game with the play button clearly displayed. |  |
| As a first time visitor, I want to be able to easily navigate the website, so I can find what I am looking for. | Users can navigate the site by use of a menu navigation bar | (Landing Page)[assets/images/userstories/landing.png] |
| As a first time visitor, I want to be able to easily understand the rules of the game, so I can play freely. | There is a rules menu option that pops up a window containing the rules | (Nav Menu)[assets/images/userstories/navmenu.png] |
|                               | | (Rules Popup)[assets/images/userstories/rulepopup.png] |
|                               | | |
| **Frequent User Goals:**      | | |
| As a frequent user, I want to be able to learn about sorting garbage for recycling, so I can recycle my garbage in real life. | A user has the has 3 game options, beach, river and ocean. The aim of the game is to sort the items on the screen into the correct bin. For example a book goes to the paper bin, a plastic bottle to the plastics bin| (Beach game)[assets/images/userstories/beachgame.png] |
|                               | | (River game)[assets/images/userstories/rivergame.png] |
|                               | | (Ocean game)[assets/images/userstories/oceangame.png]|
|                               | | (Play game)[assets/images/userstories/playgame.png] |
|                               | | |
| As a frequent user, I want to enjoy the game, so I can play it regularly. | At the end of a play a score board pops-up where the user may enter their game name and submit their score. Thereafter a leader board pops-up to show the scores of top players. | (Score board)[assets/images/userstories/scoreboard.png] |
|                               | | (Leader Board)[assets/images/userstories/scoreboard.png] |
|                               | | |
| As a frequent user, I want to be able to compete with other users, so I can motivate myself to play the game. | | |
| As a frequent user, I want to be able to change the theme of the game, so I can enjoy a different experience. | | |
| As a frequent user, I want to be able to learn interesting facts about environment, so I can improve my recycling habits. | | |
|                               | | |
| **Parent Goals:**             | | |
| As a parent of a frequent user, I want to be sure that the content is safe for children, so I can freely let my child play the game. | | |
| As a parent of a frequent user, I want to be sure that the is no advertisement, so I can freely let my child play the game. | | |
| As a parent of a frequent user, I want to know that my child develops good recycling habits, so I can be sure that my child will be able to recycle in real life. | | |
| As a parent of a frequent user, I want to be sure that my child is not addicted to the game, so I can be sure that my child will be able to play the game regularly. (for the future development) | | |
| As a parent of a frequent user, I want to be sure that my child is motivated to play the game, so I can be sure that my child receives enough motivation to recycle and actively participate in preserving our environment. | | |
| As a parent of a frequent user, I want my child to learn additional facts about the environment, so I can be sure that my child will be able to improve his recycling habits. | | |

## Validation:
### HTML Validation:

![Full HTML Validation](documentation/validation/html_validation.pdf)

- No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator. This checking was done manually by copying view page source code (Ctrl+U) and pasting it into the validator.

### CSS Validation:

![Full CSS Validation](documentation/validation/css_validation.png)

- No errors or warnings were found when passing through the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) validator except the warnings about the use of css root variables and webkits for the box-shadow. However, css code works perfectly on various devices. 

### JS Validation:

![Full JS Validation](documentation/validation/js_validation.png)

- No errors or warning messages were found when passing through the official [JSHint](https://www.jshint.com/) validator. However, the validator has pointed that module variable is not used, but this variable is needed for the automated testing. Needless to say, that as the modern js syntax was used (the Optional Chaining method - `?.`) `/* jshint esversion: 11 */` was added to the top of the file.

[Back to contents](#contents)

---
## Lighthouse Report
![Lighthouse Report. Home Page](documentation/lighthouse_reports/lighthouse_home.png)

## Compatibility

Testing conducted on the following browsers;

- Brave;
- Chrome;
- Microsoft Edge;
- Firefox;

[Back to contents](#contents)
---

## Responsiveness

Testing conducted outside of the Chrome development tool on the following;

- Oppo K7;
- Oppo K7x;
- Xiaomi Mi PAD 4;


[Back to contents](#contents)