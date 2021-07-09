import MoviesApiService from './fetchMovie.js';
import { refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';

const moviesApiService = new MoviesApiService();

refs.searchBtn.addEventListener('click', onMovieSearchClick);
refs.headerInput.addEventListener('keydown', onEnterInputClick);
refs.headerInput.addEventListener('focus', DeleteWarningString);
refs.headerInput.addEventListener('input', DeleteWarningString);

async function onMovieSearchClick() {
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
  }
};

function renderFilmsCards(films) {
  removeFilmList();
  DeleteWarningString()

  refs.filmList.insertAdjacentHTML('beforeend', cardForm(films));
};

function removeFilmList() {
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

export {moviesApiService}