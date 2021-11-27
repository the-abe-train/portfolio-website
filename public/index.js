const contactBtn = document.querySelector('#contact');
const overlay = document.querySelector('#Overlay');
const closeBtn = document.querySelector('#overlay-close');


function toggleOverlay(e) {
  if (e.target.closest('.container') === null) {
    overlay.classList.toggle('overlay-off');
  }
}

contactBtn.addEventListener('click', toggleOverlay);
overlay.addEventListener('click', toggleOverlay);
