import { refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';
import { getGenres } from './genres.js';
import { getReleaseYear } from './years.js';
import { checkHasFilmImage } from './is-image.js';
import { getVote } from './vote-avarage.js';
import ButtonAction from './button-action.js';
import { renderPagination } from './pagination.js';
import { translateInterface } from './switch-language.js';
import langArray from '../json/lang.json';
import cardFormRus from '../hbs/cardFormRus.hbs';
import headerRender from './render-header.js';

import { sortFilms } from './sortRenderFilms';

import { onClickDisappearVote } from './appear-votes';

const btnSwitch = new ButtonAction({
  textQueue: 'queue',
  textWatched: 'watched',
  textAdd: 'add to',
  textRemove: 'remove from',
});

const btnSwitchRus = new ButtonAction({
  textQueue: 'очередь',
  textWatched: 'просмотрено',
  textAdd: 'в',
  textRemove: 'из',
});

export function renderFilms(array, valueSeatch = 'empty') {
  refs.filmList.innerHTML = '';

  if (localStorage.getItem('language') === 'ru') {
    const newFilmsMarkup = array.results.map(elem => {
      return btnSwitchRus.addButtonText(elem);
    });
    refs.filmList.insertAdjacentHTML('beforeend', cardFormRus(newFilmsMarkup));
    btnSwitchRus.clickButtonOverlay(newFilmsMarkup);
    sortFilms(newFilmsMarkup);
  } else {
    const newFilmsMarkup = array.results.map(elem => {
      return btnSwitch.addButtonText(elem);
    });
    refs.filmList.insertAdjacentHTML('beforeend', cardForm(newFilmsMarkup));
    btnSwitch.clickButtonOverlay(newFilmsMarkup);
    sortFilms(newFilmsMarkup);
  }

  renderPagination(array.total_pages, array.page, valueSeatch); // передаем пагинацию

  getGenres(array.results);
  getReleaseYear(array.results);
  getVote(array.results);
  checkHasFilmImage(array.results);
  translateInterface();
  // headerRender();

  // onClickDisappearVote();
  sortFilms(array.results);
}
