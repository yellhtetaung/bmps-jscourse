'use strict';
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);

const closeModalWindow = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModalWindow = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModalWindow);
}

btnCloseModal.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', e => {
  // console.log('Key Down !!!');
  // console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModalWindow();
    }
  }
});
