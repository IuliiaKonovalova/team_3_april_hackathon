/* jshint esversion: 6 */
import GarbageItem from "./GarbageItem.js";

const firebaseConfig = {
  apiKey: "AIzaSyBeXh7AxiEzrwJ6l76e4za337uEFlUr9ZM",
  authDomain: "april-ci-hackathon-team3.firebaseapp.com",
  databaseURL: "https://april-ci-hackathon-team3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "april-ci-hackathon-team3",
  storageBucket: "april-ci-hackathon-team3.appspot.com",
  messagingSenderId: "383315248126",
  appId: "1:383315248126:web:b7e6094ffdd4ced9fdf6af",
  measurementId: "G-KPE5CFX4GW"
};

firebase.initializeApp(firebaseConfig);

        
const database = firebase.database();


const saveScoreToDb = (name, score) => {
  database.ref("scores").push({
    name: name,
    score: score,
  });
}

// Game rules:
// There will be two game modes: "easy" and "hard".
// In "easy" mode, a number of garbage items will be randomly generated on the screen
// and the player will need to drag and drop them to the one of 3 bins.
// In "Hard" mode, items will be continuously generated and disappear after a certain time.
// The player will need to drag and drop items to the one of 3 bins.
// When player puts an item to the correct bin, the item will disappear and player will get a point.
// When player puts an item to the wrong bin, the item will disappear and player will lose one life.
// When player loses all lives, the game is over.
// When player clears all the garbage, the game is over.
// Each time the player puts an item to the correct bin, the combo will increase by 1.
// Combo multiply the received points.
// Combo breaks when player puts an item to the wrong bin.

export default class Game {
  constructor(jsonFile) {
    this.garbageJson = jsonFile;
    this.garbageItems = 0;
    this.lives = 3;
    this.score = 0;
    this.combo = 0;
    this.gameMode = "easy";
    this.gameOver = false;
    this.gameScreen = document.getElementById("main");
    this.garbageInterval = null;
    this.timerInterval = null;
    this.timeLeft = 60;
    this.sound = true;
    this.timerElement = document.getElementById("timer");
    this.livesElement = document.getElementById("lives");
    this.scoreElement = document.getElementById("score");
    this.comboElement = document.getElementById("combo");
    this.soundControl = document.getElementsByClassName("sound__control")[0];
    this.endGameElement = document.getElementById("end-game");
    this.garbageBinsElement = document.getElementById("garbage-bins");
    this.playButton = document.getElementsByClassName("fa-play")[0];
    this.stopButton = document.getElementsByClassName("fa-stop")[0];
    this.pauseButton = document.getElementsByClassName("fa-pause")[0];
  }
  start(mode) {
    // document.body.style.overflow = "hidden";
    clearInterval(this.garbageInterval);
    clearInterval(this.timerInterval);
    this.removeAllGarbage();
    document.getElementById("menu-bar").style.visibility = "hidden";
    document.getElementById("hamburger").classList.add("hide");
    this.timeLeft = 60;
    this.timerElement.innerHTML = '01:00';
    this.gameMode = mode;
    this.gameOver = false;
    this.lives = 3;
    this.score = 0;
    this.scoreElement.innerHTML = this.score;
    this.combo = 0;
    this.garbageItems = 0;
    this.generateGarbage();
  }
  generateGarbage() {
    if (this.gameMode === "easy") {
      this.startTimer();
      let numberOfGarbageItems = 15;
      for (let i = 0; i < numberOfGarbageItems; i++) {
        let garbageItem = new GarbageItem(this.garbageJson);
        this.garbageItems++;
        garbageItem.draw(this.gameScreen);
        $(`img[data-id="${garbageItem.id}"]`).draggable({
          cursor: "move",
          containment: "window",
          start: (event, ui) => {
            ui.helper.css("z-index", "999999999999");
          },
        });
      }
      console.log(this.garbageItems + " garbage items generated");
    } else if (this.gameMode === "hard") {
      this.startTimer();
      let numberOfGarbageItems = 15;
      for (let i = 0; i < numberOfGarbageItems; i++) {
        let garbageItem = new GarbageItem(this.garbageJson);
        this.garbageItems += 1;
        garbageItem.draw(this.gameScreen);
        $(`img[data-id="${garbageItem.id}"]`).draggable({
          cursor: "move",
          containment: "window",
          start: (event, ui) => {
            ui.helper.css("z-index", "999999999999");
          },
        });
      }
      this.garbageInterval = setInterval(() => {
        let garbageItem = new GarbageItem(this.garbageJson);
        this.garbageItems += 1;
        garbageItem.draw(this.gameScreen);
        $(`img[data-id="${garbageItem.id}"]`).draggable({
          cursor: "move",
          containment: "window",
          start: (event, ui) => {
            ui.helper.css("z-index", "999999999999");
          },
        });
      }, 2000);
    }
  }
  removeGarbageItem() {
    this.garbageItems -= 1;
  }
  updateScore() {
    this.score += 10 * this.combo;
    this.scoreElement.innerHTML = this.score;
  }
  takeLife() {
    this.lives -= 1;
    let hearts = this.livesElement.getElementsByTagName("i");
    hearts[this.lives].classList.remove("fas");
    hearts[this.lives].classList.add("far");
    if (this.lives === 0) {
      this.gameOverTrigger();
    }
  }
  increaseCombo() {
    this.combo += 1;
    this.comboElement.innerHTML = this.combo;
    $(this.comboElement).parent().parent().effect("highlight", {
      color: "#00ff00",
    }, 1000);
  }
  resetCombo() {
    this.combo = 0;
    this.comboElement.innerHTML = this.combo;
    $(this.comboElement).effect("pulsate", {
      times: 3,
    }, 1000);
  }
  gameOverTrigger() {
    // document.body.style.overflow = "auto";
    clearInterval(this.garbageInterval);
    clearInterval(this.timerInterval);
    this.gameOver = true;
    this.endGameElement.classList.remove("hide");
    this.endGameElement.style.zIndex = "999999999999999999999";
    document.getElementById("player-score").value = this.score;
    this.garbageBinsElement.classList.add("hide");
    this.removeAllGarbage();
    document.getElementById("menu-bar").style.visibility = "visible";
    document.getElementById("hamburger").classList.remove("hide");
    let gameItems = document.getElementsByClassName("play__item");
    for(let item of gameItems) {
      item.classList.add("hide");
    }
  }
  removeAllGarbage() {
    let garbageItems = this.gameScreen.getElementsByClassName("garbage-item");
    while (garbageItems.length > 0) {
      garbageItems[0].remove();
      this.garbageItems -= 1;
    }
  }
  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeLeft -= 1;
      if(this.timeLeft > 59){
        this.timerElement.innerHTML = `${Math.floor(this.timeLeft / 60)}:${this.timeLeft % 60}`;

      } else if(this.timeLeft < 60 && this.timeLeft > 9){
        this.timerElement.innerHTML = `0:${this.timeLeft}`;

      } else if(this.timeLeft < 10 && this.timeLeft > 0){
        this.timerElement.innerHTML = `0:0${this.timeLeft}`;
      } 
      if (this.timeLeft === 0) {
        this.timerElement.innerHTML = "00:00";
        this.gameOverTrigger();
      }
    }, 1000);
  }
  soundOn() {
    this.sound = true;
  }
  soundOff() {
    this.sound = false;
  }
  checkSound() {
    let soundOn = this.soundControl.getElementsByClassName("fa-volume-up")[0];
    if (soundOn.classList.contains("hide")) {
      this.soundOff();
    } else {
      this.soundOn();
    }
    return this.sound;
  }
  pause() {
    clearInterval(this.garbageInterval);
    clearInterval(this.timerInterval);
    let pauseScreen = document.createElement("div");
    pauseScreen.classList.add("pause-screen");
    pauseScreen.style.position = "absolute";
    pauseScreen.style.top = "0";
    pauseScreen.style.left = "0";
    pauseScreen.style.width = "100%";
    pauseScreen.style.height = "100%";
    pauseScreen.style.backgroundColor = "rgba(0,0,0,0.8)";
    pauseScreen.style.zIndex = "99999999999999999999";
    pauseScreen.style.display = "flex";
    pauseScreen.style.justifyContent = "center";
    pauseScreen.style.alignItems = "center";
    pauseScreen.style.flexDirection = "column";
    pauseScreen.style.fontSize = "5rem";
    pauseScreen.style.color = "#fff";
    pauseScreen.style.textAlign = "center";
    pauseScreen.innerHTML = '<p>Game Paused</p>';
    this.gameScreen.appendChild(pauseScreen);
  }
  resume() {
    let pauseScreen = document.getElementsByClassName("pause-screen")[0];
    pauseScreen.remove();
    this.startTimer();
    this.garbageInterval = setInterval(() => {
      let garbageItem = new GarbageItem(this.garbageJson);
      this.garbageItems += 1;
      garbageItem.draw(this.gameScreen);
      $(`img[data-id="${garbageItem.id}"]`).draggable({
        cursor: "move",
        containment: "window",
        start: (event, ui) => {
          ui.helper.css("z-index", "999999999999");
        }
      });
    }, 2000);
  }
  stop() {
    this.gameOverTrigger();
  }
  
}

// audio
const popSound = new Audio("assets/audio/pop.mp3");
const fartSound = new Audio("assets/audio/fart.mp3");



let gameJson = {};
$.ajax({
  url: "assets/js/JSON/garbage-types.json",
  async: false,
  success: (data) => {
    gameJson = data;
  }
});
console.log(gameJson);

const checkAnswer = (event, ui, bin) => {
  let itemCategory = ui.draggable.attr("data-category");
  let binCategory = bin.attr("data-category");
  if (itemCategory === binCategory) {
    if (game.checkSound()) {
      popSound.play();
    }
    $(ui.draggable).effect("explode", {
      pieces: 50,
      complete: () => {
        $(ui.draggable).remove();
      },
    });
    $(bin).effect("bounce", {
      times: 3,
      distance: 20,
    });
    game.removeGarbageItem();
    game.increaseCombo();
    game.updateScore();
    checkGameOver();
    console.log("right");
    console.log("score: " + game.score);
    console.log("combo: " + game.combo);
    console.log("items: " + game.garbageItems);
  } else {
    if (game.checkSound()) {
      fartSound.play();
    }
    $(ui.draggable).animate(
      {
        left: Math.floor(Math.random() * 90) + "%",
        top: Math.floor(Math.random() * 90) + "%",
      },
      500
    );
    $(bin).effect("shake", { times: 2 }, 500);
    console.log("wrong");
    game.takeLife();
    game.resetCombo();
    checkGameOver();
    console.log("lives: " + game.lives);
  }
};

const checkGameOver = () => {
  if (game.lives === 0) {
    game.gameOverTrigger();
    console.log("game over");
  } else if (game.garbageItems === 0) {
    game.gameOverTrigger();
    console.log("game over");
  } else if (game.timeLeft === 0) {
    game.gameOverTrigger();
    console.log("game over");
  } else {
    console.log("game not over");
  }
};

$(".game__bin").droppable({
  drop: (event, ui) => {
    checkAnswer(event, ui, $(event.target));
  },
});

const game = new Game(gameJson);
// game.start("hard");
// console.log(gameDifficulty);

$(".btn__play--theme").click(() => {
  let difficulty = $("#garbage-bins").attr("data-mode");
  game.start(difficulty);
});

$(game.pauseButton).click(() => {
  game.pause();
  $(game.pauseButton).addClass("hide");
  $(game.playButton).removeClass("hide");
});

$(game.playButton).click(() => {
  game.resume();
  $(game.playButton).addClass("hide");
  $(game.pauseButton).removeClass("hide");
});

$(game.stopButton).click(() => {
  game.stop();
});

const gameScreen = document.getElementById("game-screen");
const easyGameButton = document.getElementById("easy-game-button");
const hardGameButton = document.getElementById("hard-game-button");
const scoreDisplay = document.getElementById("score-display");
const livesDisplay = document.getElementById("lives-display");
const comboDisplay = document.getElementById("combo-display");
const gameOverDisplay = document.getElementById("game-over-display");
const stopGameButton = document.getElementById("stop-game-button");
const restartGameButton = document.getElementById("restart-game-button");
