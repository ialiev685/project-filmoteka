import { getTrendItems } from './base-api.js'; /* -- 'page' на будущее для пагинации */
import { renderPagination } from './pagination.js';
import { refs } from './refs.js';
import { renderFilms } from './renderFilms.js';

// import { renderFilms } from './renderFilms.js';

async function getMarcup(page) {
  const valueSort = localStorage.getItem('popularity');

  const data = await getTrendItems(page, valueSort);
  renderFilms(data.results);
}
refs.spinner.classList.add('spinner-hidden');
getMarcup(1);

export { getMarcup };
