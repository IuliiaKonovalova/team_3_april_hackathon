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
        this.garbageItems = [];
        this.lives = 3;
        this.score = 0;
        this.combo = 0;
        this.gameMode = "easy";
        this.gameOver = false;
        this.gameScreen = document.getElementById("game-screen");
    }
    start(mode) {
        this.gameMode = mode;
        this.gameOver = false;
        this.lives = 3;
        this.score = 0;
        this.combo = 0;
        this.garbageItems = [];
        this.generateGarbage();        
    }
    generateGarbage() {
        if(this.gameMode === "easy") {
            let numberOfGarbageItems = 15;
            for(let i = 0; i < numberOfGarbageItems; i++) {
                let garbageItem = new GarbageItem(this.garbageJson);
                this.garbageItems.push(garbageItem);
                garbageItem.draw(this.gameScreen);
            }
        } else if(this.gameMode === "hard") {
            let numberOfGarbageItems = 15;
            for(let i = 0; i < numberOfGarbageItems; i++) {
                let garbageItem = new GarbageItem(this.garbageJson);
                this.garbageItems.push(garbageItem);
                garbageItem.draw(this.gameScreen);
                setTimeout(() => {
                    this.garbageItems.shift();
                    garbageItem.remove(this.gameScreen);
                }, 5000*i);
            }
            setInterval(() => {
                let garbageItem = new GarbageItem(this.garbageJson);
                this.garbageItems.push(garbageItem);
                garbageItem.draw(this.gameScreen);
                setTimeout(() => {
                    this.garbageItems.shift();
                    garbageItem.remove(this.gameScreen);
                }, 5000);
            }, 1000);
        }
    }
    removeGarbageItem(garbageItem) {
        this.garbageItems.shift();
        garbageItem.remove(this.gameScreen);
    }
    updateScore(score) {
        this.score += score;
    }
    updateLives(lives) {
        this.lives += lives;
    }
    updateCombo(combo) {
        this.combo += combo;
    }
    gameOver() {
        this.gameOver = true;
    }
}

const redBin = document.getElementById("red-bin");
const blueBin = document.getElementById("blue-bin");
const greenBin = document.getElementById("green-bin");

let testJson = {
  "recyclable": {
    box: "assets/test/box.png",
    paper: "assets/test/paper.png",
  },
  "soft-plastic": {
    bottle: "./assets/test/bottle.png",
    cup: "./assets/test/cup.png",
  },
  "organic": {
    banana: "./assets/test/banana.png",
    apple: "./assets/test/apple.png",
  },
};


$(redBin).droppable({
  drop: (event, ui) => {
    let itemCategory = ui.draggable.attr("data-category");
    if (itemCategory === "organic") {
      $(ui.draggable).effect("explode", {
        pieces: 50,
        complete: () => {
          $(ui.draggable).remove();
        },
      });
      $(redBin).effect("bounce", {
        times: 3,
        distance: 20,
      });

      console.log("right");
    } else {
      $(ui.draggable).animate(
        {
          left: Math.floor(Math.random() * $(window).width()),
          top: Math.floor(Math.random() * $(window).height()),
        },
        500
      );
      $(redBin).effect("shake", { times: 2 }, 500);
      console.log("wrong");
    }
  },
});

$(blueBin).droppable({
  drop: (event, ui) => {
    let itemCategory = ui.draggable.attr("data-category");
    if (itemCategory === "soft-plastic") {
      $(ui.draggable).effect("explode", {
        pieces: 50,
        complete: () => {
          $(ui.draggable).remove();
        },
      });
      $(blueBin).effect("bounce", {
        times: 3,
        distance: 20,
      });

      console.log("right");
    } else {
      $(ui.draggable).animate(
        {
          left: Math.floor(Math.random() * $(window).width()),
          top: Math.floor(Math.random() * $(window).height()),
        },
        500
      );
      $(blueBin).effect("shake", { times: 2 }, 500);
      console.log("wrong");
    }
  },
});

$(greenBin).droppable({
  drop: (event, ui) => {
    let itemCategory = ui.draggable.attr("data-category");
    if (itemCategory === "recyclable") {
      $(ui.draggable).effect("explode", {
        pieces: 50,
        complete: () => {
          $(ui.draggable).remove();
        },
      });
      $(greenBin).effect("bounce", {
        times: 3,
        distance: 20,
      });

      console.log("right");
    } else {
      $(ui.draggable).animate(
        {
          left: Math.floor(Math.random() * $(window).width()),
          top: Math.floor(Math.random() * $(window).height()),
        },
        500
      );
      $(greenBin).effect("shake", { times: 2 }, 500);
      console.log("wrong");
    }
  },
});

const game = new Game(testJson);
game.start("easy");

$("img.garbage-item").draggable({
  cursor: "move",
  start: (event, ui) => {
    ui.helper.css("z-index", "100");
  },
});