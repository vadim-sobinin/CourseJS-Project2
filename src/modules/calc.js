const calc = (price = 5) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.querySelector("#total");

  // Total sum animation
  
  const stepControl = (requiredNum, number) => {

    if (Math.abs(requiredNum - number) > 10000){
      return 1000;
    } else if (Math.abs(requiredNum - number) > 1000){
      return 100;
    } else if (Math.abs(requiredNum - number) > 100){
      return 10;
    } else {
      return 1;
    }
  }

  const counterAnimation = (requiredNum, elem) => {
    const animationTime = 200;
    let number = +elem.textContent.split("$")[0];
    const t = Math.round(animationTime/requiredNum);
    const interval = setInterval(() => {
      const step = stepControl(requiredNum, number);
      if (requiredNum > number) {
        number = number + step;
      }
      if (requiredNum < number) {
        number = number - step;
      }
      if (requiredNum == number) {
        clearInterval(interval);
      }
      
      elem.textContent = number + "$";
    }, t);
  };

  const countCalc = () => {
    let calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;
    calcTypeValue === 999 ? (calcTypeValue = 1.4) : null;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcCountValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcCountValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }
    counterAnimation(totalValue, total);
    // total.textContent = totalValue + "$";
  };

  calcBlock.addEventListener("input", (e) => {
    e.target === calcType ||
    e.target === calcSquare ||
    e.target === calcCount ||
    e.target === calcDay
      ? countCalc()
      : null;
  });
};

export default calc;
