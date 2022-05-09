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
  const rulesLink = document.getElementById('rules__link');
  const rulesSection = document.getElementById('rules');
  const rulesCloseBtn = document.getElementById('rules-close');
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
  // Variables for feature tabs and content
  const tabsContainer = document.querySelector(".rules__tab--container");
  const tabs = document.querySelectorAll(".rules__tab");
  const tabsContent = document.querySelectorAll(".rules__content");

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

  // Control Feature's section content
  tabsContainer.addEventListener("click", function (e) {
    changeTabContent(e);
  });

  /**
   * Switch content on tag click
   */
  const changeTabContent = function (e) {
    const clicked = e.target.closest(".rules__tab");
    if (!clicked) return;

    // Remove Active Class
    tabs.forEach((t) => t.classList.remove("rules__tab--active"));
    tabsContent.forEach((c) => c.classList.remove("rules__content--active"));

    // Activate Tab
    clicked.classList.add("rules__tab--active");

    // Activate Content
    document
      .querySelector(`.rules__content--${clicked.dataset.tab}`)
      .classList.add("rules__content--active");
  };


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

  // ----- Modal Functionality ----- //

  // Iteration through every button element in HTML to execute an openModal function for elements with specified selector
  document.querySelectorAll('[data-modal-target]').forEach(button => {
    let modalText;
    let modalHeading;
    button.addEventListener('click', () => {
      if (button.id === "organic-bin") {
        modalText = `
        <p>Organic matter comes from a living organism and when it is not living anymore, it will decay over time.</p>
        <br>
        <ul class="modal__bullet-points">
          <li>Fruit</li>
          <li>Vegetables</li>
          <li>Plants</li>
          <li>Meat & Fish</li>
          <li>Egg Shells</li>
        </ul>
        `;
        modalHeading = "<h2>Organic Bin</h2>";
      } else if (button.id === "plastic-bin") {
        modalText = `
        <p>Plastic - It is everywhere! Soft plastics and hard plastics can be recycled and turned into other items.</p>
        <br>
        <ul class="modal__bullet-points">
          <li>Shopping Bags</li>
          <li>Chip Packets</li>
          <li>Lolly Wrappers</li>
          <li>Plastic Toys</li>
          <li>Bottled Water</li>
          <li>Straws</li>
          <li>Takeaway Coffee Cups</li>
          <li>Cleaning Product Bottles</li>
        </ul>
        `;
        modalHeading = "<h2>Plastic Bin</h2>";
      } else if (button.id === "glass-bin") {
        modalText = `
        <p>Glass is a hard material that can be easily recycled and made into many new things. It is mainly made of silica, which is actually sand!</p>
        <br>
        <ul class="modal__bullet-points">
          <li>Glass Jars</li>
          <li>Wine & Beer Bottles</li>
          <li>Drinking Glasses</li>
          <li>Seeing Glasses</li>
          <li>Window Panes</li>
        </ul>
        `;
        modalHeading = "<h2>Glass Bin</h2>";
      } else if (button.id === "paper-bin") {
        modalText = `
        <p>Paper is a thin material and is mostly made of wood fibres from trees. Card is a heavy type of paper, known for being stiff and quite durable!</p>
        <br>
        <ul class="modal__bullet-points">
          <li>Cardboard Boxes</li>
          <li>Newspaper</li>
          <li>Project Card</li>
          <li>Envelopes</li>
          <li>Paper Shopping Bags</li>
          <li>Printer Paper</li>
          <li>Brown Paper Bags</li>
          <li>Tissue Paper</li>
          <li>Toilet Rolls</li>
        </ul>
        `;
        modalHeading = "<h2>Paper & Card Bin</h2>";
      }
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal, modalText, modalHeading);
    });
  });

  // Iteration through every button element in HTML to execute a closeModal function for elements with specified parent class
  document.querySelectorAll('[data-close-button]').forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal'); // looks for the closest parent with 'modal' class
      closeModal(modal);
    });
  });



  // Overlay event listener - iterates through elements with specified selector and executes the closeModal function if applicable
  document.getElementById('overlay').addEventListener('click', () => {
    console.log('click overlay');
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
      closeModal(modal);
    });
  });

  // Function adds class '.active' to modal argument to control the popup window operation, or returns nothing if modal element is null
  function openModal(modal, modalText, modalHeading) {
    if (modal === null) return;
    modal.classList.add("active");
    document.getElementById("overlay").classList.add("active");
    document.getElementById('modal-text').innerHTML = modalText;
    document.getElementById('modal-title').innerHTML = modalHeading;
  }

  /// Function removes class '.active' to modal argument to control the popup window operation, or returns nothing if modal element is null
  function closeModal(modal) {
    if (modal === null) return;
    modal.classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  }

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