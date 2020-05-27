// Borrowed General structure from following tutorial:
// https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9

function interactiveCarousel() {
  let itemClassName = "carousel-img";
  let items = document.getElementsByClassName(itemClassName);
  let itemCount = items.length;
  let slide = 0;

  setInitialClasses();
  carouselButtonListeners();

  function setInitialClasses() {
    // Treat list as a ring. Make the last item the one before the first.
    items[0].classList.add("active");
  }

  function carouselButtonListeners() {
    let next = document.querySelectorAll(".carousel-button-next")[0];
    let prev = document.querySelectorAll(".carousel-button-prev")[0];

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  function moveNext() {
    console.log("NEXT clicked");
  }

  function movePrev(arg) {
    console.log("PREV clicked");
  }

}

interactiveCarousel();
