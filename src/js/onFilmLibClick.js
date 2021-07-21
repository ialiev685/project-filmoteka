import { hidePagination } from './watched-header-btn.js';
import { renderPagination } from './paginationLibrary.js';
import { renderLibraryQ } from './queue-header-btn.js';
import { renderLibraryW } from './watched-header-btn.js';
import { refs } from './refs.js';
const Movie = {
  // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

let curLibrary = '';
let curPage = null;

export function onFilmLibClick(active) {
  curLibrary = active;

  // console.log(curLibrary);

  const filmLib = document.querySelectorAll('.my-library .film-card');

  [...filmLib].forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.classList.contains('js-watched') || e.target.classList.contains('js-queue')) {
        e.currentTarget.style.display = 'none';
        // console.log('1');
        const { totalPage, procMarkup } = checkCountCard();
        // console.log(procMarkup, totalPage);
        if (procMarkup.length === 0 && totalPage > 0) {
          refs.paginListLibrary.dataset.page -= 1;
          const pageActive = refs.paginListLibrary.dataset.page;
          // console.log(pageActive);
          if (curLibrary === Movie.QUEUE) {
            renderLibraryQ(curLibrary, Number(pageActive));
          } else if (curLibrary === Movie.WATCHED) {
            renderLibraryW(curLibrary, Number(pageActive));
          }
        } else if (totalPage === 0) {
          checkEmptyLibrary();
        }
      }
    });
  });
}

function checkEmptyLibrary() {
  // console.log('сработало');
  if (curLibrary === 'queue') {
    const dataFromLocalQ = JSON.parse(localStorage.getItem(Movie.QUEUE));

    if (dataFromLocalQ?.length === 0 || dataFromLocalQ === null) {
      hidePagination();
    }
  } else if (curLibrary === 'watched') {
    const dataFromLocal = JSON.parse(localStorage.getItem(Movie.WATCHED));
    if (dataFromLocal?.length === 0 || dataFromLocal === null) {
      hidePagination();
    }
  }
}

function checkCountCard() {
  const dataFromLocalQ = localStorage.getItem(curLibrary);
  const dataForRenderQ = JSON.parse(dataFromLocalQ);
  if (dataForRenderQ?.length && dataForRenderQ) {
    const pageActive = refs.paginListLibrary.dataset.page;
    const { totalPage, procMarkup } = makeRenderDependView(dataForRenderQ, pageActive);

    return { totalPage, procMarkup };
  }

  return { totalPage: 0, procMarkup: '' };
}

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
