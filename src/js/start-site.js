import { getTrendItems } from "./base-api.js";
import { refs } from "./refs.js";
import { renderFilms } from "./renderFilms.js";

async function getMarcup(page) {
  const data = await getTrendItems(page);
  renderFilms(data.results);
}
refs.spinner.classList.add("spinner-hidden");
getMarcup(1);

export { getMarcup };
