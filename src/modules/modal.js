"use strict";

const modal = () => {
  const popUpBnts = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const modalCloseBtn = modal.querySelector(".popup-close");

  let step = 0;

  popUpBnts.forEach((btn) => {
    btn.addEventListener("click", () => {
      
      const width = document.documentElement.clientWidth;

      if (width >= 768) {
        modal.style.display = "block";
      modal.style.opacity = "0";
      const timerId1 = setInterval(() => {
        if (step < 100) {
          showModal();
        } else {
          clearInterval(timerId1);
        }
      }, 5);
      } else {
        modal.style.display = "block";
        modal.style.opacity = "1";
        step = 100;
      }
      
    });
  });

  modalCloseBtn.addEventListener("click", () => {

    const width = document.documentElement.clientWidth;
    if (width >= 768) {
      const timerId2 = setInterval(() => {
        if (step > 0) {
          hideModal();
        } else {
          clearInterval(timerId2);
        }
      }, 5);
    } else {
      modal.style.display = "none";
      modal.style.opacity = "0";
      step = 0;
    }
    
  });

  const showModal = () => {
    step++;
    modal.style.opacity = step / 100;
  };

  const hideModal = () => {
    step--;
    modal.style.opacity = step / 100;

    if (step === 0) {
      modal.style.display = "none";
    }
  };
};

export default modal;
