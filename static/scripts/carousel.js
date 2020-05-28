/* High level carousel logic borrowed from Marcus Michaels' tutorial
"How to build a carousel from scratch in vanilla JS" (2019-01-13).

https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
*/
function interactiveCarousel() {
  let itemClassName = "carousel-img";
  let captionClassName = "carousel-img-caption";
  const toggleClassName = "active";
  let items = document.getElementsByClassName(itemClassName);
  let captions = document.getElementsByClassName(captionClassName);
  let itemCount = items.length;
  let current = 0;  // Start at the first item/caption.

  setInitialClasses();
  carouselButtonListeners();

  // Keep calling moveNext() to get "autoscroll" effect.
  let timer = setInterval(moveNext, 3000)

  function setInitialClasses() {
    items[current].classList.add(toggleClassName);
    captions[current].classList.add(toggleClassName);
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

  function movePrev() {
    let original = current;

    current = (current - 1) % itemCount;

    // Avoid negative indices.
    if (current < 0) current += itemCount;

    focusImage(original, current);
  }

  function focusImage(original, current) {
    items[original].classList.remove(toggleClassName)
    items[current].classList.add(toggleClassName)
    captions[original].classList.remove(toggleClassName)
    captions[current].classList.add(toggleClassName)
  }

}

interactiveCarousel();
