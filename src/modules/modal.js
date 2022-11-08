'use strict';
import { animate } from './helpers';

const modal = () => {
  const popUpBnts = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');

  let isOpen = false;
  let step = 0;

  modal.style.opacity === '0';

  popUpBnts.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalAnimationControl(true);
    });
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modalAnimationControl(false);
    }
  });

  const modalAnimationControl = (isOpen) => {
    const width = document.documentElement.clientWidth;

    // isOpen = !isOpen;
    isOpen === true ? (modal.style.display = 'block') : null;

    if (width >= 768) {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          isOpen ? (modal.style.opacity = progress) : (modal.style.opacity = 1 - progress);
          modal.style.opacity === '0' ? (modal.style.display = 'none') : null;
        },
      });
    }
  };
};

export default modal;
