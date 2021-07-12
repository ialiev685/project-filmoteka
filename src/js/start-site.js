
import { getTrendItems } from "./base-api.js"; /* -- 'page' на будущее для пагинации */
import cardForm from "../hbs/cardForm.hbs";
import { refs } from './refs.js';
import { serverRequestMoviesWeek } from './popularity-sort/render-popularity-sort.js';
import { PopularitySort } from './popularity-sort/popularity-sort.js';

const listFilm = document.querySelector(".films-list");

async function getMarcup(page) {
    if (localStorage.getItem('popularity') === PopularitySort.WEEK) {
      serverRequestMoviesWeek();
    }
    else if (localStorage.getItem('popularity') === PopularitySort.DAY) {
      const data = await getTrendItems(page);
      const result = cardForm(data.results);

      listFilm.insertAdjacentHTML("beforeend", result);
    }
}
refs.spinner.classList.add('spinner-hidden');
getMarcup(1);

export { getMarcup };

