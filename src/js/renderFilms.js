import { refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';
import { getGenres } from './genres.js';
import { getReleaseYear } from './years.js';
import { checkHasFilmImage } from './is-image.js';
import { getVote } from './vote-avarage.js';
import ButtonAction from './button-action.js';

const btnSwitch = new ButtonAction({
  textAdd: 'add to',
  textRemove: 'remove from',
});

export function renderFilms(array) {
  const newArr = array.slice();
  const newFilmsMarkup = newArr.results.map(elem => {
    return btnSwitch.addButtonText(elem);
  });
  refs.filmList.insertAdjacentHTML('beforeend', cardForm(newFilmsMarkup));
  btnSwitch.clickButtonOverlay(newFilmsMarkup);
  getGenres(array);
  getReleaseYear(array);
  getVote(array);
  checkHasFilmImage(array);
}
import { renderPagination } from './pagination.js';

export function renderFilms(array, valueSeatch = 'empty') {
  refs.filmList.innerHTML = '';
  refs.filmList.insertAdjacentHTML('beforeend', cardForm(array.results));
  renderPagination(array.total_pages, array.page, valueSeatch); // передаем пагинацию
  getGenres(array.results);
  getReleaseYear(array.results);
  getVote(array.results);
  checkHasFilmImage(array.results);
}
