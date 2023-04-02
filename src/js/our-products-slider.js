const swiper_prod = new Swiper('.swiper-prod', {
  spaceBetween: 20,
  slidesToScroll: 1,
  pagination: {
    el: '.swiper-pagination-prod',
    clickable: true,
  },
    breakpoints: {
    1200: { slidesPerView: 4 },
    768: { slidesPerView: 2.5},
    320: { slidesPerView: 1 },
    },
});