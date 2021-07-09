import MoviesApiService from './fetchMovie.js';
import { refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';

const moviesApiService = new MoviesApiService();

refs.searchBtn.addEventListener('click', onMovieSearchClick);

async function onMovieSearchClick(e) {
  try {
    moviesApiService.query = refs.headerInput.value.trim();

    if (refs.headerInput.value !== '') {
      
      let fatch = await moviesApiService.fetchMovie();
      
      if (fatch !== undefined) {
        renderFilmsCards(fatch);
      }
    }
    
  } catch (error) {
    console.log(error);
  };
}

function renderFilmsCards(films) {
  removeFilmList();

  refs.warningString.classList.add('is-hidden');

  refs.filmList.insertAdjacentHTML('beforeend', cardForm(films));
};

function removeFilmList() {
  refs.filmList.innerHTML = '';
};
    
export {moviesApiService}