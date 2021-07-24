import { refs } from './refs.js';
import langArray from '../json/lang.json';
import { getTrendItems } from './base-api.js';
import { renderFilms } from './renderFilms.js';
import { renderWatchedFilms } from './watched-header-btn.js';
import { renderQueueFilms } from './queue-header-btn.js';
import { sortFilms, sortBtnRemove, correctionMargin } from './sortRenderFilms.js';
import {incorrectData} from './pnotify';
import {incorrectDataRu} from './pnotify';


const Language = {
  EN: 'en',
  RU: 'ru',
};

const Movie = {
  // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

refs.switchLangCheckbox.addEventListener('change', e => {
  changeSignColor(e);
  const lang = switchLanguage(e);
  translateInterface(lang);
  if (refs.myLibraryBtn.classList.contains('current')) {
    if (refs.watchedHeaderBtn.classList.contains('current-btn')) {
      let page = 1;
      const dataFromLocal = localStorage.getItem(Movie.WATCHED);
      const dataForRender = JSON.parse(dataFromLocal);
      if (dataForRender) {
        renderWatchedFilms(dataForRender, page);
      } else refs.watchedFilms.innerHTML = '';
    };
    if (refs.queueHeaderBtn.classList.contains('current-btn')) {
      let page = 1;
      const dataFromLocal = localStorage.getItem(Movie.QUEUE);
      const dataForRender = JSON.parse(dataFromLocal);
      if (dataForRender) {
        renderQueueFilms(dataForRender, page);
      } else refs.watchedFilms.innerHTML = '';
    };

    return;
  };
  sortBtnRemove();
  onChangeLang();
});

async function onChangeLang() {
  const films = await getTrendItems(1);
  // console.log('сработало');
  renderFilms(films);
}

export function switchLanguage(evt) {
  const result = evt.target.checked ? Language.RU : Language.EN;
  localStorage.setItem('language', result);
  return result;
}

function changeSignColor(evt) {
  if (evt.target.checked) {
    refs.signLangEng.classList.remove('is-active-lang');
    refs.signLangRus.classList.add('is-active-lang');
  } else {
    refs.signLangEng.classList.add('is-active-lang');
    refs.signLangRus.classList.remove('is-active-lang');
  }
}

checkAndSetLanguage();

function checkAndSetLanguage() {
  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', Language.EN);
  } else {
    localStorage.getItem('language');
  }
}
// const dayBtn = document.querySelector('.dropdown-value');
// const dayBtn = document.querySelector('#day');
// const weekBtn = document.querySelector('#week');
// const popInput = document.querySelector('.dropdown-value');
// console.log(popInput.innerHTML);

export function translateInterface() {
  if (localStorage.getItem('language') === 'ru') {
    refs.myLibraryBtn.innerHTML = 'Библиотека';
    refs.homeBtn.innerHTML = 'Главная';
    refs.headerInput.placeholder = 'Искать фильм';
    refs.popularData.innerHTML = 'Популярные';
    refs.sortFilmsText.innerHTML = 'Фильтр по';
    refs.sortFilmsBtnGenre.innerHTML = 'Жанру';
    refs.sortFilmsBtnRating.innerHTML = 'Рейтингу';
    refs.sortFilmsBtnYear.innerHTML = 'Году';
    refs.watchedHeaderBtn.innerHTML = 'Просмотренные';
    refs.queueHeaderBtn.innerHTML = 'Очередь';
    refs.msgEmtpyEl.innerHTML = 'Ничего нет';
    refs.dropdownListPopularSortDay.innerHTML = 'день';
    refs.dropdownListPopularSortWeek.innerHTML = 'неделя';
    if (localStorage.getItem('popularity') === 'day') {
      refs.dropdownPopularSortValue.innerHTML = 'день';
    } else if (localStorage.getItem('popularity') === 'week') {
      refs.dropdownPopularSortValue.innerHTML = 'неделя';      
      refs.authBtn.innerHTML = 'ВОЙТИ';
      
    };
    // popInput.innerHTML = 'день';

  } else {
    refs.myLibraryBtn.innerHTML = 'My library';
    refs.homeBtn.innerHTML = 'Home';
    refs.headerInput.placeholder = 'Movie search';
    refs.popularData.innerHTML = 'Popular';
    refs.sortFilmsText.innerHTML = 'Sort by';
    refs.sortFilmsBtnGenre.innerHTML = 'Genre';
    refs.sortFilmsBtnRating.innerHTML = 'Rating';
    refs.sortFilmsBtnYear.innerHTML = 'Year';
    refs.watchedHeaderBtn.innerHTML = 'Watched';
    refs.queueHeaderBtn.innerHTML = 'Queue';
    refs.msgEmtpyEl.innerHTML = 'Empty';
    refs.dropdownListPopularSortDay.innerHTML = 'day';
    refs.dropdownListPopularSortWeek.innerHTML = 'week';
      if (localStorage.getItem('popularity') === 'day') {
      refs.dropdownPopularSortValue.innerHTML = 'day';
    } else if (localStorage.getItem('popularity') === 'week') {
      refs.dropdownPopularSortValue.innerHTML = 'week';
      refs.authBtn.innerHTML = 'SIGN IN';
    };
    // popInput.innerHTML = 'day';
  }
}

moveProperPositionOfToggle();

function moveProperPositionOfToggle() {
  if (localStorage.getItem('language') === Language.RU) {
    refs.switchLangCheckbox.checked = true;
    refs.signLangRus.classList.add('is-active-lang');
  } else {
    refs.signLangEng.classList.add('is-active-lang');
  }
}
