// to prevent running script before DOM is rendered (only if script.js is in the <head> tag)
document.addEventListener("DOMContentLoaded", () => {
  // variables

  const playBtn = document.getElementsByClassName('play-btn');
  const mainBlock = document.getElementById('main-block');
  const main = document.getElementById('main');
  const difficultyBlock = document.getElementById('difficulty-block');
  const difficultyBtnEasy = document.getElementById('difficulty-easy');
  const difficultyBtnHard = document.getElementById('difficulty-hard');
  const rulesLink = document.getElementById('rules__link');

  const rulesSection = document.getElementById('rules');



  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll(".carousel__slide");

  const prevButton = document.getElementById("carousel-prev");
  const nextButton = document.getElementById("carousel-next");
  const beachTheme = document.getElementById("beach-theme");
  const riverTheme = document.getElementById("river-theme");
  const oceanTheme = document.getElementById("ocean-theme");

  const ecoText = document.getElementById("eco__text");
  // Set the current carousel slide
  let current = 0;

  console.log(playBtn);

  for (let btn of playBtn) {
    btn.addEventListener("click", () => {
      mainBlock.classList.add("hide");
      rulesSection.classList.add("hide");
      difficultyBlock.classList.remove("hide");
    });
  }

  rulesLink.addEventListener("click", () => {
    mainBlock.classList.add("hide");
    carousel.classList.add("hide");
    rulesSection.classList.remove("hide");

    fetchEcoFacts();
  });

  // If the user clicks easy level, hide the difficulty block and show the theme block
  difficultyBtnEasy.addEventListener("click", (e) => {
    carousel.classList.remove("hide");
    difficultyBlock.classList.add("hide");
    document.getElementById("garbage-bins").setAttribute("data-mode", "easy");
  });

  // If the user clicks hard level, hide the difficulty block and show the theme block
  difficultyBtnHard.addEventListener("click", (e) => {
    carousel.classList.remove("hide");
    difficultyBlock.classList.add("hide");
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
    fetch(
        "https://raw.githubusercontent.com/IuliiaKonovalova/team_3_april_hackathon/225c5e309bab8d3770c8200ed45e34f446f8ddea/assets/js/JSON/eco-facts.json"
      )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let category = Object.keys(data.category)[
          Math.floor(Math.random() * Object.keys(data.category).length)
        ];
        let fact =
          data.category[category][
            Math.floor(Math.random() * data.category[category].length)
          ].text;
        ecoText.innerText = fact;
      });
  }

  // Function comes from https://stackoverflow.com/questions/1462138/event-listener-for-when-element-becomes-visible
  function onVisible(element, callback) {
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          callback(element);
          observer.disconnect();
        }
      });
    }).observe(element);
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


  // Iteration through every button element in HTML to execute an openModal function for elements with specified selector
  document.querySelectorAll('[data-modal-target]').forEach(button => {
    button.addEventListener('click', () => {

      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
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

  // DOM CONTROL

  /** Function adds class '.active' to modal argument to control the popup window operation, or returns nothing if modal element is null */
  function openModal(modal) {
    if (modal === null) return;
    modal.classList.add("active");
    document.getElementById("overlay").classList.add("active");
  }

  /** Function removes class '.active' to modal argument to control the popup window operation, or returns nothing if modal element is null */
  function closeModal(modal) {
    if (modal === null) return;
    modal.classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  }

  onVisible(rulesSection, () => {
    main.addEventListener('click', function (e) {
      console.log("click");
      if (rulesSection.classList.contains("hide") === false) {
        if (!rulesSection.contains(e.target)) {
          mainBlock.classList.remove('hide');
          rulesSection.classList.add('hide');
          difficultyBlock.classList.add('hide');
        }
      }
    });
  });


  startSlide();

  // Go to beach mode
  beachTheme.addEventListener("click", () => {
    carousel.classList.add("hide");
    document.getElementById("earth-image").classList.add("hide");
    document.getElementById("beach-game").classList.remove("hide");
    document.getElementById("ocean-game").classList.add("hide");
  });

  // Go to river mode
  riverTheme.addEventListener("click", () => {
    carousel.classList.add("hide");
    document.getElementById("earth-image").classList.add("hide");
    document.getElementById("river-game").classList.remove("hide");
  });

  // Go to ocean mode
  oceanTheme.addEventListener("click", () => {
    carousel.classList.add("hide");
    document.getElementById("earth-image").classList.add("hide");
    document.getElementById("ocean-game").classList.remove("hide");
    document.getElementById("beach-game").classList.add("hide");
    document.getElementById("garbage-bins").classList.remove("hide");
  });
});