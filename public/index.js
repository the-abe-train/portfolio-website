const contactBtn = document.querySelector('#contact');
const overlay = document.querySelector('#Overlay');
const navList = document.querySelector('#nav-list');
const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');
const forms = document.querySelectorAll('.form-container');


function toggleOverlay(e) {
  if (e.target.closest('.container') === null) {
    overlay.classList.toggle('hidden');
    forms.forEach(form => form.classList.remove('hidden'));
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

function closeForm(e) {
  e.target.closest('.form-container').classList.toggle('hidden');
}

contactBtn.addEventListener('click', toggleOverlay);
overlay.addEventListener('click', toggleOverlay);
hamburger.addEventListener('click', toggleHamburger);
body.addEventListener('click', closeHamburger);
forms.forEach(form => form.addEventListener('submit', closeForm));