const mainBlockElement = document.querySelector('.main-block');
const mainHeaderElement = document.querySelector('.main-header');
const navToggle = document.querySelector('.main-navigation__toggle');

changeMainBlockMargin();

navToggle.addEventListener('click', changeMainBlockMargin);

function changeMainBlockMargin() {
  if (mainBlockElement && mainHeaderElement) {
    mainBlockElement.style.marginTop = `-${mainHeaderElement.offsetHeight}px`;
  }
}

