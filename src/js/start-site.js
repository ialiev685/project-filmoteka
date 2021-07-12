import { getTrendItems } from './base-api.js'; /* -- 'page' на будущее для пагинации */
// import cardForm from '../hbs/cardForm.hbs'; удали
import { refs } from './refs.js';

import { renderFilms } from "./renderFilms.js";
// import render from "htmlparser2/node_modules/dom-serializer";

// const listFilm = document.querySelector(".films-list");

async function getMarcup(page) {
  const data = await getTrendItems(page);
  renderFilms(data.results);
  // const result = cardForm(data.results);

  // listFilm.insertAdjacentHTML("beforeend", result);

}
refs.spinner.classList.add('spinner-hidden');
getMarcup(1);

export { getMarcup };
