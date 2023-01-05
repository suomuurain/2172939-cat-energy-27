let nav = document.querySelector('.main-nav__wrapper');
let toggle = document.querySelector('.main-header__toggle');
let header = document.querySelector('.main-header__toggle');

nav.classList.remove('main-nav__wrapper--nojs');
header.classList.remove('main-header--nojs');

toggle.addEventListener('click', function () {
  if (nav.classList.contains('main-nav__wrapper--close')) {
    nav.classList.remove('main-nav__wrapper--close');
    nav.classList.add('main-nav__wrapper--open');
    toggle.classList.remove('main-header__toggle--open');
    toggle.classList.add('main-header__toggle--close');

  } else {
    nav.classList.add('main-nav__wrapper--close');
    nav.classList.remove('main-nav__wrapper--open');
    toggle.classList.add('main-header__toggle--open');
    toggle.classList.remove('main-header__toggle--close');
  }
});
