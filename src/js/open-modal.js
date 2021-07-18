import { refs } from './refs.js';
import ButtonAction from './button-action.js';
import movie from '../hbs/film-modal.hbs';
import { checkHasFilmModalImage } from './is-image.js';
import { onClickDisappearVote } from './appear-votes.js';
import { putRoundedPopularity } from './put-rounded-pop';
import movieRus from '../hbs/film-modal-rus.hbs';

const btnSwitch = new ButtonAction({
  textQueue: 'queue',
  textWatched:'watched',
  textAdd: 'add to',
  textRemove: 'remove from',
});

const btnSwitchRus = new ButtonAction({
  textQueue: 'очередь',
  textWatched:'просмотрено',
  textAdd: 'в',
  textRemove: 'из',
});

refs.filmList.addEventListener('click', onMovieClick);
refs.watchedFilms.addEventListener('click', onMovieClick);


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
  const currentLang = localStorage.getItem('language');
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=${currentLang}&append_to_response=images&include_image_language=${currentLang}`;

  return fetch(url).then(response => response.json());
}

function appendArticlesMarkup(article) {
  if (localStorage.getItem('language') === 'ru') {
    const newFilmMarkup = btnSwitchRus.addButtonText(article);
    refs.body.insertAdjacentHTML('afterbegin', movieRus(newFilmMarkup));
    const buttonWatched = document.querySelector('.js-watched');
    const buttonQueue = document.querySelector('.js-queue');
    btnSwitchRus.clickButtonModal(buttonWatched, buttonQueue, article.id, newFilmMarkup);
  } else {
    const newFilmMarkup = btnSwitch.addButtonText(article);
    refs.body.insertAdjacentHTML('afterbegin', movie(newFilmMarkup));
    const buttonWatched = document.querySelector('.js-watched');
    const buttonQueue = document.querySelector('.js-queue');
    btnSwitch.clickButtonModal(buttonWatched, buttonQueue, article.id, newFilmMarkup);
  };

  putRoundedPopularity(article.popularity);
  checkHasFilmModalImage(article);
  

  // console.log(buttonWatched);

  
}

function toggleClass(backdrop) {
  backdrop.classList.toggle('is-hidden');
}

function closeModal(closeButton, backdrop, modalFilm) {
  closeButton.addEventListener('click', onButtonClick);
  backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPress);
  // closeDialog();

  function onButtonClick() {
    toggleClass(backdrop);
    function removeMovie() {
      backdrop.remove();
    }
    setTimeout(removeMovie, 500);
    closeDialog();

    window.removeEventListener('keydown', onEscKeyPress);
    backdrop.removeEventListener('click', onBackdropClick);
  }
  function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
      onButtonClick();
    }
    closeDialog();
  }
  function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
      onButtonClick();
      closeDialog();
    }
  }
}

function showDialog() {
  document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}

function closeDialog() {
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
}