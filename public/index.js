const contactBtn = document.querySelector('#contact');
const overlay = document.querySelector('#Overlay');
const navList = document.querySelector('#nav-list');
const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');


function toggleOverlay(e) {
  if (e.target.closest('.container') === null) {
    overlay.classList.toggle('overlay-off');
  }
}

function toggleHamburger(e) {
  navList.classList.toggle('hamburger-closed');
  navList.classList.toggle('hamburger-open');
}

function closeHamburger(e) {
  if (e.target.closest('nav') === null) {
    if (navList.classList.contains('hamburger-open')) {
      navList.classList.toggle('hamburger-closed');
      navList.classList.toggle('hamburger-open');
    }
  }
}

contactBtn.addEventListener('click', toggleOverlay);
overlay.addEventListener('click', toggleOverlay);
hamburger.addEventListener('click', toggleHamburger);
body.addEventListener('click', closeHamburger);