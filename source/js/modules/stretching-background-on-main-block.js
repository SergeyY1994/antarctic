const mainBlockElement = document.querySelector('.main-block');
const mainHeaderElement = document.querySelector('.main-header');
const mobileMenuLinkNodeList = document.querySelectorAll('.main-navigation__link--mobile-menu');

window.addEventListener('DOMContentLoaded', () => {
  changeMainBlockMargin();
});

if (mobileMenuLinkNodeList) {
  for (let element of mobileMenuLinkNodeList) {
    if (window.matchMedia('(max-width:767px)').matches) {
      element.addEventListener('click', changeMainBlockMargin);
    }
  }
}

export function changeMainBlockMargin() {
  if (mainBlockElement && mainHeaderElement) {
    mainBlockElement.style.marginTop = `-${mainHeaderElement.offsetHeight}px`;
  }
}
