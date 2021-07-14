import { refs } from './refs.js';
import { renderModalFilms } from './renderModalFilm.js';

import { openModal } from './modal-open.js';

refs.filmList.addEventListener('click', onAboutClick);
function onAboutClick(e) {
     if (!e.target.classList.contains('js-overlay-about')) {
         return;
    }
  const id = openModal(e);
  renderModalFilms(id);
}



