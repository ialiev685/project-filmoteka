import { refs } from '../refs.js';
import { serverRequestMoviesDay, serverRequestMoviesWeek } from './render-popularity-sort.js';

const sortInput = refs.dropdownPopularSort;
const sortDay = refs.dropdownListPopularSortDay;
const sortWeek = refs.dropdownListPopularSortWeek;
const sortValue = refs.dropdownPopularSortValue;

sortValue.addEventListener('click', onDropdownListClick);


function onDropdownListClick() {
    window.addEventListener('click', onRemoveSortInputClick);

    sortInput.classList.toggle('active');
    
    sortDay.addEventListener('click', onSortDayClick);
    sortWeek.addEventListener('click', onSortWeekClick);
};

function onRemoveSortInputClick(e) {
    if (sortInput.classList.contains('active') && e.target.className !== "dropdown-value") {
        removeSortInput();
    }
};

function onSortDayClick() {
    sortValue.textContent = 'за день';
    
    serverRequestMoviesDay();
    removeSortInput();
};

function onSortWeekClick() {
    sortValue.textContent = 'за неделю';

    serverRequestMoviesWeek();
    removeSortInput();
};

function removeSortInput() {
    sortInput.classList.remove('active');
    sortDay.removeEventListener('click', onSortDayClick);
    sortWeek.removeEventListener('click', onSortWeekClick);
    window.removeEventListener('click', onRemoveSortInputClick);
};
