import {changeMainBlockMargin} from './stretching-background-on-main-block';

const bodyElement = document.body;
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__toggle');
const mainHeaderContainer = document.querySelector('.main-header__container');
const mainHeaderNavigationList = document.querySelector('.main-header__container .main-navigation__list');
const mainHeaderLogoElement = document.querySelector('.main-header__logo');
const mobileMenuLinkNodeList = document.querySelectorAll('.main-navigation__link--mobile-menu');
const wrapperElement = document.querySelector('.wrapper');
const mainHeaderSourceElement = document.querySelector('.main-header__logo-link source');

if (navMain && navToggle && mainHeaderContainer && mainHeaderNavigationList && mainHeaderLogoElement && mainHeaderSourceElement && mobileMenuLinkNodeList && wrapperElement) {
  navMain.classList.remove('main-navigation--nojs');

  if (window.matchMedia('(max-width:767px)').matches) {
    // переписать здесь на mainHeaderSourceElement
    document.querySelector('source').setAttribute('srcset', '../img/svg/antartic-logo.svg');
  }

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-navigation--closed')) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  });

  wrapperElement.addEventListener('click', function (evt) {
    if (evt.target === wrapperElement) {
      closeMobileMenu();
      changeMainBlockMargin();
    }
  });

  for (let element of mobileMenuLinkNodeList) {
    if (window.matchMedia('(max-width:767px)').matches) {
      element.addEventListener('click', closeMobileMenu);
    }
  }
}

function openMobileMenu() {
  if (wrapperElement) {
    wrapperElement.classList.add('menu-open');
  }

  bodyElement.style.overflowY = 'hidden';
  mainHeaderNavigationList.style.paddingBottom = '300px';
  mainHeaderLogoElement.style.left = '51px';
  mainHeaderSourceElement.setAttribute('srcset', '../img/svg/antarctic-logo-mobile.svg');
  navMain.classList.remove('main-navigation--closed');
  navMain.classList.add('main-navigation--opened');
  changeMainBlockMargin();
}

function closeMobileMenu() {
  if (wrapperElement) {
    wrapperElement.classList.remove('menu-open');
  }

  bodyElement.style.overflowY = 'auto';
  mainHeaderNavigationList.style.paddingBottom = '0';
  mainHeaderLogoElement.style.left = '17px';
  mainHeaderSourceElement.setAttribute('srcset', '../img/svg/antartic-logo.svg');
  navMain.classList.add('main-navigation--closed');
  navMain.classList.remove('main-navigation--opened');
  changeMainBlockMargin();
}
