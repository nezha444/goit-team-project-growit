const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 18,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    breakpoints: {
    1200: { slidesPerView: 4 },
    768: { slidesPerView: 2.5 },
    320: { slidesPerView: 1 },
    },
});