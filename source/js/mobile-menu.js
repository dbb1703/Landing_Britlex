// Вывод мобильного меню
let menuOpened = document.querySelector('.nav-toggle');
let menuClosed = document.querySelector('.mobile-menu__close');
let mobileMenu = document.querySelector('.mobile-menu');

menuToggle(menuOpened, mobileMenu);
menuToggle(menuClosed, mobileMenu);

// Плавный scroll в мобильном меню
let mobileLinks = document.querySelectorAll('.mobile-menu__link');
menuScroll(mobileLinks, mobileMenu);

// Закрытие меню при клике на прозрачную часть окна
let modalRight = document.querySelector('.page__modal-right');
menuToggle(modalRight, mobileMenu);
