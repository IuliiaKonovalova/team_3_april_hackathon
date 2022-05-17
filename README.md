# Team: Earth Protectors - April Hackathon 

![Am I responsive](documentation/amiresponsive/am_i_responsive_new.png)

## About 

In line with this edition of the Hackathon, we have decided to develop an interactive game based on the importance of environmental cleanliness. To achieve this, we have developed a game whereby players must sort through various randomly generated items of rubbish that which they can then deem recyclable or not. In tandem with this, players will be up against a time parameter with players that finish the game in a shorter period achieving a higher position on the overall leader board. 
The overall goal of this game is to drive home a newfound knowledge base for recyclable goods. Players will continuously learn which pieces of rubbish are environmentally friendly to recycle while noting which amounts of garbage aren’t. Of course, the leader board is there to gauge each player’s skill level. Still, the main takeaway is that players are enjoying themselves, gaining knowledge of the environment around them and that, hopefully, they can provide this newfound understanding to those around them. 

You can find the live site [here](https://iuliiakonovalova.github.io/team_3_april_hackathon/index.html).

# User Experience Design

## Strategy

### Target Audience

For our project, the intention is to advertise the game to the younger generations, mainly within the age bracket of 6-12 years old. In particular, the demographic the project is aimed at is those that want to learn more about the environment around them. 
The following areas were looked into to achieve this goal of obtaining this age demographic: Gamification, Interactivity, and Visual and Audio cues. A combination and the correct use of all four allow the target audience to be attracted to the project. The different difficulty levels provide for prolonged interest in the game itself also.


### User Stories:

#### First Time Visitor Goals:
- As a first-time visitor, I want to be able to easily understand the purpose of the website, so I can decide whether I want to use it or not.
- As a first-time visitor, I want to be able to easily navigate the website, so I can find what I am looking for.
- As a first-time visitor, I want to be able to easily understand the rules of the game, so I can play freely.

#### Frequent User Goals:
- As a frequent user, I want to be able to learn about sorting garbage for recycling, so I can recycle my garbage in real life.
- As a frequent user, I want to enjoy the game, so I can play it regularly.
- As a frequent user, I want to be able to compete with other users, so I can motivate myself to play the game.
- As a frequent user, I want to be able to change the theme of the game, so I can enjoy a different experience.
- As a frequent user, I want to be able to learn interesting facts about the environment, so I can improve my recycling habits.

#### Parent Goals:
- As a parent of a frequent user, I want to be sure that the content is safe for children, so I can freely let my child play the game.
- As a parent of a frequent user, I want to be sure that the is no advertisement, so I can freely let my child play the game.
- As a parent of a frequent user, I want to know that my child develops good recycling habits, so I can be sure that my child will be able to recycle in real life.
- As a parent of a frequent user, I want to be sure that my child is not addicted to the game, so I can be sure that my child will be able to play the game regularly. (for the future development)
- As a parent of a frequent user, I want to be sure that my child is motivated to play the game, so I can be sure that my child receives enough motivation to recycle and actively participate in preserving our environment.
- As a parent of a frequent user, I want my child to learn additional facts about the environment, so I can be sure that my child will be able to improve his recycling habits.

## Technologies Used

### Languages

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): the markup language used to create the website.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css): the styling language used to style the website.
- [JS](https://www.javascript.com/): the primary language used to develop the client side of the website.

### Frameworks and libraries:

- [jQuery](https://jquery.com/): was used to control click events and sending AJAX requests.
- [jQuery User Interface](https://jqueryui.com/) was used to create interactive elements.
- [jquery-ui-touch-punch](https://www.npmjs.com/package/jquery-ui-touch-punch) was to use jquery UI draggable to work on mobile devices.

### Other tools

- [Git](https://git-scm.com/): the version control system used to manage the code.
- [W3C Validator](https://validator.w3.org/): was used to validate HTML5 code for the website.
- [W3C CSS validator](https://jigsaw.w3.org/css-validator/): was used to validate CSS code for the website.
- [JShint](https://jshint.com/): was used to validate the JS code for the website.
[GitHub](https://github.com/): used to host the website's source code.
- [VSCode](https://code.visualstudio.com/): the IDE used to develop the website.
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/open/): was used for debugging the website.
- [Font Awesome](https://fontawesome.com/): was used to create the icons used in the website.
- [Adobe Illustrator](https://www.adobe.com/au/products/illustrator.html?sdid=TTGWL8CS&mv=search&ef_id=Cj[…]Mw01BhF8_wBquCngqzn4MreNugw_lYfimZRDOCGwbgzjYaReBoCzC0QAvD_BwE) to build own SVG images.
- [Obfuscate]( https://obfuscator.io/) was used to obfuscate the API key to firebase.

## Features

- Home page (which includes a navbar with links to all pages of the site);
- Rules page;
- Leaderboard page;
- Play button (located on home screen and rules page);
- Game difficulty choice;
- Game theme option;
- A footer that includes all team members' names;
- Neat and presentable UI for the game;
- Countdown clock for the game;
- Performance analytics for the player (including time left, score, and lives);
- A sound feature to toggle on and off;
- Sounds to accompany correct and incorrect game moves;
- An overlay that allows a player to supply their name and score to the global leaderboard;
- A game pause button;
- A game stop button that allows a player to prematurely end the game as well as submit their name and score for the leaderboard.

**Home Page**

The Earth Protectors Home Page is structured with a Navbar on the top, the logo heading centered on the web page, followed by the Play button, which will prompt the users to choose the basic gameplay settings. The Footer section occupies the bottom of the page.

![Home Page](documentation/features/home-page.png)

**Difficulty Selection**

When users click the Play button, they can choose between **Easy** and **Hard** modes.
- **Easy**: garbage appears on the screen and users must segregate it into proper bins.
- **Hard**: new garbage appears every 2 seconds.

![Difficulty Selection](documentation/features/difficulty-selection.png)

**Game Arena Themes Selection**
When players choose their difficulty preference, they must select the Game Arena Theme. They have three options which bring users to their respective scenery:
- **Beach**,
- **River**,
- **Ocean**.

Players can choose scenery with arrow buttons located on the left & right parts of the screen. When they decide they can click the Play button to start the game session.

Every scene has a different musical background.

![Game Arena Scenes Beach](documentation/features/game-arena-selection-beach.png)

![Game Arena Scenes River](documentation/features/game-arena-selection-river.png)

![Game Arena Scenes Ocean](documentation/features/game-arena-selection-ocean.png)

**Navbar**

The web application has navigation buttons to navigate to the Home view, Rules Section, Leadersboard Section and a Sound control button.

![Navbar desktop](documentation/features/navbar_desktop.png)

The sound control button allows users to toggle the sound on and off. It looks different depending on whether the sound is on or off.

![Navbar desktop. Sound on](documentation/features/sound_on.png)
![Navbar desktop. Sound off](documentation/features/sound_off.png)

On the mobile version of the application the user will see a hamburger menu icon on the left side on the navigation bar, which will open the navigation menu, and the sound control button will be located on the right side of the navigation bar.

![Navbar mobile](documentation/features/navbar_mobile.png)
When the user clicks on the hamburger menu icon, the navigation menu will appear on the whole screen.

![Navbar mobile. Navigation menu open](documentation/features/navbar_mobile_open.png)

When the user starts the game, the Home, Rules and Leaders board buttons will be hidden. The game will be seen on the right side of the navigation bar.

![Navbar Desktop. Game view open](documentation/features/navbar_game_on.png)

On the mobile device the game bar will be seen in the middle of the navigation bar.

![Navbar mobile. Game view open](documentation/features/navbar_game_on_mobile.png)

**Rules Feature**

![Rules Feature](documentation/features/rules_feature2.png)

The purpose of the Rules Feature is to give users a brief description of how to play the game.
The four bins located in the centre of the screen are buttons, which show what kind of garbage must be placed in a respective bin.
The bins appear on the screen with CSS animation delaying every bin to be displayed one after another.
When users hover over bins, CSS animation is triggered to rotate respective bins 360 deg.
Information about proper segregation of garbage is presented to a user using a modal pop-up window.

![Rules Feature](documentation/features/rules_feature1.png)

Below the garbage bin section users can find randomly selected facts related to ecology. The information is fetched from a JSON file using jQuery and presented in UI.
This section allows users to start a game with the use of the Play Button located in the right bottom corner of the section background window.
Users can exit the Rules Section with any click outside the section window (excluding the navbar and footer) or by clicking the exit button in the top left corner.

**Game Theme Feature**

The theme selection allow players to select a natural environment to clean up, as it were. Each theme was inspired a collection of pens found on CodePen (links available in credits section).

We built the CSS animations by pulling the code from the existing pens, and then manipulating it to suit our needs in seperate `test-game-bckdrop.html` files. Once satisfied with the visuals, we then migrated the code into the project. From there, the JavaScript was wired up, and layered above the animations in order to render the game.

- River Theme Foundation
![Theme Feature](documentation/features/river_theme_test.png)
- River Theme Materialized
![Theme Feature](documentation/features/river_game.png)
- Ocean Theme Foundation
![Theme Feature](documentation/features/ocean_theme_test.png)
- Ocean Theme Materialized
![Theme Feature](documentation/features/ocean_game.png)
- Beach Theme Foundation
![Theme Feature](documentation/features/beach_theme_test.png)
- Beach Theme Materialized
![Theme Feature](documentation/features/beach_game.png)

**End Game Window**

After the game is finished, users are notified about their score. They can submit their score to Leader Boards by typing their name or anonymously if they prefer. Below name input, the Submit button sends the data to the Firebase database and the user is informed about the latest results hierarchy.

![End Game Window](documentation/features/end-game-window.png)

**Leaders Board**

Users are able to see scores of previous players. The Leaders Board section is displayed after players submit their scores or by clicking in the respective button on the Navigation Bar.

[Firebase](https://firebase.google.com/) database is implemented to store players scores.

![Leaders Board](documentation/features/leaders-board.png)

**Footer Feature**

The footer is a fixed feature - always visible to the user. In addition to the copyright information, the footer includes a fun dropdown function that displays an avatar of each developer involved in the creation of this project. Each avatar links to the developers personal GitHub page. 

- Footer (Normal State)
![Footer Display](documentation/features/footer1.png)

- Footer (Active State)
![Footer With Dropdown Avatars](documentation/features/footer2.png)


### Future features

- In the future, the intention is to implement a 'time-limit' on the frequency a player can play the game. If a player plays the game in a specified number of successions they will be given a prompt notifying them of the amount of time they have spent playing the game and a suggestion that asks them to consider taking a break and coming back later. This is to ensure that parents can feel at ease as to whether or not their child will be playing the game too much. This feature will be developed further as the lifespan of the game continues into the future.

## Design

### Structure

### Color Scheme

A variety of colours were tested before settling on a combination that incorporated complementary colours that were bold, modern and most importantly fun, since the target audience is young children. 

The background colour for the navigation and footer was chosen for contrast - against the navigation content as well as the screen content, since the nav and footer are always fixed. 

- Colour Scheme 1

![Colour Scheme 1](documentation/design/colour_scheme.png)

- Colour Scheme 2

![Colour Scheme 2](documentation/design/colour_scheme.png)

- Nav & Footer 
![Nav/Footer Colors](documentation/design/nav_colour.png)

- Bin Design 

The bin SVGs were custom designed by a team member in [Adobe Illustrator](https://www.adobe.com/au/products/illustrator.html?sdid=TTGWL8CS&mv=search&ef_id=Cj[…]Mw01BhF8_wBquCngqzn4MreNugw_lYfimZRDOCGwbgzjYaReBoCzC0QAvD_BwE) and based on the following image obatined from [Vecteezy](https://www.vecteezy.com/vector-art/302905-set-of-different-trash-bin)

![Bin Design](documentation/design/bin_design.png)

Final Custom Bin Design: 

![Bin Design](documentation/design/bin_design1.png)


### Typography

Google Fonts was used to obtain our two chosen fonts:

  - [Rubik Moonrocks](https://fonts.google.com/specimen/Rubik+Moonrocks?query=rubik+moonrocks&preview.text=Earth%20Protectors&preview.text_type=custom)

![Rubik Moonrocks](documentation/design/typography.png)

  - [Lato](https://fonts.google.com/specimen/Lato?query=lato&preview.text=Earth%20Protectors&preview.text_type=custom)


![Lato](documentation/design/typography1.png)

Rubik Moonrocks was chosen for its rock-like, earthy appearance which was an appropriate choice given the theme of Earth Day. It also has a very fun and playful appeal, which is important since the target audience is comprised of young game-players. 

Lato is sans serif typeface and works well in contrast to the header/title font, providing balance while maintaining a modern, simple appearance. 
  

### Imagery

Most of the imagery in the form of icons and illustrations was obtained from [Icons8](https://icons8.com/), including the rubbish icons used in all of the games as well as the cloud background image that helped inform many of the cartoon-like design choices. 

![Cloud image](assets/images/cloud_background.jpg)

Many of our images were custom designed using [Adobe Illustrator](https://www.adobe.com/au/products/illustrator.html?sdid=TTGWL8CS&mv=search&ef_id=Cj[…]Mw01BhF8_wBquCngqzn4MreNugw_lYfimZRDOCGwbgzjYaReBoCzC0QAvD_BwE), for example the bins (mentioned above) as well as other SVGs used in the animation themes.

Designed for use in the Ocean animation:

- **Stingray**
Designed for use in the Ocean animation
![Stingray](assets/images/stingray.svg)

- **Waves**
![Stingray](assets/images/waves.svg)

- **Jellyfish** 
![Stingray](assets/images/jellyfish.svg)


### Wireframes


- [Wireframes](documentation/wireframes/WIREFRAMES_EARTH_DAY_HKTHN.pdf)

## Testing

[Click Here](TESTING.md) to view the full testing steps that were completed on every device and browser.

## Deployment

### Github


- The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the [GitHub repository](https://github.com/IuliiaKonovalova/team_3_april_hackathon), navigate to the Settings tab
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.


The live link can be found [here](https://iuliiakonovalova.github.io/team_3_april_hackathon/index.html)

### Local Deployment
1. In order to make a local copy of this project, you can clone it.
In your IDE Terminal, type the following command to clone my repository:
- `git clone https://github.com/IuliiaKonovalova/team_3_april_hackathon.git`

1. Alternatively, if you use Gitpod, you can [click here](https://github.com/IuliiaKonovalova/team_3_april_hackathon), which will start the Gitpod workspace for you.

1. You may also download the project from the [GitHub repository](https://github.com/IuliiaKonovalova/team_3_april_hackathon) and run it locally.

### Cloning and Forking 

In order to clone the repository, the user must visit the repository page.

Cloning by command line: Click the button beside the green button titled 'code', there you will be given various options on how you would like to clone the repository. You must then type 'git clone' into your own workspace along with the repo URL and enter.

### Forking

Go to the repository page. In the top right of the page, below the navbar, click the 'fork' button. The fork should now be in your repositories.

**How to run this project locally**


## Credits

- Garbage bins animation pop-up in **Rules Section** come from: [css-tricks.com](https://css-tricks.com/a-handy-little-system-for-animated-entrances-in-css/)
- [jQuery](https://jquery.com/): as simple and fast syntax allowed to create functionality  of the game within short period of time
- [jQuery User Interface](https://jqueryui.com/) for free libraries which increase user interaction
- CSS Animation Resources:
  - [CodePen](http://codepen.io/wendko/pen/dyoRRbm): Beach Game Inspiration
  - [CodePen](https://codepen.io/geertjanhendriks/pen/ZEWrmd): Ocean Game Inspiration
  - [CodePen](https://codepen.io/pehaa/pen/yLVeLNg): River Game Inspiration
- [Firebase](https://firebase.google.com/) for providing a free platform to host and store the leaderboard data.
- The modal pop-up window used for the game's instructions were based on this Web Dev Simplified [video](https://www.youtube.com/watch?v=MBaw_6cPmAw).
- Passing multiple arguments with the event included to event listener based on this [thread](https://stackoverflow.com/questions/16053866/javascript-pass-multiple-arguments-to-eventlistener-and-the-event).
- [jquery-ui-touch-punch](https://www.npmjs.com/package/jquery-ui-touch-punch) for providing a library which allows to use iquery ui draggable to work on mobile devices.
- [Adobe Illustrator](https://www.adobe.com/au/products/illustrator.html?sdid=TTGWL8CS&mv=search&ef_id=Cj[…]Mw01BhF8_wBquCngqzn4MreNugw_lYfimZRDOCGwbgzjYaReBoCzC0QAvD_BwE).
- [Obfuscate]( https://obfuscator.io/) Was used to obfuscate the api key to firebase.
- [css-tricks.com](https://css-tricks.com/a-handy-little-system-for-animated-entrances-in-css/): Garbage bins animation pop-up in **Rules Section** come from: 
- [Icons8](https://icons8.com/): for providing free access to amazing icons and illustrations
- [FontAwesome](https://fontawesome.com/): for providing free icons
- [Google Fonts](https://fonts.google.com/): for providing the chosen text fonts
- [Build a Popup with JavaScript](https://www.youtube.com/watch?v=MBaw_6cPmAw): The modal pop-up window used for the game’s instructions section
- [Stack Overflow](https://stackoverflow.com/questions/16053866/javascript-pass-multiple-arguments-to-eventlistener-and-the-event): Passing multiple arguments with the event included to event listener 


## Acknowledgements

- Thank you to the Code Institute for hosting the Hackathon platform.
- Thank you to Jim Morel, our group facilitator from the Code Institute.
- Thank you to our amazing, hard-working team of developers! We learned so much from one another.
- And a big shout-out goes to Iuliia - our SCRUM Master :hugs: We would have been utterly lost without her!


## Collaborators


Our team is made up of a wonderful group of people from around the world - all of which are either past or present students of the [Code Institue](https://codeinstitute.net/global/)

- Aleksei [@lexach91](https://github.com/lexach91)
- James [@stuartj073](https://github.com/stuartj073)
- Iuliia [@IuliiaKonovalova](https://github.com/IuliiaKonovalova)
- Milosz [@miloszmisiek](https://github.com/miloszmisiek)
- Whitney [@Wingkelinks](https://github.com/Wingkelinks)