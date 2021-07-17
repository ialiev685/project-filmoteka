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

const btnSwitch = new ButtonAction({
  textAdd: 'add to',
  textRemove: 'remove from',
});

const Movie = {
  // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

// const dataFromLocal = localStorage.getItem(Movie.WATCHED);
// const dataForRender = JSON.parse(dataFromLocal);

refs.myLibraryBtn.addEventListener('click', () => {
  const dataFromLocal = localStorage.getItem(Movie.WATCHED);
  const dataForRender = JSON.parse(dataFromLocal);
  if (dataForRender) {
    renderWatchedFilms(dataForRender);
  } else refs.watchedFilms.innerHTML = '';
});

refs.watchedBtn.addEventListener('click', () => {
  const dataFromLocal = localStorage.getItem(Movie.WATCHED);
  const dataForRender = JSON.parse(dataFromLocal);
  if (dataForRender) {
    renderWatchedFilms(dataForRender);
  } else refs.watchedFilms.innerHTML = '';
});

function renderWatchedFilms(films) {
  openLibrary();
  refs.watchedFilms.innerHTML = '';
  // refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(films));
  const newFilmsMarkup = films.map(elem => {
    return btnSwitch.addButtonText(elem);
  });
  refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(newFilmsMarkup));

  btnSwitch.clickButtonOverlay(newFilmsMarkup);

//   console.log(films);
  getGenres(films);
  // films.forEach(el => {
  //     const genres = el.genres.map((elem) => {
  //         return elem.name;
  //     });
  //     const arrayOfGenres = document.querySelectorAll('.name-genres');
  //     if (arrayOfGenres) {

  //         [...arrayOfGenres].forEach((el) => {
  //             el.innerHTML = genres.join(', ');
  //         })
  //     }

  // });
  getReleaseYear(films);
  getVote(films);
  onClickAppearVote();
}
