const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  slidesToScroll: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    
    768: { slidesPerView: 3 },
  },
});
