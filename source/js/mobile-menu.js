let menuOpened = document.querySelector('.nav-toggle');
let menuClosed = document.querySelector('.mobile-menu__close');
let mobileMenu = document.querySelector('.mobile-menu');

menuToggle(menuOpened);
menuToggle(menuClosed);

function menuToggle(elem) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.toggle('mobile-menu--opened');
  })
}
