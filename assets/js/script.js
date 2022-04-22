// variables
const playBtn = document.getElementById('play-btn');
const mainBlock = document.getElementById('main-block');

const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.carousel__slide');

const prevButton = document.querySelector('#carousel-prev');
const nextButton = document.querySelector('#carousel-next');
// Set the current carousel slide
let current = 0;

playBtn.addEventListener('click', () => {
  mainBlock.classList.add('hide');
  carousel.classList.remove('hide');
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



startSlide();