//dropdown menu na header

const mainMenu = document.getElementById("main-menu");
const toggleButton = document.createElement("button");
toggleButton.textContent = "Menu";
toggleButton.classList.add("menu-toggle");

mainMenu.parentNode.insertBefore(toggleButton, mainMenu);

toggleButton.addEventListener("click", function () {
  mainMenu.classList.toggle("show");

  toggleButton.classList.toggle("clicked");
});


// swipper
  const swiper1 = new Swiper(".swiper-container1", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next1', 
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        centeredSlides: true
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        centeredSlides: false
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        centeredSlides: false
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 5,
        centeredSlides: false
      }
    }
  })

  const swiper2 = new Swiper(".swiper-container2", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next2', 
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        centeredSlides: true
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        centeredSlides: false
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        centeredSlides: false
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 5,
        centeredSlides: false
      }
    }
  })

  const swiper3 = new Swiper(".swiper-container3", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next3', 
      prevEl: '.swiper-button-prev3',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        centeredSlides: true
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        centeredSlides: false
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        centeredSlides: false
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 5,
        centeredSlides: false
      }
    }
  })

  const swiper4 = new Swiper(".swiper-container4", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next4', 
      prevEl: '.swiper-button-prev4',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        centeredSlides: true
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        centeredSlides: false
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        centeredSlides: false
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 5,
        centeredSlides: false
      }
    }
  })
