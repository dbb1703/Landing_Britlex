function menuToggle(elem, menu) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('mobile-menu--opened');
  })
}

function menuScroll(elems, menu) {
  for (let i = 0; i < elems.length; i++) {
    let linkElem = elems[i];
    linkElem.addEventListener('click', function (e) {
      e.preventDefault();

      if (menu) {
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
