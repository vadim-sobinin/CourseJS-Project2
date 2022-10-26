'use strict';

const menu = () => {

  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollToSetviceBtn = document.querySelector("main>a");


  
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  scrollToSetviceBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector("#service-block").scrollIntoView({behavior: "smooth"});
  });

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);
  menuItems.forEach(item => {
    item.addEventListener('click', handleMenu);
    const sectionId = item.href.split("/")[3];
    const referencedSection = document.querySelector(sectionId);
    
    item.addEventListener('click', (event) => {
      event.preventDefault();
      console.log("Scroll");
      referencedSection.scrollIntoView({behavior: "smooth"});
    });

  });




};

export default menu;