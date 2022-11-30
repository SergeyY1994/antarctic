const mainBlockElement = document.querySelector('.main-block');
const mainHeaderElement = document.querySelector('.main-header');
const navToggle = document.querySelector('.main-navigation__toggle');
const mobileMenuLinkNodeList = document.querySelectorAll('.main-navigation__link--mobile-menu');

changeMainBlockMargin();

navToggle.addEventListener('click', changeMainBlockMargin);

if (mobileMenuLinkNodeList) {
  for (let element of mobileMenuLinkNodeList) {
    if (window.matchMedia('(max-width:767px)').matches) {
      element.addEventListener('click', changeMainBlockMargin);
    }
  }
}

function changeMainBlockMargin() {
  if (mainBlockElement && mainHeaderElement) {
    mainBlockElement.style.marginTop = `-${mainHeaderElement.offsetHeight}px`;
  }
}

