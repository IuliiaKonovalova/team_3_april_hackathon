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
  const rulesLink = document.getElementById('rules__link');
  const rulesSection = document.getElementById('rules');
  const rulesCloseBtn = document.getElementById('rules__close');
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
  const garbageBins = document.getElementsByClassName('rules__bin')

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

  // Starts the game sequence on button clicks
  for (let btn of playBtn) {
    btn.addEventListener("click", () => {
      addHideClass();
      main.removeEventListener('click', rulesEventHandler);
      difficultyBlock.classList.remove("hide");
    });
  }

  // Displays Rules Section on user's clicks
  rulesLink.addEventListener("click", () => {
    main.addEventListener('click', rulesEventHandler);
    addHideClass();
    rulesSection.classList.remove("hide");

    fetchEcoFacts();
  });

  // If the user clicks easy level, hide the difficulty block and show the theme block
  difficultyBtnEasy.addEventListener("click", (e) => {
    addHideClass();
    carousel.classList.remove("hide");
    document.getElementById("garbage-bins").setAttribute("data-mode", "easy");
  });

  // If the user clicks hard level, hide the difficulty block and show the theme block
  difficultyBtnHard.addEventListener("click", (e) => {
    addHideClass();
    carousel.classList.remove("hide");
    document.getElementById("garbage-bins").setAttribute("data-mode", "hard");
  });

  // Fade animation;
  prevButton.addEventListener("click", () => {
    carousel.classList.add("fade");
  });

  nextButton.addEventListener("click", () => {
    carousel.classList.add("fade");
  });

  // slides.forEach(slide => {
  //   slide.addEventListener('click', () => {
  //     carousel.classList.add('hide');
  //     mainBlock.classList.remove('hide');
  //   })
  // })

  // Adds hide elements to main parts of UI
  function addHideClass() {
    document.getElementById("earth-image").classList.add("hide");
    document.getElementById("beach-game").classList.add("hide");
    document.getElementById("river-game").classList.add("hide");
    document.getElementById("garbage-bins").classList.add("hide");
    mainBlock.classList.add('hide');
    rulesSection.classList.add('hide');
    difficultyBlock.classList.add('hide');
    carousel.classList.add("hide");
    difficultyBlock.classList.add("hide");
  }

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

  // Event handler to close Rules Section
  function rulesEventHandler(event) {
    if (!rulesSection.classList.contains("hide")) {
      if (!rulesSection.contains(event.target) || rulesCloseBtn.contains(event.target)) {
        addHideClass();
        mainBlock.classList.remove('hide');
        main.removeEventListener('click', rulesEventHandler);
      }
    }
  }

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
    button.addEventListener('click', () => {
      if (button.id === "organic-bin") {
        modalText = "i'm organic";
      } else if (button.id === "plastic-bin") {
        modalText = "i'm plastic";
      } else if (button.id === "glass-bin") {
        modalText = "i'm glass";
      } else if (button.id === "paper-bin") {
        modalText = "i'm paper";
      }
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal, modalText);
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
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
      closeModal(modal);
    });
  });

  // Function adds class '.active' to modal argument to control the popup window operation, or returns nothing if modal element is null
  function openModal(modal, modalText) {
    if (modal === null) return;
    modal.classList.add("active");
    document.getElementById("overlay").classList.add("active");
    document.getElementById('modal-text').innerHTML = modalText;
    document.getElementById('modal-title').innerHTML = modalText;

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
    for (let item of playItems) {
      item.classList.remove("hide");
    }
  });

  // Go to river mode
  riverTheme.addEventListener("click", () => {
    addHideClass();
    document.getElementById("river-game").classList.remove("hide");

    for (let item of playItems) {
      item.classList.remove("hide");
    }
  });

  // Go to ocean mode
  oceanTheme.addEventListener("click", () => {
    addHideClass();
    document.getElementById("ocean-game").classList.remove("hide");

    for (let item of playItems) {
      item.classList.remove("hide");
    }
  });

  // Display creators GitHub links
  footerBtn.addEventListener('click', () => {
    footerContent.classList.toggle("hide");
  });

  console.log(soundBtn);
  // Displays sound icon
  soundBtn.addEventListener('click', () => {
    soundBtn.querySelectorAll('i').forEach(icon => {
      icon.classList.toggle('hide');
    });
  });



});