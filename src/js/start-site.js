
import { getTrendItems } from "./base-api.js"; /* -- 'page' на будущее для пагинации */
import cardForm from "../hbs/cardForm.hbs";
import { refs } from './refs.js';
import { renderFilms } from './renderFilms.js';

const listFilm = document.querySelector(".films-list");

async function getMarcup(page) {
  const data = await getTrendItems(page);
  renderFilms(data.results);
}
refs.spinner.classList.add('spinner-hidden');
getMarcup(1);

export { getMarcup };

