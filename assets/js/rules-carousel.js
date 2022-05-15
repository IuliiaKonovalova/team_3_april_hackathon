// Variables for rules carousel
const rulesCarouselSlides = document.querySelectorAll(".play__control--mode");
const rulesCarouselPrev = document.getElementById("rules-carousel-prev");
const rulesCarouselNext = document.getElementById("rules-carousel-next");

// Set the current carousel slide
let current = 0;



// Rules Carousel
// Click Previous Button
rulesCarouselPrev.addEventListener("click", function () {
  if (current === 0) {
    current = rulesCarouselSlides.length;
  }
  rulesSlidePrev();
});

// Click Next Button
rulesCarouselNext.addEventListener("click", function () {
  if (current === rulesCarouselSlides.length - 1) {
    current = -1;
  }
  rulesSlideNext();
});



// Start Slider the first rules
function rulesStartSlide() {
  rulesReset();
  rulesCarouselSlides[0].classList.replace(
    "play__control--hidden",
    "play__control--visible"
  );
}

// Previous Slide
function rulesSlidePrev() {
  rulesReset();
  rulesCarouselSlides[current - 1].classList.replace(
    "play__control--hidden",
    "play__control--visible"
  );
  current--;
}

// Next Slide
function rulesSlideNext() {
  rulesReset();
  rulesCarouselSlides[current + 1].classList.replace(
    "play__control--hidden",
    "play__control--visible"
  );
  current++;
}

// Reset all rules
function rulesReset() {
  for (let i = 0; i < rulesCarouselSlides.length; i++) {
    rulesCarouselSlides[i].classList.replace(
      "play__control--visible",
      "play__control--hidden"
    )
  }
}

rulesStartSlide()