document.addEventListener("DOMContentLoaded", () => {
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
});