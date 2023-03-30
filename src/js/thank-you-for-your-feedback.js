  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-feedback]'),
      closeModalBtn: document.querySelector('[data-modal-close-feedback]'),
      modal: document.querySelector('[data-modal-feedback]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('overflow'); //add class and disable scroll in CSS body.overflow
    }    
  })();