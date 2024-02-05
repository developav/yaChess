const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 5000,
  },

  breakpoints:{
    1200: {
      slidesPerView:3,
      spaceBetween:50,
    },
    990: {
      slidesPerView:3,
      spaceBetween:50,
    },
    680: {
      slidesPerView:2,
      spaceBetween:30,
    },
    320: {
      slidesPerView:1,
      spaceBetween:0,
    },
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1700,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: 'false',
    totalClass: 'swiper-pagination-total',
  },

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