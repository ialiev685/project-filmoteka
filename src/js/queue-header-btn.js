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
import { renderPagination } from './paginationLibrary.js';

const btnSwitch = new ButtonAction({
  textAdd: 'add to',
  textRemove: 'remove from',
});

const Movie = {
  // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

let page = 1;

refs.queueBtn.addEventListener('click', () => {
  const dataFromLocalQ = localStorage.getItem(Movie.QUEUE);
  const dataForRenderQ = JSON.parse(dataFromLocalQ);
  if (dataFromLocalQ) {
    renderQueueFilms(dataForRenderQ, page);
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

function renderQueueFilms(films, page) {
  refs.watchedFilms.innerHTML = '';
  // refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(films));
  const newFilmsMarkup = films.map(elem => {
    return btnSwitch.addButtonText(elem);
  });

  ////// тест

  const { totalPage, procMarkup } = makeRenderDependView(newFilmsMarkup, page);
  refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(procMarkup));

  renderPagination(totalPage, page, { prop: 'queue', films });

  ////// тест

  btnSwitch.clickButtonOverlay(procMarkup);
  getGenres(procMarkup);
  getReleaseYear(procMarkup);
  getVote(procMarkup);
  onClickAppearVote();
}

///// тест

function makeRenderDependView(arrFilms, page) {
  const countFilms = arrFilms.length;

  const { totalPage, countListFilms } = defineCountFilmsList(countFilms);

  const start = page * countListFilms - countListFilms;
  const end = page * countListFilms;

  const procMarkup = arrFilms.slice(start, end);

  return { totalPage, procMarkup };
}

function defineCountFilmsList(countFilms) {
  let countListFilms = null;
  const sizeView = document.documentElement.clientWidth;
  if (sizeView < 768) {
    countListFilms = 4;
  } else if (sizeView >= 768 && sizeView < 1024) {
    countListFilms = 8;
  } else if (sizeView >= 1024) {
    countListFilms = 9;
  }

  const totalPage = Math.ceil(countFilms / countListFilms);

  return { totalPage, countListFilms };
}

export { renderQueueFilms };
