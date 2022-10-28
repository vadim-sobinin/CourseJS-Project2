"use strict";

const inputsControl = () => {
  const calcBlock = document.querySelector(".calc-block");

  calcBlock.querySelectorAll(".calc-item").forEach((element) => {
    element.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/\D+/, "");
    });
  });

  calcBlock.querySelector(".calc-type")[2].value = "3";

  document
    .querySelector('input[placeholder="Your message"]')
    .addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/([^а-яА-Я\-\ ]+)/, "");
    });


  const nameForms = document.querySelectorAll("input[placeholder='Your name']");
  nameForms.forEach((element) => {
    element.addEventListener("blur", (event) => {
      let correctedInput = (event.target.value.replace(/ {2,}/g," "));
      correctedInput = (correctedInput.replace(/-{2,}/g,"-cv"));
      correctedInput = correctedInput.replace(/[^а-яА-ЯËё\-\ ]/g, "");
      correctedInput = correctedInput.replace(/^ +| +$|( ) +/g, "$1");
      correctedInput = correctedInput.replace(/^-+|-+$/gm, "");
      
      correctedInput = correctedInput.replace(/( |^)[а-яА-ЯËё]/g, function(letter){ return letter.toUpperCase(); });
      
       let newCorrectedInput = correctedInput.split(" ").map((word) => {
        return word.split("").reduce((total, letter) => total + letter.toLowerCase());
      });

      
      event.target.value = newCorrectedInput.join(" ");


    });
  });

  const emailForms = document.querySelectorAll(".form-email");
  emailForms.forEach((element) => {
    element.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(
        /([^\w\@\-\_\.\!\~\*\']+)/,
        ""
      );
    });
  });

  const phoneForms = document.querySelectorAll(".form-phone");
  phoneForms.forEach((element) => {
    element.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/([^\d\-\(\)]+)/, "");
    });
  });
};

export default inputsControl;
