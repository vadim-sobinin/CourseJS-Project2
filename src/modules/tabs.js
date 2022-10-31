'use strict';

const tabs = () => {
  const tabContent = document.querySelectorAll(".service-tab");
  const tabsHeadersBlock = document.querySelector(".service-header");
  const tabsHeasers = document.querySelectorAll(".service-header-tab");
  
  
  tabsHeadersBlock.addEventListener('click', (e) => {
    // console.log(e.target.closest(".service-header-tab"));
    if (e.target.closest(".service-header-tab")) {
      tabsHeasers.forEach((tab, index) => {
        const tabBtn = e.target.closest(".service-header-tab");
        if (tab === tabBtn){
          tab.classList.add("active");
          tabContent[index].classList.remove("d-none");
        } else {
          tab.classList.remove("active");
          tabContent[index].classList.add("d-none");
        }
        
      });
      
    }
  });

};

export default tabs;