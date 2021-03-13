const swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  loop: true,
  speed: 4000,
  autoplay: {
    delay:1000
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
