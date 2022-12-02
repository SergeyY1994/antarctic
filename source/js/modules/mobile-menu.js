import {changeMainBlockMargin} from './stretching-background-on-main-block';

const bodyElement = document.body;
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__toggle');
const mobileMenuLinkNodeList = document.querySelectorAll('.main-navigation__link--mobile-menu');
const wrapperElement = document.querySelector('.wrapper');
const mainHeaderSourceElement = document.querySelector('.main-header__logo-link source');

if (navMain && navToggle && mainHeaderSourceElement && mobileMenuLinkNodeList && wrapperElement) {
  navMain.classList.remove('main-navigation--nojs');

  if (window.matchMedia('(max-width:767px)').matches) {
    mainHeaderSourceElement.setAttribute('srcset', '../img/svg/antartic-logo.svg');
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
  mainHeaderSourceElement.setAttribute('srcset', '../img/svg/antartic-logo.svg');
  navMain.classList.add('main-navigation--closed');
  navMain.classList.remove('main-navigation--opened');
  changeMainBlockMargin();
}
