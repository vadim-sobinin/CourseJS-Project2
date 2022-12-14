'use strict';
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import inputsControl from './modules/inputsControl';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('11 december 2022');
menu();
modal();
inputsControl();
tabs();
slider();
calc(5);
sendForm({
  formId: 'form1',
  someElem: [{ type: 'block', id: 'total' }],
});
sendForm({
  formId: 'form2',
  someElem: [{ type: 'block', id: 'total' }],
});
sendForm({
  formId: 'form3',
  someElem: [{ type: 'block', id: 'total' }],
});
