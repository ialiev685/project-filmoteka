import MoviesApiService from './fetchMovie.js';
import { refs } from './refs.js';
import { renderFilms } from './renderFilms.js';

const moviesApiService = new MoviesApiService();

refs.searchBtn.addEventListener('click', onMovieSearchClick);
refs.headerInput.addEventListener('keydown', onEnterInputClick);
refs.headerInput.addEventListener('focus', DeleteWarningString);
refs.headerInput.addEventListener('input', DeleteWarningString);

let page = 1;
async function onMovieSearchClick(page) {
  try {
    if (moviesApiService.searchQuery !== refs.headerInput.value) {
      page = 1;
      newPage();
    } else {
      page = getPage();
    }
    moviesApiService.query = refs.headerInput.value.trim();

    if (!moviesApiService.query) {
      showWarningString();
    }

    if (refs.headerInput.value !== '' && moviesApiService.query) {
      let fatch = await moviesApiService.fetchMovie(page);
      BoxPopularSortRemove();
      if (fatch.results !== undefined) {
        const valueSeatch = refs.headerInput.value.trim();
        renderFilmsCards(fatch, valueSeatch);
      }
    }
  } catch (error) {
    console.log('Ошибка catch ' + error);
  }
}

function renderFilmsCards(films, valueSeatch) {
  removeFilmList();
  DeleteWarningString();
  renderFilms(films, valueSeatch);
}

export function removeFilmList() {
  refs.filmList.innerHTML = '';
}

function onEnterInputClick(e) {
  if (e.key === 'Enter') {
    onMovieSearchClick(page);
  }
}

function DeleteWarningString() {
  refs.warningString.classList.add('is-hidden');
}

function showWarningString() {
  refs.warningString.classList.remove('is-hidden');
}

function getPage() {
  return page;
}

function BoxPopularSortRemove() {
  refs.boxPopularSort.classList.add('is-hidden');
}

export function BoxPopularSortAdd() {
  refs.boxPopularSort.classList.remove('is-hidden');
}

export { moviesApiService, renderFilmsCards };

function newPage() {
  page = 1;
  return page;
}
