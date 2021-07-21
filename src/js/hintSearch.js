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
  window.addEventListener('keydown', activeArrowAndChoose);
  window.addEventListener('mousemove', onHover);
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
  refs.hintEl.classList.add('is-hidden'); //добавить при нажатии в поиск
  removeListener();
}

function closeWithKey(e) {
  if (e.code === 'Escape' || e.code === 'Enter') {
    removeHintBox();
    removeListener();
  }
}

function addValueInput(e) {
  // console.log(e.target);

  if (e.target.className === 'item-table cell-one') {
    refs.headerInput.value = e.target.textContent.trim();
    refs.headerInput.focus();
    removeHintBox();
  }
}

function activeArrowAndChoose(e) {
  const rowsHintList = getArrayHintList();

  //начальная активация сверху / снизу
  if (currentIndex === null && e.code === 'ArrowDown') {
    clearCurrent();
    currentIndex = 0;
    rowsHintList[currentIndex].classList.add('current');
    scrollToCurrent();
    return;
  } else if (currentIndex === null && e.code === 'ArrowUp') {
    clearCurrent();
    currentIndex = 19;
    rowsHintList[currentIndex].classList.add('current');
    scrollToCurrent();
    return;
  }

  const lenRows = rowsHintList.length;

  //передвижение вверх / вниз
  if (e.code === 'ArrowDown' && currentIndex < lenRows - 1) {
    clearCurrent();
    currentIndex += 1;
    rowsHintList[currentIndex].classList.add('current');
    scrollToCurrent();
  } else if (e.code === 'ArrowUp' && currentIndex > 0) {
    clearCurrent();
    currentIndex -= 1;
    rowsHintList[currentIndex].classList.add('current');
    scrollToCurrent();
  }

  //выбрать значение
  if (e.code === 'Enter' && currentIndex !== null) {
    const value = rowsHintList[currentIndex].children[0].textContent.trim();
    refs.headerInput.value = value;
  }
}

function onHover(e) {
  if (e.target.parentElement.className === 'row-table') {
    clearCurrent();
    e.target.parentElement.classList.add('current');
    getArrayHintList().forEach((el, index, array) => {
      if (array[index].classList.contains('current')) {
        currentIndex = index;
      }
    });
  }
}

function clearCurrent() {
  getArrayHintList().forEach((el, index, array) => {
    array[index].classList.remove('current');
  });
}

function scrollToCurrent() {
  const activeEl = document.querySelector('.row-table.current');
  activeEl.scrollIntoView({ block: 'end' });
}

function getArrayHintList() {
  return document.querySelectorAll('.search-hint-table .row-table');
}

function removeListener() {
  window.removeEventListener('keyup', closeWithKey);
  window.removeEventListener('keydown', activeArrowAndChoose);
  window.removeEventListener('mousemove', onHover);
}
