(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open-buynow]'),
    closeModalBtn: document.querySelector('[data-modal-close-buynow]'),
    modal: document.querySelector('[data-modal-buynow]'),
    submitBtn: document.querySelector('[data-modal-submit-buynow]'),
  };

  

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  // refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow'); //add class and disable scroll in CSS body.overflow
    // body.overflow
  }
  refs.submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // prevent the form from submitting
  
    // validate the form fields
    const form = event.target.closest('#buynowmyForm');
    if (form.checkValidity()) {
      toggleModal();
      refs.submitBtn.classList.remove('is-hidden');
      document.body.classList.add('overflow');
    } else {
      form.reportValidity(); // show validation errors
    }
  });
  })();