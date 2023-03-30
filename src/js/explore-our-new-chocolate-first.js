(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-explore-our-new]'),
      closeModalBtn: document.querySelector('[data-modal-close-explore-our-new]'),
      modal: document.querySelector('[data-modal-explore-our-new]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('overflow'); //add class and disable scroll in CSS body.overflow
    }
    
})();