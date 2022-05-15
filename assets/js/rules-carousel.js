  // Variables for feature tabs and content
  const tabsContainer = document.querySelector(".rules__tab--container");
  const tabs = document.querySelectorAll(".rules__tab");
  const tabsContent = document.querySelectorAll(".rules__content");

  // Variables for rules carousel
  const rulesCarouselSlides = document.querySelectorAll(".play__control--mode");
  const rulesCarouselPrev = document.getElementById("rules-carousel-prev");
  const rulesCarouselNext = document.getElementById("rules-carousel-next");

  // Set the current carousel slide
  let current = 0;

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