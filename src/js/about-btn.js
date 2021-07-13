import { refs } from './refs.js';
import modalTpl from '../hbs/film-modal.hbs';
import { getTrendItems } from './base-api.js';
import { putRoundedPopularity } from './put-rounded-pop.js';
import { closeModal, OnCloseModalByEscape } from './modal-close.js';
import { renderModalFilms } from './renderModalFilm.js';
import { getFilmInfo } from './apiAboutFilm.js';


refs.filmList.addEventListener('click', e => {
  // console.log(e.target);
  // const id = e.target.getAttribute('id');
  const id = e.target.dataset.overlayid;
  console.log(id);

  if (!e.target.classList.contains('js-overlay-about')) {
    return;
  }

  window.addEventListener('keydown', OnCloseModalByEscape);

  modalFilm(id);
});

async function modalFilm(cardNum) {
  const data = await getFilmInfo(cardNum);
  console.log(data);
  const arrayOfFilms = document.querySelectorAll('[data-cardId]');
  console.log(arrayOfFilms);
  const arrayOfId = [...arrayOfFilms].map((el) => {
    return el.dataset.cardid;
  });
  console.log(arrayOfId);

  // const data = await getTrendItems(page);
  // const properFilm = data.results.find(elem => elem.id === Number(cardNum));
  // // console.log(cardNum);
  // const result = modalTpl(properFilm);


  // refs.filmContainer.insertAdjacentHTML('beforeend', result);
  renderModalFilms(arrayOfId, cardNum )
  refs.filmContainer.classList.remove('is-hidden');

  putRoundedPopularity(data.popularity);

  refs.filmContainer.addEventListener('click', e => {
    if (
      e.target.classList.contains('backdrop') ||
      e.target.classList.contains('modal__close-button')
    ) {
      closeModal();
    }
  });
}
