import { getTrendItems } from "./base-api.js"; /* -- 'page' на будущее для пагинации */
import cardForm from "../hbs/cardForm.hbs";

const listFilm = document.querySelector(".films-list");

async function getMarcup(page) {
  const data = await getTrendItems(page);
  const result = cardForm(data.results);

  listFilm.innerHTML = result;
}
getMarcup(1);

export { getMarcup };
