// Вывод мобильного меню
let menuOpened = document.querySelector('.nav-toggle');
let menuClosed = document.querySelector('.mobile-menu__close');
let menu = document.querySelector('.mobile-menu');

menuToggle(menuOpened);
menuToggle(menuClosed);

function menuToggle(elem) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('mobile-menu--opened');
  })
}

// Плавный scroll в основном меню
let menuLinks = document.querySelectorAll('.main-menu__link');
menuScroll(menuLinks, false);

// Плавный scroll в мобильном меню
let mobileLinks = document.querySelectorAll('.mobile-menu__link');
menuScroll(mobileLinks, true);

function menuScroll(elems, menuToggle) {
  for (let i = 0; i < elems.length; i++) {
    let linkElem = elems[i];
    linkElem.addEventListener('click', function (e) {
      e.preventDefault();

      if (menuToggle) {
        menu.classList.toggle('mobile-menu--opened');
      }
      let linkHref = linkElem.getAttribute('href').substring(1);

      document.getElementById(linkHref).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
  }
}
