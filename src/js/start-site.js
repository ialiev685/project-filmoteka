import { page, getTrendItems } from './base-api.js'; /* -- 'page' на будущее для пагинации */
// import cardForm from '../hbs/cardForm.hbs';
import { renderFilms } from './renderFilms.js';
import { refs } from './refs.js';

// const listFilm = document.querySelector('.films-list');

async function getMarcup() {
  const data = await getTrendItems();
  // const result = cardForm(data.results);
  renderFilms(data.results);
}

refs.spinner.classList.add('spinner-hidden');
getMarcup();