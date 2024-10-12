//swiper
import Swiper from './node_modules/swiper';
import { Navigation, Pagination } from './node_modules/swiper/swiper-bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function swiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    modules: [Navigation, Pagination],
    spaceBetween: 5,
    slidesPerView: 2,
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    loopAdicionalSlides: 5,
    speed: 500,
    cssMode: true,
    enabled: true,
    observer: true,
    observeParents: true,

    // Pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    allowSlideNext: true,
    allowSlidePrev: true
  });

  document.addEventListener('click', function() {
    swiper();
  });
}
