/* jshint esversion: 8, jquery: true */
import {
  addHideClass,
  myFunction,
} from './leaderboard-ops.js';


// to prevent running script before DOM is rendered (only if script.js is in the <head> tag)
document.addEventListener("DOMContentLoaded", () => {
  // variables
  const navBar = document.querySelector("#menu-bar");
  const hamburger = document.querySelector("#hamburger");
  const playBtn = document.getElementsByClassName('play-btn');
  const mainBlock = document.getElementById('main-block');
  const main = document.getElementById('main');
  const difficultyBlock = document.getElementById('difficulty-block');
  const difficultyBtnEasy = document.getElementById('difficulty-easy');
  const difficultyBtnHard = document.getElementById('difficulty-hard');
  const homePage = document.getElementById('home-link');

  const rulesSection = document.getElementById('rules');
  const rulesCloseBtn = document.getElementById('rules-close');
  const rulesLink = document.getElementById('rules__link');
  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll(".carousel__slide");
  const prevButton = document.getElementById("carousel-prev");
  const nextButton = document.getElementById("carousel-next");
  const beachTheme = document.getElementById("beach-theme");
  const riverTheme = document.getElementById("river-theme");
  const oceanTheme = document.getElementById("ocean-theme");
  const ecoText = document.getElementById("eco__text");
  const footerBtn = document.getElementById("footer-btn");
  const footerContent = document.getElementById("footer-content");
  const playItems = document.getElementsByClassName("play__item");
  const soundBtn = document.getElementById("sound-control");
  const leaderBoardLink = document.getElementById('leaders-link');
  const leaderBoard = document.getElementById('leaders-board');
  const leaderBoardClose = document.getElementById('leader-close');



  // Set the current carousel slide
  let current = 0;

  const toggleMenu = () => {
    navBar.classList.toggle("open");
    hamburger.classList.toggle("is-active");
    // disable page scrolling
    document.body.style.overflow = navBar.classList.contains("open") ? "hidden" : "auto";
  };
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }



  // Displays Home Page on user's clicks
  homePage.addEventListener("click", () => {
    if (hamburger.classList.contains("is-active")) {
      toggleMenu();
    }
    addHideClass();
    mainBlock.classList.remove("hide");
    document.getElementById("earth-image").classList.remove("hide");
    // closeFooter(footerContent);
  });


  // Displays Rules Section on user's clicks
  rulesLink.addEventListener("click", () => {
    if (hamburger.classList.contains("is-active")) {
      toggleMenu();
    }
    let sectionEventHandler = myFunction(rulesSection, rulesCloseBtn);
    main.addEventListener('click', sectionEventHandler);
    addHideClass();
    document.getElementById("earth-image").classList.remove("hide");
    rulesSection.classList.remove("hide");

    fetchEcoFacts();
    // closeFooter(footerContent);
  });



  // Starts the game sequence on button clicks
  for (let btn of playBtn) {
    btn.addEventListener("click", () => {
      addHideClass();
      document.getElementById("earth-image").classList.remove("hide");
      difficultyBlock.classList.remove("hide");
      let sectionEventHandler = myFunction(rulesSection, rulesCloseBtn);
      main.removeEventListener('click', sectionEventHandler);
      // closeFooter(footerContent);
    });
  }

  // Displays Leaders Board on user's click
  leaderBoardLink.addEventListener("click", () => {
    if (hamburger.classList.contains("is-active")) {
      toggleMenu();
    }
    let sectionEventHandler = myFunction(leaderBoard, leaderBoardClose);
    main.addEventListener('click', sectionEventHandler);
    addHideClass();
    document.getElementById("earth-image").classList.remove("hide");
    leaderBoard.classList.remove("hide");
    // closeFooter(footerContent);
  });

  // If the user clicks easy level, hide the difficulty block and show the theme block
  difficultyBtnEasy.addEventListener("click", (e) => {
    // closeFooter(footerContent);
    addHideClass();
    carousel.classList.remove("hide");
    document.getElementById("garbage-bins").setAttribute("data-mode", "easy");
  });

  // If the user clicks hard level, hide the difficulty block and show the theme block
  difficultyBtnHard.addEventListener("click", (e) => {
    addHideClass();
    carousel.classList.remove("hide");
    document.getElementById("garbage-bins").setAttribute("data-mode", "hard");
    // closeFooter(footerContent);
  });

  // Fade animation;
  prevButton.addEventListener("click", () => {
    carousel.classList.add("fade");
    // closeFooter(footerContent);
  });

  nextButton.addEventListener("click", () => {
    carousel.classList.add("fade");
    // closeFooter(footerContent);
  });

  // Reset all slides
  function reset() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.replace(
        "carousel__images--visible",
        "carousel__images--hidden"
      );
    }
  }

  // Start Slider the first image
  function startSlide() {
    reset();
    slides[0].classList.replace(
      "carousel__images--hidden",
      "carousel__images--visible"
    );
  }

  // Previous Slide
  function slidePrev() {
    reset();
    slides[current - 1].classList.replace(
      "carousel__images--hidden",
      "carousel__images--visible"
    );
    current--;
  }

  // Next Slide
  function slideNext() {
    reset();
    slides[current + 1].classList.replace(
      "carousel__images--hidden",
      "carousel__images--visible"
    );
    current++;
  }


  // Fetch text from eco-facts.json and display it to the user
  function fetchEcoFacts() {
    let ecoJson = {};
    $.ajax({
      url: "assets/js/JSON/eco-facts.json",
      async: false,
      success: (data) => {
        ecoJson = data;
      }
    });
    displayRandomFacts(ecoJson);
  }

  // Get json file and convert it's data for random display of eco-facts
  function displayRandomFacts(jsonFile) {
    let category = Object.keys(jsonFile.category)[
      Math.floor(Math.random() * Object.keys(jsonFile.category).length)
    ];
    let fact =
      jsonFile.category[category][
        Math.floor(Math.random() * jsonFile.category[category].length)
      ].text;
    ecoText.innerText = fact;
  }

  // jQuery function to display current year in the footer
  $(".footer__copyright").text(new Date().getFullYear());

  // Theme carousel
  // Click Previous Button
  prevButton.addEventListener("click", function () {
    if (current === 0) {
      current = slides.length;
    }
    slidePrev();
  });

  // Click Next Button
  nextButton.addEventListener("click", function () {
    if (current === slides.length - 1) {
      current = -1;
    }
    slideNext();
  });

  startSlide();

  // Go to beach mode
  beachTheme.addEventListener("click", () => {
    addHideClass();
    document.getElementById("beach-game").classList.remove("hide");
    document.getElementById("garbage-bins").setAttribute("data-theme", "beach");
    for (let item of playItems) {
      item.classList.remove("hide");
    }
  });

  // Go to river mode
  riverTheme.addEventListener("click", () => {
    addHideClass();
    document.getElementById("river-game").classList.remove("hide");
    document.getElementById("garbage-bins").setAttribute("data-theme", "river");

    for (let item of playItems) {
      item.classList.remove("hide");
    }
  });

  // Go to ocean mode
  oceanTheme.addEventListener("click", () => {
    addHideClass();
    document.getElementById("ocean-game").classList.remove("hide");
    document.getElementById("garbage-bins").setAttribute("data-theme", "ocean");

    for (let item of playItems) {
      item.classList.remove("hide");
    }
  });

  // Displays sound icon
  soundBtn.addEventListener('click', () => {
    soundBtn.querySelectorAll('i').forEach(icon => {
      icon.classList.toggle('hide');
    });
  });

  // Trigger footer content visibility
  document.addEventListener('click', (e) => {
    if (footerBtn.contains(e.target)) {
      if (footerContent.classList.contains('hide')) {
        openFooter(footerContent);
      } else {
        closeFooter(footerContent);
      }
    } else {
      if (!document.getElementById('footer-creators').contains(e.target)) {
        closeFooter(footerContent);
      }
    }
  });

  // Open footer content
  function openFooter(footer) {
    if (footer === null) return;
    footer.classList.remove('hide');
    footerBtn.innerHTML = `<i class="fas fa-arrow-alt-circle-down"></i>`;
  }

  // Close footer content
  function closeFooter(footer) {
    if (footer === null) return;
    footer.classList.add('hide');
    footerBtn.innerHTML = `<i class="fas fa-arrow-alt-circle-up"></i>`;
  }

});