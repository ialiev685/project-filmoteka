const debounce = require('debounce');
import { refs } from './refs.js';
import MoviesApiService from './fetchMovie.js';
import searchHint from '../hbs/serachHint.hbs';
const moviesApiService = new MoviesApiService();

refs.headerInput.addEventListener('input', debounce(onHint, 200));

async function onHint(e) {
  const value = e.target.value.trim();

  if (value === '') {
    removeHintBox();
    return;
  }
  moviesApiService.query = value;
  try {
    const responce = await moviesApiService.fetchMovie(1);

    const data = responce.results;

    renderHint(data);
  } catch (err) {
    removeHintBox();
    //err.message = Cannot read property 'results' of undefined
  }
}

function renderHint(data) {
  sortVote(data);
  correctionVote(data);
  const markup = searchHint(data);
  refs.hintEl.classList.remove('is-hidden');
  refs.hintEl.innerHTML = markup;
}

function sortVote(data) {
  data.sort((a, b) => b.vote_average - a.vote_average);
  correctionVote(data);
}

function correctionVote(data) {
  const regExp = '[.]+';
  data.forEach((elem, index, array) => {
    let vote = String(elem.vote_average);
    if (vote.match(regExp) === null) {
      vote += '.0';
      array[index].vote_average = vote;
    }
  });
  return data;
}

function removeHintBox() {
  refs.hintEl.innerHTML = '';
  refs.hintEl.classList.add('is-hidden');
}
