// Borrowed General structure from following tutorial:
// https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9

function interactiveCarousel() {
  let itemClassName = "carousel-img";
  let items = document.getElementsByClassName(itemClassName);
  let itemCount = items.length;
  let current = 0;

  setInitialClasses();
  carouselButtonListeners();

  function setInitialClasses() {
    items[current].classList.add("active");
  }

  function carouselButtonListeners() {
    let next = document.querySelector(".carousel-button-next");
    let prev = document.querySelector(".carousel-button-prev");

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  function moveNext() {
    let original = current;
    current = (current + 1) % itemCount;  // Wrap around with mod operator.
    focusImage(original, current);
  }

  function movePrev(arg) {
    let original = current;

    current = (current - 1) % itemCount;

    // Avoid negative indices.
    if (current < 0) current += itemCount;

    focusImage(original, current);
  }

  function focusImage(original, current) {
    items[original].classList.remove("active")
    items[current].classList.add("active")
  }

}

interactiveCarousel();
