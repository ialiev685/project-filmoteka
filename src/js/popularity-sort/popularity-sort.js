import { refs } from '../refs.js';
// import { serverRequestMoviesDay, serverRequestMoviesWeek } from './render-popularity-sort.js';
// import { getMarcup } from '../start-site.js';
import { getTrendItems } from '../base-api.js';
import { sortBtnRemove } from '../sortRenderFilms.js';
import { renderFilms } from '../renderFilms.js';

const sortInput = refs.dropdownPopularSort;
const sortDay = refs.dropdownListPopularSortDay;
const sortWeek = refs.dropdownListPopularSortWeek;
const sortValue = refs.dropdownPopularSortValue;

export const PopularitySort = {
  DAY: 'day',
  WEEK: 'week',
};

sortValue.addEventListener('click', onDropdownListClick);

function onDropdownListClick() {
  window.addEventListener('click', onRemoveSortInputClick);

  sortInput.classList.toggle('active');

  sortDay.addEventListener('click', onSortDayClick);
  sortWeek.addEventListener('click', onSortWeekClick);
}

function onRemoveSortInputClick(e) {
  if (sortInput.classList.contains('active') && e.target.className !== 'dropdown-value') {
    removeSortInput();
  }
}

async function onSortDayClick() {
  sortValue.textContent = 'за день';

  forWriteStorageClick();
  sortBtnRemove();
  const films = await getTrendItems(1);

  renderFilms(films);

  removeSortInput();
}

async function onSortWeekClick() {
  sortValue.textContent = 'за неделю';

  forWriteStorageClick();
  sortBtnRemove();
  const films = await getTrendItems(1);

  renderFilms(films);

  removeSortInput();
}

function removeSortInput() {
  sortInput.classList.remove('active');
  sortDay.removeEventListener('click', onSortDayClick);
  sortWeek.removeEventListener('click', onSortWeekClick);
  window.removeEventListener('click', onRemoveSortInputClick);
}

//--------------запись в localStorage:
checkAndSetPopulation();

function checkAndSetPopulation() {
  if (localStorage.getItem('popularity') === null) {
    localStorage.setItem('popularity', PopularitySort.DAY);
  } else if (localStorage.getItem('popularity') === PopularitySort.DAY) {
    sortValue.textContent = 'за день';
  } else if (localStorage.getItem('popularity') === PopularitySort.WEEK) {
    sortValue.textContent = 'за неделю';
  }
}

function forWriteStorageClick() {
  if (sortValue.textContent === 'за день') {
    localStorage.setItem('popularity', PopularitySort.DAY);
  } else if (sortValue.textContent === 'за неделю') {
    localStorage.setItem('popularity', PopularitySort.WEEK);
  }
  return localStorage.getItem('popularity');
}

// if (localStorage.getItem('popularity') === PopularitySort.WEEK) {
//     //   serverRequestMoviesWeek();
// };
export { checkAndSetPopulation };