"use strict";

const timer = (deadline) => {
  const timerHours = document.querySelector("#timer-hours");
  const timerMinutes = document.querySelector("#timer-minutes");
  const timerSeconds = document.querySelector("#timer-seconds");
  let getTime;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;

    const seconds = Math.floor(timeRemaining % 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const hours = Math.floor(timeRemaining / 60 / 60);

    return alwaysTwoDigits(timeRemaining, hours, minutes, seconds);
  };

  const alwaysTwoDigits = (timeRemaining, hours, minutes, seconds) => {
    String(hours).length === 1 ? hours = "0" + hours : hours;
    String(minutes).length === 1 ? minutes = "0" + minutes : minutes;
    String(seconds).length === 1 ? seconds = "0" + seconds : seconds;

    return {timeRemaining, hours, minutes, seconds};
  };

  const updateClock = () => {
    getTime = getTimeRemaining();
    if (getTime.timeRemaining < 0){
      getTime.hours = "00";
      getTime.minutes = "00";
      getTime.seconds = "00";
    }
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
  };

  updateClock();
  const timerId = setInterval(() => {
    if (getTime.timeRemaining >= 0){
      updateClock();
    } else {clearInterval(timerId);}
  }, 1000);
  
};

export default timer;
