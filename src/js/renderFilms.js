import { refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';
import { getGenres } from './genres.js';
import { getReleaseYear } from './years.js';
import { checkHasFilmImage } from './is-image.js';
import { getVote } from './vote-avarage.js';
import { renderPagination } from './pagination.js';
import { sortFilms } from './sort-films/sortRenderFilms';

export function renderFilms(array, valueSeatch = 'empty') {
  refs.filmList.innerHTML = '';
  refs.filmList.insertAdjacentHTML('beforeend', cardForm(array.results));
  renderPagination(array.total_pages, array.page, valueSeatch); // передаем пагинацию
  getGenres(array.results);
  getReleaseYear(array.results);
  getVote(array.results);
  checkHasFilmImage(array.results);
  sortFilms(array.results);
}
