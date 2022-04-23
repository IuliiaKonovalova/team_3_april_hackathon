/* jshint esversion: 6 */
import GarbageItem from "./GarbageItem.js";

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
  }
  start(mode) {
    clearInterval(this.garbageInterval);
    clearInterval(this.timerInterval);
    this.timeLeft = 60;
    this.gameMode = mode;
    this.gameOver = false;
    this.lives = 3;
    this.score = 0;
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
            ui.helper.css("z-index", "100");
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
  }
  takeLife() {
    this.lives -= 1;
  }
  increaseCombo() {
    this.combo += 1;
  }
  resetCombo() {
    this.combo = 0;
  }
  gameOverTrigger() {
    clearInterval(this.garbageInterval);
    clearInterval(this.timerInterval);
    this.gameOver = true;
  }
  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
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
    if (game.sound) {
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
    if (game.sound) {
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

const gameScreen = document.getElementById("game-screen");
const easyGameButton = document.getElementById("easy-game-button");
const hardGameButton = document.getElementById("hard-game-button");
const scoreDisplay = document.getElementById("score-display");
const livesDisplay = document.getElementById("lives-display");
const comboDisplay = document.getElementById("combo-display");
const gameOverDisplay = document.getElementById("game-over-display");
const stopGameButton = document.getElementById("stop-game-button");
const restartGameButton = document.getElementById("restart-game-button");
