// Вывод мобильного меню
let menuOpened = document.querySelector('.nav-toggle');
let menuClosed = document.querySelector('.mobile-menu__close');
let mobileMenu = document.querySelector('.mobile-menu');

menuToggle(mobileMenu, menuOpened);
menuToggle(mobileMenu, menuClosed);

// Плавный scroll в мобильном меню
let mobileLinks = document.querySelectorAll('.mobile-menu__link');
menuScroll(mobileLinks, mobileMenu);
