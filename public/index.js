const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('#nav-list');
const body = document.body;
const scrollUpBtn = document.querySelector('#scroll-up-btn');

const contactBtn = document.querySelector('#contact-btn');
const contactFrom = document.querySelector('#contact-form-container');
const subscribeBtn = document.querySelector('#subscribe-btn');
const subForm = document.querySelector('#subscribe-form-container');
const thankYou = document.querySelector('#thank-you');
const overlay = document.querySelector('#Overlay');

function appearOnScroll() {
  if (
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    && window.innerWidth >= 600) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toggleHamburger(e) {
  navList.classList.toggle('hamburger-closed');
  navList.classList.toggle('hamburger-open');
}

function closeHamburger(e) {
  if (e.target.closest('nav') === null) {
    navList.classList.add('hamburger-closed');
    navList.classList.remove('hamburger-open');
  }
}

function closeOverlay(e) {
  if (e.target.closest('form') === null) {
    overlay.classList.toggle('hidden');
    contactFrom.classList.add('hidden');
    subForm.classList.add('hidden');
  }
}

function closeForm(e) {
  e.target.closest('.form-container').classList.toggle('hidden');
  thankYou.classList.remove('hidden');
}

function openContactForm() {
  overlay.classList.toggle('hidden');
  contactFrom.classList.remove('hidden');
}

function openSubForm() {
  overlay.classList.toggle('hidden');
  subForm.classList.remove('hidden');
}

window.onscroll = function () { appearOnScroll() };
scrollUpBtn.addEventListener('click', scrollToTop);
hamburger.addEventListener('click', toggleHamburger);
body.addEventListener('click', closeHamburger);

contactBtn.addEventListener('click', openContactForm);
contactFrom.addEventListener('submit', closeForm);
subscribeBtn.addEventListener('click', openSubForm);
overlay.addEventListener('click', closeOverlay);
