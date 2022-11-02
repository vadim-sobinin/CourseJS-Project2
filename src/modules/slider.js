"use strict";

const slider = () => {
  

  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");

  const currentSlide = 0;

  const autoSlide = () => {
    slides[currentSlide].classList.remove('portfolio-item-active');
    currentSlide >= slides.length ? currentSlide = 0 : currentSlide++;
    slides[currentSlide].classList.add('portfolio-item-active');
  };

  const startSlide = () => {
    setInterval(autoSlide, 2000)
  };

  const stopSlide = () => {

  }

};

export default slider;