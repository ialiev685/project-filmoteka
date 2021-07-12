import MoviesApiService from './fetchMovie.js';
import { refs } from './refs.js';
import { renderFilms } from './renderFilms.js';

const moviesApiService = new MoviesApiService();

refs.searchBtn.addEventListener('click', onMovieSearchClick);
refs.headerInput.addEventListener('keydown', onEnterInputClick);
refs.headerInput.addEventListener('focus', DeleteWarningString);
refs.headerInput.addEventListener('input', DeleteWarningString);


async function onMovieSearchClick() {
  try {
    moviesApiService.query = refs.headerInput.value.trim();
   
    if (!moviesApiService.query) {
      showWarningString();
    };

    if (refs.headerInput.value !== '' && moviesApiService.query) {
      
      let fatch = await moviesApiService.fetchMovie();
      BoxPopularSortRemove();

      if (fatch !== undefined) {
        renderFilmsCards(fatch);
      }
    }
    
  } catch (error) {
    console.log(error);
  }
};

function renderFilmsCards(films) {
  removeFilmList();
  DeleteWarningString();
  renderFilms(films);
};

export function removeFilmList() {
  refs.filmList.innerHTML = '';
};
   
function onEnterInputClick(e) {
  if (e.key === "Enter") {
    onMovieSearchClick();
  }
};

function DeleteWarningString() {
  refs.warningString.classList.add('is-hidden');
};

function showWarningString() {
  refs.warningString.classList.remove('is-hidden');
};

function BoxPopularSortRemove() {
  refs.boxPopularSort.classList.add('is-hidden');
};

export function BoxPopularSortAdd() {
  refs.boxPopularSort.classList.remove('is-hidden');
};

export {moviesApiService}