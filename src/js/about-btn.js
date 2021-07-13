import { refs } from './refs.js';
import { onBackdropClick, OnCloseModalByEscape } from './modal-close.js';
import { renderModalFilms } from './renderModalFilm.js';



refs.filmList.addEventListener('click', e => {

  const id = e.target.dataset.overlayid;

  if (!e.target.classList.contains('js-overlay-about')) {
    return;
  }

  window.addEventListener('keydown', OnCloseModalByEscape);

  refs.filmContainer.classList.remove('is-hidden');

  renderModalFilms(id);
  onBackdropClick(refs.filmContainer);
});


