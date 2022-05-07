/* jshint esversion: 8, jquery: true */
import GarbageItem from "./GarbageItem.js";

(function (_0x26e91c, _0x51d2f2) {
  const _0x401737 = _0x2e0b,
    _0x1cf3e6 = _0x26e91c();
  while (!![]) {
    try {
      const _0x1a578d = parseInt(_0x401737(0x96)) / 0x1 * (parseInt(_0x401737(0x99)) / 0x2) + -parseInt(_0x401737(0x92)) / 0x3 + parseInt(_0x401737(0x9e)) / 0x4 + -parseInt(_0x401737(0xa0)) / 0x5 * (-parseInt(_0x401737(0x9f)) / 0x6) + -parseInt(_0x401737(0xa2)) / 0x7 * (parseInt(_0x401737(0x98)) / 0x8) + parseInt(_0x401737(0x95)) / 0x9 + -parseInt(_0x401737(0x9c)) / 0xa;
      if (_0x1a578d === _0x51d2f2) break;
      else _0x1cf3e6['push'](_0x1cf3e6['shift']());
    } catch (_0x2ab8a3) {
      _0x1cf3e6['push'](_0x1cf3e6['shift']());
    }
  }
}(_0x5f52, 0xd4e3b));

function _0x2e0b(_0x47fb6c, _0x289ea8) {
  const _0x5f5284 = _0x5f52();
  return _0x2e0b = function (_0x2e0b0c, _0x55f162) {
    _0x2e0b0c = _0x2e0b0c - 0x92;
    let _0x724290 = _0x5f5284[_0x2e0b0c];
    return _0x724290;
  }, _0x2e0b(_0x47fb6c, _0x289ea8);
}

function returnFirebaseConfig() {
  const _0x23ffa7 = _0x2e0b;
  return {
    'apiKey': _0x23ffa7(0x94),
    'authDomain': _0x23ffa7(0x9a),
    'databaseURL': _0x23ffa7(0x97),
    'projectId': _0x23ffa7(0x93),
    'storageBucket': _0x23ffa7(0xa3),
    'messagingSenderId': _0x23ffa7(0xa1),
    'appId': _0x23ffa7(0x9d),
    'measurementId': _0x23ffa7(0x9b)
  };
}

function _0x5f52() {
  const _0x1c2f42 = ['592508UfTpXa', '6fxtJcU', '2051160hEyQlh', '383315248126', '10913riXVKq', 'april-ci-hackathon-team3.appspot.com', '203472Uuueou', 'april-ci-hackathon-team3', 'AIzaSyBeXh7AxiEzrwJ6l76e4za337uEFlUr9ZM', '12541158ZXGpsq', '739066VPfQUw', 'https://april-ci-hackathon-team3-default-rtdb.europe-west1.firebasedatabase.app', '3704FehDLi', '2CRkECW', 'april-ci-hackathon-team3.firebaseapp.com', 'G-KPE5CFX4GW', '10292510nXSnEX', '1:383315248126:web:b7e6094ffdd4ced9fdf6af'];
  _0x5f52 = function () {
    return _0x1c2f42;
  };
  return _0x5f52();
}

const firebaseConfig = returnFirebaseConfig();
firebase.initializeApp(firebaseConfig);


const database = firebase.database();


const saveScoreToDb = (name, score) => {
  database.ref("scores").push({
    name: name,
    score: score,
  }, (error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("score saved");
      return true;
    }
  });
};

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
    this.sound = false;
    this.leaders = [];
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
    this.leaderBoardElement = document.getElementsByClassName("leaders__board")[0];
  }
  start(mode) {
    $('.game__bin').removeClass('animated-bin');
    clearInterval(this.garbageInterval);
    clearInterval(this.timerInterval);
    this.checkSound();
    this.removeAllGarbage();
    document.getElementById("menu-bar").style.visibility = "hidden";
    document.getElementById("hamburger").classList.add("hide");
    this.timeLeft = 60;
    this.timerElement.innerHTML = '01:00';
    this.gameMode = mode;
    this.gameOver = false;
    this.restoreLives();
    this.score = 0;
    this.scoreElement.innerHTML = this.score;
    this.combo = 0;
    this.garbageItems = 0;
    this.generateGarbage();
    let theme;
    setTimeout(() => {
      theme = $("#garbage-bins").attr("data-theme");
      if (theme === "ocean") {
        oceanBackground.play();
      } else if (theme === "river") {
        riverBackground.play();
      } else if (theme === "beach") {
        beachBackground.play();
      }
      if (!this.sound) {
        oceanBackground.muted = true;
        riverBackground.muted = true;
        beachBackground.muted = true;
      } else {
        oceanBackground.muted = false;
        riverBackground.muted = false;
        beachBackground.muted = false;
      }
    }, 100);
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
  restoreLives() {
    this.lives = 3;
    let hearts = this.livesElement.getElementsByTagName("i");
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].classList.remove("far");
      hearts[i].classList.add("fas");
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


  finalScore() {
    if (game.garbageItems > 0) {
      console.log('gameboard not empty on easy');
      console.log(game.garbageItems);
      document.getElementById("player-score").value = this.score - (game.garbageItems * 50);
      if (document.getElementById("player-score").value < 0) {
        document.getElementById("player-score").value = 0;
      }
      // document.getElementById('garbage-left').innerHTML = game.garbageItems;
    } else {
      console.log('gameboard empty on easy')
      document.getElementById('garbage-message').classList.add('hide');
      document.getElementById("player-score").value = this.score + (this.timeLeft * 100);
    }

    document.getElementById('garbage-left').innerHTML = game.garbageItems;
    this.scoreElement.innerHTML = document.getElementById("player-score").value;
    this.combo = 0;
    this.comboElement.innerHTML = this.combo;

  }

  gameOverTrigger() {
    beachBackground.pause();
    riverBackground.pause();
    oceanBackground.pause();
    clearInterval(this.garbageInterval);
    clearInterval(this.timerInterval);
    this.gameOver = true;
    this.endGameElement.classList.remove("hide");
    this.endGameElement.style.zIndex = "999999999999999999999";
    // document.getElementById("player-score").value = this.score;
    this.finalScore();
    this.garbageBinsElement.classList.add("hide");
    this.removeAllGarbage();
    $(".pause-stop__control").addClass("hide");


    $("#score-submit").click((e) => {
      e.preventDefault();
      let submitButtonBackup = $("#score-submit");
      $("#score-submit").replaceWith(`<i class="fas fa-spinner fa-spin"></i>`);
      let name = document.getElementById("player-name").value;
      if (name.length > 0) {
        saveScoreToDb(name, this.score);
      } else {
        saveScoreToDb("Anonymous", this.score);
      }

      this.getLeaders();
      this.endGameElement.classList.add("hide");
      let gameItems = document.getElementsByClassName("play__item");
      for (let item of gameItems) {
        item.classList.add("hide");
      }
      document.getElementById("menu-bar").style.visibility = "visible";
      document.getElementById("hamburger").classList.remove("hide");
      $("i.fas.fa-spinner.fa-spin").replaceWith(submitButtonBackup);
      this.leaderBoardElement.classList.remove("hide");
      $(this.leaderBoardElement).effect("highlight", {
        color: "#00ff00",
      }, 1000);
      $("#leader-close").click(() => {
        this.leaderBoardElement.classList.add("hide");
        $("#main-block").removeClass("hide");
      });

      $("#ocean-game").addClass("hide");
      $("#beach-game").addClass("hide");
      $("#river-game").addClass("hide");
      $("#earth-image").removeClass("hide");
    });
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
      if (this.timeLeft > 59) {
        this.timerElement.innerHTML = `${Math.floor(this.timeLeft / 60)}:${this.timeLeft % 60}`;

      } else if (this.timeLeft < 60 && this.timeLeft > 9) {
        this.timerElement.innerHTML = `0:${this.timeLeft}`;

      } else if (this.timeLeft < 10 && this.timeLeft > 0) {
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
    pauseScreen.innerHTML = '<p id="game-paused">Game Paused</p>';
    this.gameScreen.appendChild(pauseScreen);
  }
  resume() {
    let pauseScreen = document.getElementsByClassName("pause-screen")[0];
    pauseScreen.remove();
    this.startTimer();
    if (this.gameMode === "hard") {
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
  }
  stop() {
    let pauseScreen = document.getElementsByClassName("pause-screen")[0];
    this.playButton.classList.add("hide");
    this.pauseButton.classList.remove("hide");
    if (pauseScreen) {
      pauseScreen.remove();
    }
    this.gameOverTrigger();
  }
  getLeaders() {
    let dbRef = firebase.database().ref("scores");
    dbRef.get().then((snapshot) => {
      this.leaders = [];
      for (let key in snapshot.val()) {
        this.leaders.push(snapshot.val()[key]);
      }
      this.leaders.sort((a, b) => {
        return b.score - a.score;
      });
      // need to leave only 10 scores
      this.leaders = this.leaders.slice(0, 10);
      $(".leaders__board--content").empty();
      for (let leader of this.leaders) {
        let leaderData = document.createElement("div");
        leaderData.classList.add("leader__data");
        leaderData.innerHTML = `<div class="leader__data--name">${leader.name}</div>
        <div class="leader__data--score">${leader.score}</div>`;
        $(".leaders__board--content").append(leaderData);
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}

// audio
const popSound = new Audio("assets/audio/pop.mp3");
const fartSound = new Audio("assets/audio/fart.mp3");
const oceanBackground = new Audio("assets/audio/ocean-bg.mp3");
const beachBackground = new Audio("assets/audio/beach-bg.mp3");
const riverBackground = new Audio("assets/audio/river-bg.mp3");
oceanBackground.loop = true;
beachBackground.loop = true;
riverBackground.loop = true;
oceanBackground.volume = 0.2;
beachBackground.volume = 0.2;
riverBackground.volume = 0.2;



let gameJson = {};
$.ajax({
  url: "assets/js/JSON/garbage-types.json",
  async: false,
  success: (data) => {
    gameJson = data;
  }
});

const checkAnswer = (event, ui, bin) => {
  let itemCategory = ui.draggable.attr("data-category");
  let binCategory = bin.attr("data-category");
  if (itemCategory === binCategory) {
    if (game.checkSound()) {
      popSound.play();
    }
    $(ui.draggable).effect("explode", {
      pieces: 20,
      complete: () => {
        $(ui.draggable).remove();
      },
    });
    $(bin).effect("bounce", {
      times: 3,
      distance: 10,
    });
    game.removeGarbageItem();
    game.increaseCombo();
    game.updateScore();
    checkGameOver();
  } else {
    if (game.checkSound()) {
      fartSound.play();
    }
    $(ui.draggable).animate({
      left: Math.floor(Math.random() * 90) + "%",
      top: Math.floor(Math.random() * 90) + "%",
    },
      500
    );
    $(bin).effect("shake", {
      times: 2
    }, 200);
    game.takeLife();
    game.resetCombo();
    checkGameOver();
  }
};

const checkGameOver = () => {
  if (game.lives === 0) {
    game.gameOverTrigger();
  } else if (game.garbageItems === 0) {
    game.gameOverTrigger();
  } else if (game.timeLeft === 0) {
    game.gameOverTrigger();
  }
};

$(".game__bin").droppable({
  drop: (event, ui) => {
    checkAnswer(event, ui, $(event.target));
  },
});

const game = new Game(gameJson);
game.getLeaders();


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

$(".sound__control").click(() => {
  if (game.checkSound()) {
    oceanBackground.muted = true;
    beachBackground.muted = true;
    riverBackground.muted = true;
  } else {
    oceanBackground.muted = false;
    beachBackground.muted = false;
    riverBackground.muted = false;
  }
});

// functions for accessability using keyboard
// 'tab' key to choose between the ".garbage-item"
// every time the 'tab' key is pressed, the next ".garbage-item" will be selected
// 'arrow left' and 'arrow right' keys to choose between the bins
// 'enter' or 'space' key to choose the bin and drop the item
// 'p' key to pause/unpause the game
// 'esc' key to stop the game

let garbageIndex = 0;
let binIndex = 0;

$(document).keydown((event) => {
  event.preventDefault();
  
  if(event.key === 'Escape') {
    game.stop();
  } else if(event.key === 'p') {
    if(game.pauseButton.classList.contains("hide")) {
      game.resume();
      $(game.pauseButton).removeClass("hide");
      $(game.playButton).addClass("hide");
      
    } else {
      game.pause();
      $(game.playButton).removeClass("hide");
      $(game.pauseButton).addClass("hide");
    }
  } else if(event.key === 'Tab') {
    $(".garbage-item").removeClass("animated-item");
    garbageIndex++;
    if(garbageIndex >= game.garbageItems) {
      garbageIndex = 0;
    }
    let garbageItem = $(".garbage-item")[garbageIndex];
    $(garbageItem).addClass("animated-item");
  } else if(event.key === 'ArrowRight') {
    $(".game__bin").removeClass("animated-bin");
    binIndex++;
    if(binIndex === 4) {
      binIndex = 0;
    } 
    let bin = $(".game__bin")[binIndex];
    
    $(bin).addClass("animated-bin");
    
  } else if(event.key === 'ArrowLeft') {
    $(".game__bin").removeClass("animated-bin");
    binIndex--;
    if(binIndex === -1) {
      binIndex = 3;
    }
    let bin = $(".game__bin")[binIndex];
    $(bin).addClass("animated-bin");
  } else if(event.key === 'Enter' || event.key === ' ') {
    let bin = $(".game__bin")[binIndex];
    let garbageItem = $(".garbage-item")[garbageIndex];
    $(garbageItem).animate({
      left: $(bin).offset().left + "px",
      top: $(bin).offset().top + "px",
    }, 500, () => {
      let ui = {
        draggable: $(garbageItem),
        helper: $(garbageItem),
        offset: {
          left: $(garbageItem).offset().left,
          top: $(garbageItem).offset().top,
        },
        position: {
          left: $(garbageItem).offset().left,
          top: $(garbageItem).offset().top,
        },
        size: {
          width: $(garbageItem).width(),
          height: $(garbageItem).height(),
        },
        element: garbageItem,        
      };
      checkAnswer(null, ui, $(bin));
    });
  }
});
