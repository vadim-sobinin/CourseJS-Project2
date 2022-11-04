"use strict";

const inputsControl = () => {
  const calcBlock = document.querySelector(".calc-block");

  calcBlock.querySelectorAll(".calc-item").forEach((element) => {
    element.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/\D+/, "");
    });
  });

  calcBlock.querySelector(".calc-type")[2].value = "999";

  document
    .querySelector('input[placeholder="Your message"]')
    .addEventListener("blur", (event) => {
      event.target.value = checkSpasesHyphens(event.target.value);
      event.target.value = event.target.value.replace(/([^а-яА-Я\-\ ]+)/, "");
    });


  const checkSpasesHyphens = (input) => {
    input = (input.replace(/ {2,}/g," "));
    input = (input.replace(/-{2,}/g,"-"));
    input = input.replace(/^ +| +$|( ) +/g, "$1");
    input = input.replace(/^-+|-+$/gm, "");
    return input;
  };

  const nameForms = document.querySelectorAll("input[placeholder='Your name']");
  nameForms.forEach((element) => {
    element.addEventListener("blur", (event) => {

      let correctedInput = event.target.value.replace(/[^а-яА-ЯËё\-\ ]/g, "");

      correctedInput = checkSpasesHyphens(correctedInput);
      
      if (correctedInput != "") {
      correctedInput = correctedInput.replace(/( |^)[а-яА-ЯËё]/g, function(letter){ return letter.toUpperCase(); });
      
      let newCorrectedInput = correctedInput.split(" ").map((word) => {
        return word.split("").reduce((total, letter) => total + letter.toLowerCase());
      });

      event.target.value = newCorrectedInput.join(" ");
    } else {
      event.target.value = "";
    }
    });
  });

  const emailForms = document.querySelectorAll(".form-email");
  emailForms.forEach((element) => {
    element.addEventListener("blur", (event) => {
      event.target.value = checkSpasesHyphens(event.target.value);
      event.target.value = event.target.value.replace(
        /([^\w\@\-\_\.\!\~\*\']+)/g,
        ""
      );
    });
  });

  const phoneForms = document.querySelectorAll(".form-phone");
  phoneForms.forEach((element) => {
    element.addEventListener("blur", (event) => {
      event.target.value = event.target.value.replace(/([^\d\-\(\)]+)/g, "");
      event.target.value = checkSpasesHyphens(event.target.value);
    });
  });
};

export default inputsControl;
