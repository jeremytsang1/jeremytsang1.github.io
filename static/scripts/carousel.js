/* High level carousel logic borrowed from Marcus Michaels' tutorial
"How to build a carousel from scratch in vanilla JS" (2019-01-13).

https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
*/
function interactiveCarousel() {
  const itemClassName = "carousel-img";
  const captionClassName = "carousel-img-caption";
  const toggleClassName = "active"; // Class name that applies styling.
  let items = document.getElementsByClassName(itemClassName);
  let captions = document.getElementsByClassName(captionClassName);
  let itemCount = items.length;
  let current = 0;  // Start at the first item/caption.

  setInitialClasses();
  carouselButtonListeners();

  // Keep calling moveNext() to get "autoscroll" effect.
  let timer = setInterval(moveNext, 9000)

  /**
   * Assumes none of the items or captions have the toggleClassName at the
   * start when called. Appends said class name to the initial items/caption.
   * @return {null}
   */
  function setInitialClasses() {
    items[current].classList.add(toggleClassName);
    captions[current].classList.add(toggleClassName);
  }

  /**
   * Setup the Event listeners for the two elements reponsible for swithcing to
   * the next and previous images.
   * @return {null}
   */
  function carouselButtonListeners() {
    let next = document.querySelector(".carousel-button-next");
    let prev = document.querySelector(".carousel-button-prev");

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  /**
   * Unfocuses the current image and focuses the one sequentially after it
   * while updating the current index.
   * @return {null}
   */
  function moveNext() {
    let original = current;
    current = (current + 1) % itemCount;  // Wrap around with mod operator.
    focusImage(original, current);
  }

  /**
   * Unfocuses the current image and focuses the one sequentially before it
   * while updating the current index.
   * @return {null}
   */
  function movePrev() {
    let original = current;

    current = (current - 1) % itemCount;

    // Avoid negative indices.
    if (current < 0) current += itemCount;

    focusImage(original, current);
  }

  /**
   * Remove the styling class name from the original item/caption and add it to
   * the current one instead.
   * @param {number} original - index of the original item/caption.
   * @param {number} current - index of the current item/caption
   * @return {null}
   */
  function focusImage(original, current) {
    items[original].classList.remove(toggleClassName)
    items[current].classList.add(toggleClassName)
    captions[original].classList.remove(toggleClassName)
    captions[current].classList.add(toggleClassName)
  }

}

interactiveCarousel();
