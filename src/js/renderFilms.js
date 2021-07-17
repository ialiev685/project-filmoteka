import { refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';
import { getGenres } from './genres.js';
import { getReleaseYear } from './years.js';
import { checkHasFilmImage } from './is-image.js';
import { getVote } from './vote-avarage.js';
import ButtonAction from './button-action.js';
import { renderPagination } from './pagination.js';
import { onClickDisappearVote } from './appear-votes';

const btnSwitch = new ButtonAction({
  textAdd: 'add to',
  textRemove: 'remove from',
});

export function renderFilms(array, valueSeatch = 'empty') {
  refs.filmList.innerHTML = '';
  const newFilmsMarkup = array.results.map(elem => {
    return btnSwitch.addButtonText(elem);
  });
  refs.filmList.insertAdjacentHTML('beforeend', cardForm(newFilmsMarkup));
  renderPagination(array.total_pages, array.page, valueSeatch); // передаем пагинацию
  btnSwitch.clickButtonOverlay(newFilmsMarkup);
  getGenres(array.results);
  getReleaseYear(array.results);
  getVote(array.results);
  checkHasFilmImage(array.results);
  // onClickDisappearVote();
}

// export function renderFilms(array, valueSeatch = 'empty') {
//   refs.filmList.innerHTML = '';
//   refs.filmList.insertAdjacentHTML('beforeend', cardForm(array.results));
//   renderPagination(array.total_pages, array.page, valueSeatch); // передаем пагинацию
//   getGenres(array.results);
//   getReleaseYear(array.results);
//   getVote(array.results);
//   checkHasFilmImage(array.results);
// }
