"use strict";

const modal = () => {
  const popUpBnts = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const modalCloseBtn = modal.querySelector(".popup-close");

  let isOpen = false;
  let step = 0;

  popUpBnts.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalAnimationControl();
    });
  });

  const modalAnimationControl = () => {
    
    const width = document.documentElement.clientWidth;


    if (width >= 768) {

      const timerId = setInterval(() => {
        
        isOpen ? step-- : step++;
        modal.style.opacity = step / 100;
        (step >= 100 || step <= 0) ? (clearInterval(timerId), isOpen = !isOpen) : null;
        step <= 0 ? modal.style.display = "none": modal.style.display = "block";
      }, 5);
      

    } else {
      
      !isOpen ? (modal.style.display = "block",
      modal.style.opacity = "1",
      step = 100) : (modal.style.display = "none",
      modal.style.opacity = "0",
      step = 0);
      isOpen = !isOpen;
    }
  };
  
  modalCloseBtn.addEventListener("click", () => {
    modalAnimationControl();
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content")) {
      modalAnimationControl();
    }
  });

};

export default modal;
