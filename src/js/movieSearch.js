import MoviesApiService from './fetchMovie.js';
import { refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';

const moviesApiService = new MoviesApiService();

refs.searchBtn.addEventListener('click', onMovieSearchClick);

function onMovieSearchClick() {
    moviesApiService.query = refs.headerInput.value.trim();
    removeFilmList();

    moviesApiService.fetchMovie().then(renderFilmsCards).catch(onFatchError);

}

function renderFilmsCards(films) {
  refs.filmList.insertAdjacentHTML('beforeend', cardForm(films.results));
};

function removeFilmList() {
  refs.filmList.innerHTML = '';
};

function onFatchError(error) {
   console.log(error);
};
    
export {moviesApiService}