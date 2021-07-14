const debounce = require('debounce');
import { refs } from './refs.js';
import MoviesApiService from './fetchMovie.js';
import searchHint from '../hbs/serachHint.hbs';
const moviesApiService = new MoviesApiService();

refs.headerInput.addEventListener('input', debounce(onHint, 200));
let currentIndex = null;

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
  currentIndex = null; //обнуление текущей выбранной строки

  sortVote(data);
  correctionVote(data);
  const markup = searchHint(data);
  refs.hintEl.classList.remove('is-hidden');

  refs.hintEl.innerHTML = markup;
  window.addEventListener('keyup', closeWithKey);
  window.addEventListener('keydown', activeArrow);
  refs.hintEl.addEventListener('click', addValueInput);
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
  window.removeEventListener('keyup', closeWithKey);
}

function closeWithKey(e) {
  if (e.code === 'Escape' || e.code === 'Enter') {
    removeHintBox();
    window.removeEventListener('keyup', closeWithKey);
  }
}

function addValueInput(e) {
  if (e.target.className === 'item-table cell-one') {
    refs.headerInput.value = e.target.textContent.trim();
    refs.headerInput.focus();
    removeHintBox();
  }
}

function activeArrow(e) {
  const rowsHintList = document.querySelectorAll('.search-hint-table .row-table');
  if (currentIndex === null) {
    currentIndex = 0;
  }

  const lenRows = rowsHintList.length;
  console.log(lenRows);

  if (e.code === 'ArrowDown' && currentIndex < lenRows) {
    rowsHintList[currentIndex].classList.remove('current');
    currentIndex += 1;

    rowsHintList[currentIndex].classList.add('current');
  }
  if (e.code === 'ArrowUp' && currentIndex > 0) {
    rowsHintList[currentIndex].classList.remove('current');
    currentIndex -= 1;

    rowsHintList[currentIndex].classList.add('current');
  }

  console.log('текущий индекс', currentIndex);
}
