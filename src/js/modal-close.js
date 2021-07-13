import { refs } from './refs.js';

export function closeModal() {
    refs.filmContainer.classList.add('is-hidden');
    refs.filmContainer.innerHTML = '';
    // refs.filmContainer.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', OnCloseModalByEscape);
}

export function OnCloseModalByEscape(e) {
  if (e.code === 'Escape') {
    closeModal();
}
}
// window.addEventListener('keydown', e => {
//   if (e.code === 'Escape') {
//     closeModal();
//   }
// });