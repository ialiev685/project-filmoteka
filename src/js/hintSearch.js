const debounce = require('debounce');
import { refs } from './refs.js';
import MoviesApiService from './fetchMovie.js';
import searchHint from '../hbs/serachHint.hbs';
const moviesApiService = new MoviesApiService();

refs.headerInput.addEventListener('input', debounce(onHint, 200));

async function onHint(e) {
  const value = e.target.value.trim();

  if (value === '') return;
  moviesApiService.query = value;
  const responce = await moviesApiService.fetchMovie(1);
  const data = responce.results;
  console.log(data);
  sortVote(data);
}

function sortVote(data) {
  data.sort((a, b) => b.vote_average - a.vote_average);
  const markup = searchHint(data);

  refs.hintEl.innerHTML = markup;
}
