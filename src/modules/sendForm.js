'use strict';

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = '<span>Loading...</span>';
  const errorText = '<span>Error...</span>';
  const successText = '<span>Thank you!<br>Our manager will contact you!</span>';

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then((response) => response.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const dataObj = {};

    statusBlock.innerHTML = loadText;
    if (formId == 'form3') statusBlock.style.color = '#FFF';
    form.append(statusBlock);

    formData.forEach((val, key) => {
      dataObj[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        dataObj[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        dataObj[elem.id] = element.value;
      }
    });

    sendData(dataObj)
      .then((data) => {
        statusBlock.innerHTML = successText;
        console.log(data);
      })
      .catch((err) => {
        statusBlock.innerHTML = errorText;
      });
  };

  try {
    if (!form) {
      throw new Error('Put the form back where it belongs, please!');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log('Error... : ' + error.message);
  }
};

export default sendForm;
