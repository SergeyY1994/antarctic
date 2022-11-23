const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__toggle');
const mainHeaderContainer = document.querySelector('.main-header__container');
const mainHeaderNavigationList = document.querySelector('.main-header__container .main-navigation__list');
const bodyElement = document.body;

if (navMain && navToggle && mainHeaderContainer) {
  navMain.classList.remove('main-navigation--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-navigation--closed')) {
      bodyElement.style.backgroundColor = 'rgba(0, 43, 102, 0.5)';
      mainHeaderNavigationList.style.paddingBottom = '300px';
      navMain.classList.remove('main-navigation--closed');
      navMain.classList.add('main-navigation--opened');
    } else {
      bodyElement.style.backgroundColor = 'transparent';
      mainHeaderNavigationList.style.paddingBottom = '0';
      navMain.classList.add('main-navigation--closed');
      navMain.classList.remove('main-navigation--opened');
    }
  });
}
