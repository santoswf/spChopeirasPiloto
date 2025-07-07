window.onscroll = function () {
  var header = document.getElementById("header");
  if (window.scrollY > 120) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

const swiper = new Swiper(".js-testimonials-slider", {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".js-testimonials-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
     effect: 'fade', // Efeito suave
    fadeEffect: {
      crossFade: true, // Mistura os slides ao trocar
    },
  autoplay: {
    delay: 6000, // 2 segundos
    disableOnInteraction: false, // continua mesmo se o usuário interagir
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
