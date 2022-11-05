"use strict";
import { animate } from "./helpers";

const modal = () => {
  const popUpBnts = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");

  let isOpen = false;
  let step = 0;

  modal.style.opacity === "0"

  popUpBnts.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalAnimationControl();
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modalAnimationControl();
    }
  });

  const modalAnimationControl = () => {
    
    const width = document.documentElement.clientWidth;

    isOpen = !isOpen;
    console.log(isOpen);
    if (width >= 768) {
      isOpen ? modal.style.display === "block" : null;
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          isOpen ? modal.style.opacity = progress : modal.style.opacity = 1 - progress;
          console.log(isOpen);
        }
      });
      modal.style.opacity === "0" ? (modal.style.display = "none", console.log("0 value")) : null;
      console.log(modal.style.opacity)
    }
  };

  

};

export default modal;
