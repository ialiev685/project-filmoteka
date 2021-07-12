import { refs } from './refs.js';

export function closeModal() {
    refs.filmContainer.classList.add('is-hidden');
    refs.filmContainer.innerHTML = '';
    refs.filmContainer.removeEventListener('click', closeModal);
}

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});