// import * as basicLightbox from 'basiclightbox';

import { refs } from './refs.js';
import ButtonAction from './button-action.js';
import movie from '../hbs/film-modal.hbs';
import { checkHasFilmModalImage } from './is-image.js';
// import { onClickDisappearVote } from './appear-votes.js';
import { putRoundedPopularity } from './put-rounded-pop';
import { onTrailerBtnClick } from './open-trailer.js';


const btnSwitch = new ButtonAction({
  textAdd: 'add to',
  textRemove: 'remove from',
});

refs.filmList.addEventListener('click', onMovieClick);
refs.watchedFilms.addEventListener('click', onMovieClick);

async function onMovieClick(e) {
  if (e.target.classList.value !== 'overlay-btn js-about') {
    return;
  }

  const movieId = e.target.dataset.value;
  const article = await fetchFilm(movieId);

  await appendArticlesMarkup(article);
  showDialog();
  checkHasFilmModalImage(article);

  const trailerBtn = document.querySelector('.js-trailer');
  trailerBtn.addEventListener('click', (e) => {

    if (e.target.classList.contains('js-trailer')) {
        onTrailerBtnClick(article.id);
    }
  });


  const closeButton = document.querySelector('[data-action="close-modal"]');
  const backdrop = document.querySelector('.backdrop');
  const filmModalBox = document.querySelector('.basicLightbox ');
  if (filmModalBox === null) {
    closeModal(closeButton, backdrop);
    toggleClass(backdrop);
  }
}

function fetchFilm(movieId) {
  const KEY = '222d2b89e8701088edcf9049fa569980';
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`;

  return fetch(url).then(response => response.json());
}

function appendArticlesMarkup(article) {
  const newFilmMarkup = btnSwitch.addButtonText(article);
  refs.body.insertAdjacentHTML('afterbegin', movie(newFilmMarkup));
  putRoundedPopularity(article.popularity);
  checkHasFilmModalImage(article);
  const buttonWatched = document.querySelector('.js-watched');
  const buttonQueue = document.querySelector('.js-queue');

  // const trailerBtn = document.querySelector('.js-trailer');
  // console.log(trailerBtn);

  // // trailerBtn.addEventListener('click', onTrailerBtnClick(article.id));
  // console.log(buttonWatched);

  btnSwitch.clickButtonModal(buttonWatched, buttonQueue, article.id, newFilmMarkup);
}


function toggleClass(backdrop) {
  backdrop.classList.toggle('is-hidden');
}

function closeModal(closeButton, backdrop, modalFilm) {
  closeButton.addEventListener('click', onButtonClick);
  backdrop.addEventListener('click', onBackdropClick);

  window.addEventListener('keydown', onEscKeyPress);


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
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeDialog() {
  document.getElementsByTagName('body')[0].style.overflow = 'scroll';
}
