import { refs } from '../refs.js';
import { serverRequestMoviesDay, serverRequestMoviesWeek } from './render-popularity-sort.js';

const sortInput = refs.dropdownPopularSort;
const sortDay = refs.dropdownListPopularSortDay;
const sortWeek = refs.dropdownListPopularSortWeek;
const sortValue = refs.dropdownPopularSortValue;

sortValue.addEventListener('click', onDropdownListClick);

function onDropdownListClick() {
    sortInput.classList.toggle('active');
    
    sortDay.addEventListener('click', onSortDayClick);
    sortWeek.addEventListener('click', onSortWeekClick);
};

function onSortDayClick() {
    sortValue.textContent = 'за день';
    
    serverRequestMoviesDay()

    sortInput.classList.remove('active');
    sortDay.removeEventListener('click', onSortDayClick);
    sortWeek.removeEventListener('click', onSortWeekClick);
};

function onSortWeekClick() {
    sortValue.textContent = 'за неделю';

    serverRequestMoviesWeek()

    sortInput.classList.remove('active');
     sortDay.removeEventListener('click', onSortDayClick);
    sortWeek.removeEventListener('click', onSortWeekClick);
};


