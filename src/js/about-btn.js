import { refs } from './refs.js';
import modalTpl from '../hbs/film-modal.hbs';
import { getTrendItems } from './base-api.js';
import { putRoundedPopularity } from './put-rounded-pop.js';
import { closeModal } from './modal-close.js';

refs.filmList.addEventListener('click', e => {
  const id = e.target.getAttribute('id');

  if (!e.target.classList.contains('js-overlay-about')) {
    return;
  }

  modalFilm(1, id);
});

async function modalFilm(page, cardNum) {
  const data = await getTrendItems(page);
  const properFilm = data.results.find(elem => elem.id === Number(cardNum));
  const result = modalTpl(properFilm);

  refs.filmContainer.insertAdjacentHTML('beforeend', result);
  refs.filmContainer.classList.remove('is-hidden');
  
  putRoundedPopularity(properFilm.popularity);

  refs.filmContainer.addEventListener('click', e => {
    if (
      e.target.classList.contains('backdrop') ||
      e.target.classList.contains('modal__close-button')
    ) {
      closeModal();
    }
  });
}
