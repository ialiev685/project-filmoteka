// import { refs } from './refs.js';
// import { getFromLocalStorageWatched } from './add-to-watched-btn.js';
// import { renderFilms } from './renderFilms.js';

// refs.watchedHeaderBtn.addEventListener('click', () => {
//     refs.filmList.innerHTML = '';
//     renderFilms(getFromLocalStorageWatched());
// })
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

let page = 1;
let dataFilms = null;

// const dataFromLocal = localStorage.getItem(Movie.WATCHED);
// const dataForRender = JSON.parse(dataFromLocal);

refs.myLibraryBtn.addEventListener('click', () => {
  const dataFromLocal = localStorage.getItem(Movie.WATCHED);
  const dataForRender = JSON.parse(dataFromLocal);
  if (dataForRender) {
    const totalPage = dataForRender.length;
    renderWatchedFilms(dataForRender, totalPage);
  } else refs.watchedFilms.innerHTML = '';
});

refs.watchedBtn.addEventListener('click', () => {
  const dataFromLocal = localStorage.getItem(Movie.WATCHED);
  const dataForRender = JSON.parse(dataFromLocal);
  if (dataForRender) {
    renderWatchedFilms(dataForRender);
    // const filmLib = document.querySelectorAll('.film-card');
    // console.log(filmLib);
    // [...filmLib].forEach((el) => {
    //   el.addEventListener('click', (e) => {

    //     if (e.target.classList.contains('js-queue') || e.target.classList.contains('js-watched')) {
    //       e.currentTarget.style.display = 'none';
    //     }
    //   });
    // });
    onFilmLibClick();
  } else refs.watchedFilms.innerHTML = '';
});

function renderWatchedFilms(films) {
  openLibrary();
  refs.watchedFilms.innerHTML = '';
  // refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(films));
  const newFilmsMarkup = films.map(elem => {
    return btnSwitch.addButtonText(elem);
  });

  //////
  // const { totalPage, results } = makeRenderDependView(newFilmsMarkup);
  makeRenderDependView(newFilmsMarkup);
  // refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(results));
  // renderPagination(totalPage, page);

  //////

  btnSwitch.clickButtonOverlay(results);

  //   getGenres(films);
  //   getReleaseYear(films);
  //   getVote(films);
  //   onClickAppearVote();
  // }

  ////////////////
}
function makeRenderDependView(arrFilms) {
  dataFilms = arrFilms;
  const countFilms = arrFilms.length;

  // console.log(countFilms);

  const { totalPage, countListFilms } = defineCountFilmsList(countFilms);
  console.log('totalPage в моей функции', totalPage);
  // console.log('total, countfilms', totalPage, countListFilms);

  const start = page * countListFilms - countListFilms;
  const end = page * countListFilms;
  // console.log(start, end);
  const newArray = arrFilms.slice(start, end);
  // console.log(newArray);
  // const objFilms = { totalPage, results: newArray };
  // console.log(objFilms);

  // return objFilms;

  refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(newArray));
  console.log('номер страницы', page);

  renderPagination(totalPage, page);
  btnSwitch.clickButtonOverlay(newArray);

  getGenres(newArray);
  getReleaseYear(newArray);
  getVote(newArray);
  onClickAppearVote();
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

function renderPagination(total_pages, curPage) {
  console.log(' total_pages в рендере', total_pages);

  page = curPage;
  const numbers = Array(total_pages)
    .fill(0)
    .map((el, i) => i + 1);

  const elements = numbers.map(
    el => `<button class="pagination-btn ${el === page ? 'active' : ''}">${el}</button>`,
  );

  const backArrow = `<svg width="40" height="40" fill="none" class='arrow' id="back-arrow">
      <rect width="40" height="40" rx="5" class="arrow-rect" />
      <path
        d="M24.667 20h-9.334M20 24.667L15.333 20 20 15.334"
     class='arrow-path'  
        stroke-width="1.333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`;
  const nextArrow = `<svg width="40" height="40" fill="none" class='arrow' id="next-arrow">
  <rect class="arrow-rect" width="40" height="40" rx="5" transform="matrix(-1 0 0 1 40 0)" />
  <path d="M15.333 20h9.334M20 24.667L24.667 20 20 15.334"  class='arrow-path'  stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const step = 3;
  const startCondition = page - step > 1;
  const endCondition = page + step <= elements.length;
  const endConditionArrow = page + step < elements.length;
  const start = startCondition ? page - step : 0;
  const end = page + step - 1;
  const slicedElements = elements.slice(start, end);

  refs.paginListSearch.innerHTML =
    (page === 1 ? '' : backArrow) +
    (startCondition ? elements[0] + '&#8943' : '') +
    slicedElements.join('') +
    (endConditionArrow ? '&#8943' : '') +
    (endCondition ? elements[elements.length - 1] : '') +
    (page === elements.length ? '' : nextArrow);
  nextArrow;
}

refs.paginListSearch.addEventListener('click', listener, false);

function nextRenderMarcup(page) {
  refs.watchedFilms.innerHTML = '';

  makeRenderDependView(dataFilms);
  // if (dataSearch === 'empty') {
  //   getMarcup(page);
  // } else if (dataSearch !== 'empty') {
  //   moviesApiService.query = dataSearch;
  //   const value = dataSearch;
  //   const data = await moviesApiService.fetchMovie(page);
  //   renderFilms(data, value);
  // }
}

function incremRenderMarcup() {
  page += 1;
  nextRenderMarcup(page);
}

function decremRenderMarcup() {
  page -= 1;
  nextRenderMarcup(page);
}

function listener(ev) {
  if (ev.target === ev.currentTarget || ev.target.textContent === `${page}`) {
    return;
  }

  const btns = [...ev.currentTarget.children];
  btns.forEach(btn => btn.classList.remove('active'));
  ev.target.classList.add('active');

  if (ev.target.parentElement.id === 'next-arrow') {
    console.dir(ev.target);
    incremRenderMarcup();
    return;
  }

  if (ev.target.parentElement.id === 'back-arrow') {
    decremRenderMarcup();
    return;
  }

  page = Number(ev.target.textContent);
  nextRenderMarcup(page);

  // renderPagination();
}
