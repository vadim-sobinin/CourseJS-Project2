"use strict";

const slider = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  let dots;
  const dotsBlock = document.querySelector(".portfolio-dots")
  let currentSlide = 0;

  let timerInterval = 2000;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };


  const addDots = () => {
    for (let i = 1; i <= slides.length; i++) {
      const newDot = document.createElement("li");
      newDot.classList.add("dot");
      i === 1 ? newDot.classList.add("dot-active") : null;
      dotsBlock.append(newDot);
    }
    dots = document.querySelectorAll(".dot");
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    currentSlide == slides.length - 1 ? (currentSlide = 0) : currentSlide++;

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }

    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    currentSlide == slides.length ? (currentSlide = 0) : null;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timerInterval);
      }
    },
    true
  );

  addDots();
  startSlide(timerInterval);
};

export default slider;
