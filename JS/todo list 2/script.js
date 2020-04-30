const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const open = document.querySelector('.open');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(e) {
  if (e.target == modal) {
    toggleModal();
  }
}

close.addEventListener('click', toggleModal);
open.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

window.onload = () => {
  setTimeout(function() {
    modal.classList.toggle('show-modal');
  }, 3000);
};

console.log('test');

