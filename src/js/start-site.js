
import { getTrendItems } from "./base-api.js"; /* -- 'page' на будущее для пагинации */
import cardForm from "../hbs/cardForm.hbs";
import { refs } from './refs.js';

const listFilm = document.querySelector(".films-list");

async function getMarcup(page) {

      const data = await getTrendItems(page);
      const result = cardForm(data.results);

      listFilm.insertAdjacentHTML("beforeend", result);
    
}
refs.spinner.classList.add('spinner-hidden');
getMarcup(1);

export { getMarcup };

