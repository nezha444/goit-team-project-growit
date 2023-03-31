(() => {
    const refs = {
      openModalBtns: document.querySelectorAll('[data-modal-open-buynow]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal-buynow]'),
    };
    
    refs.openModalBtns.forEach(btn => {
      btn.addEventListener('click', toggleModal);
    });

    // refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('overflow'); //add class and disable scroll in CSS body.overflow
    }

    // function centerModal() {
    //   var modal = document.getElementById("myModal-buynow");
    //   modal.style.top = (window.innerHeight / 2) - (modal.offsetHeight / 2) + "px";
    //   modal.style.left = (window.innerWidth / 2) - (modal.offsetWidth / 2) + "px";
    // }
    
    // Вызвать функцию centerModal() при загрузке страницы и при изменении размера окна
    // window.onload = centerModal;
    // window.onresize = centerModal;
  })();