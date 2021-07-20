import { refs } from './refs.js';
import cardMarkup from '../hbs/cardForm.hbs';
import cardMarkupRus from '../hbs/cardFormRus.hbs';
import { getGenres } from './genres.js';
import { getReleaseYear } from './years.js';
import { getVote } from './vote-avarage.js';
import { openLibrary } from './library-btn.js';
import { onClickAppearVote } from './appear-votes.js';
import ButtonAction from './button-action.js';
import { onFilmLibClick } from './onFilmLibClick.js';
import { renderPagination } from './paginationLibrary.js';
import { checkHasFilmImage } from './is-image.js';

const btnSwitch = new ButtonAction({
  textQueue: 'queue',
  textWatched: 'watched',
  textAdd: 'add to',
  textRemove: 'remove from',
});

const btnSwitchRus = new ButtonAction({
  textQueue: 'очередь',
  textWatched: 'просмотрено',
  textAdd: 'в',
  textRemove: 'из',
});

const Movie = {
  // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

let page = 1;

refs.queueBtn.addEventListener('click', () => {
  renderLibrary(Movie.QUEUE);
});

function renderLibrary(local) {
  const dataFromLocalQ = localStorage.getItem(local);
  const dataForRenderQ = JSON.parse(dataFromLocalQ);

  if (dataForRenderQ?.length && dataForRenderQ) {
    renderQueueFilms(dataForRenderQ, page);

    showPaginatiron();

    onFilmLibClick(local);
  } else {
    refs.watchedFilms.innerHTML = '';
    hidePagination();
  }
}

function renderQueueFilms(films, page) {
  refs.watchedFilms.innerHTML = '';
  // refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(films));
  if (localStorage.getItem('language') === 'ru') {
    const newFilmsMarkup = films.map(elem => {
      return btnSwitchRus.addButtonText(elem);
    });
    const { totalPage, procMarkup } = makeRenderDependView(newFilmsMarkup, page);

    refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkupRus(procMarkup));

    renderPagination(totalPage, page, { prop: 'watched', films });
    btnSwitchRus.clickButtonOverlay(procMarkup);
    getGenres(procMarkup);
    getReleaseYear(procMarkup);
    getVote(procMarkup);
    checkHasFilmImage(procMarkup);
  } else {
    const newFilmsMarkup = films.map(elem => {
      return btnSwitch.addButtonText(elem);
    });
    const { totalPage, procMarkup } = makeRenderDependView(newFilmsMarkup, page);
    renderPagination(totalPage, page, { prop: 'watched', films });
    refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(procMarkup));
    btnSwitch.clickButtonOverlay(procMarkup);
    getGenres(procMarkup);
    getReleaseYear(procMarkup);
    getVote(procMarkup);
    checkHasFilmImage(procMarkup);
  }
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

function showPaginatiron() {
  refs.paginListLibrary.classList.remove('is-hidden');
  refs.msgEmtpyEl.classList.add('is-hidden');
}

function hidePagination() {
  refs.paginListLibrary.classList.add('is-hidden');
  refs.msgEmtpyEl.classList.remove('is-hidden');
}

export { renderQueueFilms, renderLibrary };
