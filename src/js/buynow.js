(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open-buynow]'),
    closeModalBtn: document.querySelector('[data-modal-close-buynow]'),
    modal: document.querySelector('[data-modal-buynow]'),
    submitBtn: document.querySelector('[data-modal-submit-buynow]'),
    closeOpenAfterSend: document.querySelector('[data-modal-close-after-send]')
  };

  

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  // refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
refs.closeOpenAfterSend.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow'); //add class and disable scroll in CSS body.overflow
    // body.overflow
  }
  refs.submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
  });


  
  const swiperBuy = new Swiper('.swiperbuy', {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.swiperbuy-pagination',
      clickable: true,
    },
    breakpoints: {
      
      768: { slidesPerView: 3 },
    },
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow');
  
    const nextModalId = this.getAttribute('data-modal-next');
    if (nextModalId) {
      const nextModal = document.querySelector(nextModalId);
      if (nextModal) {
        nextModal.classList.remove('is-hidden');
        document.body.classList.add('overflow');
      }
    }
  }
})();