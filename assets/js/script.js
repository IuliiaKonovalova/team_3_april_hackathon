// variables
const playBtn = document.getElementById('play-btn');
<<<<<<< HEAD
const mainTitle = document.getElementById('main-title');
const rulesLink = document.getElementById('rules__link');
=======
const mainBlock = document.getElementById('main-block');
>>>>>>> 9bc887a0b014a1c8d86a682f86f2286311880609

const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.carousel__slide');
const rulesSection = document.getElementById('rules');

const prevButton = document.querySelector('#carousel-prev');
const nextButton = document.querySelector('#carousel-next');

const ecoText = document.getElementById("eco__text");
// Set the current carousel slide
let current = 0;

playBtn.addEventListener('click', () => {
  mainBlock.classList.add('hide');
  carousel.classList.remove('hide');
})

rulesLink.addEventListener('click', () => {
  playBtn.classList.add('hide');
  mainTitle.classList.add('hide');
  rulesSection.classList.remove('hide');

  fetchEcoFacts();
})


// Fade animation;
prevButton.addEventListener('click', () => {
  carousel.classList.add('fade');
})

nextButton.addEventListener('click', () => {
  carousel.classList.add('fade');
})

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    carousel.classList.add('hide');
    mainBlock.classList.remove('hide');
  })
})


// Reset all slides
function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.replace(
      'carousel__images--visible',
      'carousel__images--hidden'
    );
  }
}

// Start Slider the first image
function startSlide() {
  reset();
  slides[0].classList.replace(
    'carousel__images--hidden',
    'carousel__images--visible'
  );
}

// Previous Slide
function slidePrev() {
  reset();
  slides[current - 1].classList.replace(
    'carousel__images--hidden',
    'carousel__images--visible'
  );
  current--;
}

// Next Slide
function slideNext() {
  reset();
  slides[current + 1].classList.replace(
    'carousel__images--hidden',
    'carousel__images--visible'
  );
  current++;
}

// Click Previous Button
prevButton.addEventListener('click', function () {
  if (current === 0) {
    current = slides.length;
  }
  slidePrev();
});

// Click Next Button
nextButton.addEventListener('click', function () {
  if (current === slides.length - 1) {
    current = -1;
  }
  slideNext();
});

// fetch text from eco-facts.json and display it to the user
function fetchEcoFacts() {
  fetch("https://raw.githubusercontent.com/IuliiaKonovalova/team_3_april_hackathon/225c5e309bab8d3770c8200ed45e34f446f8ddea/assets/js/JSON/eco-facts.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      let category = Object.keys(data.category)[Math.floor(Math.random() * Object.keys(data.category).length)];
      let fact = data.category[category][Math.floor(Math.random() * data.category[category].length)].text;
      ecoText.innerText = fact;
    });
}



startSlide();