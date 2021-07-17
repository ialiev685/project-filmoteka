import { refs } from './refs.js';
import ButtonAction from './button-action.js';
import movie from '../hbs/film-modal.hbs';
import { checkHasFilmModalImage } from './is-image.js';

const btnSwitch = new ButtonAction({
  textAdd: 'add to',
  textRemove: 'remove from',
});

refs.filmList.addEventListener('click', onMovieClick);

async function onMovieClick(e) {

  if (e.target.classList.value !== 'overlay-btn js-about') {
    return;
  };
   
  const movieId = e.target.dataset.value;
  const article = await fetchFilm(movieId);
  await appendArticlesMarkup(article);
  checkHasFilmModalImage(article);
  const closeButton = document.querySelector('[data-action="close-modal"]');
  const backdrop = document.querySelector('.backdrop');

  toggleClass(backdrop);
  closeModal(closeButton, backdrop);
}

function fetchFilm(movieId) {
  const KEY = '222d2b89e8701088edcf9049fa569980';
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`;

  return fetch(url).then(response => response.json());
}

function appendArticlesMarkup(article) {
  const newFilmMarkup = btnSwitch.addButtonText(article);
  refs.body.insertAdjacentHTML('afterbegin', movie(newFilmMarkup));
  const buttonWatched = document.querySelector('.js-watched');
  const buttonQueue = document.querySelector('.js-queue');

  btnSwitch.clickButtonModal(buttonWatched, buttonQueue, article.id, newFilmMarkup);
}

function toggleClass(backdrop) {
  backdrop.classList.toggle('is-hidden');
}

function closeModal(closeButton, backdrop) {
  closeButton.addEventListener('click', onButtonClick);
  backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPress);

  function onButtonClick() {
    toggleClass(backdrop);
    function removeMovie() {
      backdrop.remove();
    }
    setTimeout(removeMovie, 500);

    window.removeEventListener('keydown', onEscKeyPress);
    backdrop.removeEventListener('click', onBackdropClick);
  }
  function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
      onButtonClick();
    }
  }
  function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
      onButtonClick();
    }
  }
}
