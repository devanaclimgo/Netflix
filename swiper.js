//swiper
function swiper() {
  const swiper = new swiper(".swiper", {
    // Optional parameters
    modules: [Navigation],
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    loopAdicionalSlides: 5,
    speed: 500,
    cssMode: true,
    enabled: true,
    observer: true,
    observeParents: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    allowSlideNext: true,
    allowSlidePrev: true
  });

  const nextButton = document.querySelector(".swiper-button-next");
  const prevButton = document.querySelector(".swiper-button-prev");

  nextButton.addEventListener("click", () => {
    swiper.slideNext();
  });

  prevButton.addEventListener("click", () => {
    swiper.slidePrev();
  });
}
