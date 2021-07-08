import MoviesApiService from './fetchMovie.js';
import { refs } from './refs.js';


const moviesApiService = new MoviesApiService();

refs.searchBtn.addEventListener('click', onMovieSearchClick);

function onMovieSearchClick() {
    moviesApiService.query = refs.headerInput.value.trim();
    removeFilmList();

    moviesApiService.fetchMovie().then(renderFilmsCards).catch(onFatchError);;

}

function renderFilmsCards() {
console.log(123);
};

function removeFilmList() {
  refs.filmList.innerHTML = '';
};

function onFatchError(error) {
   console.log(error);
};
    
export {moviesApiService}