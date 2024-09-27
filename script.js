// import swiper js
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//dropdown menu na header

const mainMenu = document.getElementById("main-menu");
const toggleButton = document.createElement("button");
toggleButton.textContent = "Menu";
toggleButton.classList.add("menu-toggle");

mainMenu.parentNode.insertBefore(toggleButton, mainMenu);

toggleButton.addEventListener("click", function () {
  if (mainMenu.classList.contains("show")) {
    mainMenu.classList.remove("show");
  } else {
    mainMenu.classList.add("show");
  }
});


// swipper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});