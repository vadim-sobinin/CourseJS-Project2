'use strict';

const menu = () => {

  const menu = document.querySelector("menu");

  document.body.addEventListener('click', (e) => {

    if (e.target.closest(".menu")) {
      menu.classList.toggle('active-menu');
    }
    if (e.target.closest(".close-btn")) {
      e.preventDefault();
      menu.classList.toggle('active-menu');
    }

    if (e.target.closest("ul>li>a")) {
      e.preventDefault();
      const sectionId = e.target.href.split("/")[3];
      const referencedSection = document.querySelector(sectionId);
      menu.classList.toggle('active-menu');
      referencedSection.scrollIntoView({behavior: "smooth"});
    }

    if (e.target.closest("main>a")) {
      e.preventDefault();
      document.querySelector("#service-block").scrollIntoView({behavior: "smooth"});
    }
        
    if (!e.target.closest(".active-menu") && !e.target.closest(".menu") && menu.classList.contains("active-menu")){
      menu.classList.toggle('active-menu');
    }
  });

};

export default menu;