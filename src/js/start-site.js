import { page, getTrendItems } from './base-api.js'; /* -- 'page' на будущее для пагинации */
import cardForm from '../hbs/cardForm.hbs';
import { refs } from './refs.js';
import { renderFilms } from './renderFilms.js';

// const listFilm = document.querySelector('.films-list');

async function getMarcup() {
  const data = await getTrendItems();
  // const result = cardForm(data.results);
  renderFilms(data.results);

  // listFilm.insertAdjacentHTML('beforeend', result);
}
getMarcup();