import { refs } from './refs.js';

function closeModal() {
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

export function onBackdropClick(domEl) {
  domEl.addEventListener('click', e => {
    if (
      e.target.classList.contains('backdrop') ||
      e.target.classList.contains('modal__close-button')
    ) {
      closeModal();
    }
  });
}
// window.addEventListener('keydown', e => {
//   if (e.code === 'Escape') {
//     closeModal();
//   }
// });