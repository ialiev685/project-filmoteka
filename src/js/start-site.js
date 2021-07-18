import { getTrendItems } from './base-api.js';

import { refs } from './refs.js';
import { renderFilms } from './renderFilms.js';
import { checkAndSetPopulation } from './popularity-sort/popularity-sort.js';
checkAndSetPopulation();

async function getMarcup(page) {
  const data = await getTrendItems(page);
  renderFilms(data);
}
refs.spinner.classList.add('spinner-hidden');
getMarcup(1);

export { getMarcup };
