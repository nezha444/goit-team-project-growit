const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  slidesToScroll: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    768: { slidesPerView: 2 },
  },
  slideToClickedSlide: true,
});
