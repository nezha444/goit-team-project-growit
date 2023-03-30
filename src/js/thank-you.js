(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-thank-you]'),
      closeModalBtn: document.querySelector('[data-modal-close-thank-you]'),
      modal: document.querySelector('[data-modal-thank-you]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('overflow'); //add class and disable scroll in CSS body.overflow
    }
    
})();