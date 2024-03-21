// Плавный scroll в основном меню
let menuLinks = document.querySelectorAll('.main-menu__link');

for (let i = 0; i < menuLinks.length; i++) {
  let menuLink = menuLinks[i];

  menuLink.addEventListener('click', function (e) {
    e.preventDefault();

    let linkHref = menuLink.getAttribute('href').substring(1);

    document.getElementById(linkHref).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
}
