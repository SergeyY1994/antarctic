const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__toggle');
const mainHeaderContainer = document.querySelector('.main-header__container');
const mainHeaderNavigationList = document.querySelector('.main-header__container .main-navigation__list');
const mainHeaderLogoElement = document.querySelector('.main-header__logo');
const mainHeaderLogoImgElement = document.querySelector('.main-header__logo-img');
const wrapperElement = document.querySelector('.wrapper');

if (navMain && navToggle && mainHeaderContainer && mainHeaderNavigationList && mainHeaderLogoElement && mainHeaderLogoImgElement) {
  navMain.classList.remove('main-navigation--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-navigation--closed')) {
      if (wrapperElement) {
        wrapperElement.classList.add('menu-open');
      }

      mainHeaderNavigationList.style.paddingBottom = '300px';
      mainHeaderLogoElement.style.left = '51px';
      mainHeaderLogoImgElement.setAttribute('src', 'img/svg/antarctic-logo-mobile.svg');
      navMain.classList.remove('main-navigation--closed');
      navMain.classList.add('main-navigation--opened');
    } else {
      if (wrapperElement) {
        wrapperElement.classList.remove('menu-open');
      }

      mainHeaderNavigationList.style.paddingBottom = '0';
      mainHeaderLogoElement.style.left = '17px';
      mainHeaderLogoImgElement.setAttribute('src', 'img/svg/antartic-logo.svg');
      navMain.classList.add('main-navigation--closed');
      navMain.classList.remove('main-navigation--opened');
    }
  });
}
