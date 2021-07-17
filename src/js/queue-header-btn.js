import { refs } from './refs.js';
import cardMarkup from '../hbs/cardForm.hbs';
import { getGenres } from './genres.js';
import { getReleaseYear } from './years.js';
// import { checkHasFilmImage } from './is-image.js';
import { getVote } from './vote-avarage.js';
import { openLibrary } from './library-btn.js';
import { onClickAppearVote } from './appear-votes.js';
import ButtonAction from './button-action.js';
import { onFilmLibClick } from './onFilmLibClick.js';

const btnSwitch = new ButtonAction({
  textAdd: 'add to',
  textRemove: 'remove from',
});

const Movie = {
  // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

refs.queueBtn.addEventListener('click', () => {
  const dataFromLocalQ = localStorage.getItem(Movie.QUEUE);
  const dataForRenderQ = JSON.parse(dataFromLocalQ);
  if (dataFromLocalQ) {
    renderQueueFilms(dataForRenderQ);
    // const filmLib = document.querySelectorAll('.film-card');
    // // console.log(filmLib);
    onFilmLibClick();
    // [...filmLib].forEach((el) => {
    //   el.addEventListener('click', (e) => {

    //     if (e.target.classList.contains('js-watched') || e.target.classList.contains('js-queue')) {
    //       e.currentTarget.style.display = 'none';
    //     }
    //   });
    // });
  } else refs.watchedFilms.innerHTML = '';
});

function renderQueueFilms(films) {
  refs.watchedFilms.innerHTML = '';
  // refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(films));
  const newFilmsMarkup = films.map(elem => {
    return btnSwitch.addButtonText(elem);
  });
  refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(newFilmsMarkup));

  btnSwitch.clickButtonOverlay(newFilmsMarkup);
  getGenres(films);
  getReleaseYear(films);
  getVote(films);
  onClickAppearVote();
}
