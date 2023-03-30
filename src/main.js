(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-buynow]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal-buynow]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('overflow'); //add class and disable scroll in CSS body.overflow
    }
  })();
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
  // thank-you-for-your-feedback
  // <button class="btn-buynow" type="button" data-modal-open-feedback>
  //       feedback
  //     </button>
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
  // explore-our-new-chocolate-first.html
  // // <button class="btn-buynow" type="button" data-modal-open-explore-our-new>
  // explore-our-new
  // </button>
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
  
  // thank-you
//  <button class="btn-buynow" type="button" data-modal-open-thank-you>
//          thank-you
//        </button> 
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


  import './mobile-menu.js';