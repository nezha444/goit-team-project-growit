// leave-a-review-about-our-chocolate 
  // <button class="btn-buynow" type="button" data-modal-open-leave-a-review>
  //       review
  //     </button>
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-leave-a-review]'),
      closeModalBtn: document.querySelector('[data-modal-close-leave-a-review]'),
      modal: document.querySelector('[data-modal-leave-a-review]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('overflow'); //add class and disable scroll in CSS body.overflow
    }    
  })();