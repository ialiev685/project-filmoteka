import { getTrendItems } from './base-api.js'; /* -- 'page' на будущее для пагинации */
// import cardForm from '../hbs/cardForm.hbs'; удали
import { refs } from './refs.js';
import { renderFilms } from './renderFilms.js';

// const listFilm = document.querySelector('.films-list');  удали

async function getMarcup(page) {
  const data = await getTrendItems(page);
  // const result = cardForm(data.results);   удали

  // listFilm.insertAdjacentHTML('beforeend', result);  удали
  renderFilms(data.results); // не надо было удалять
}
refs.spinner.classList.add('spinner-hidden');
getMarcup(1);

export { getMarcup };
