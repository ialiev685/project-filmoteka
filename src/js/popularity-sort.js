import { refs } from './refs.js';

refs.dropdownPopularSort.addEventListener('click', onDropdownListClick);

function onDropdownListClick(e) {
    refs.dropdownPopularSort.classList.toggle('active');

    refs.dropdownListPopularSortDay.addEventListener('click', onSortDayClick)
    refs.dropdownListPopularSortWeek.addEventListener('click', onSortWeekClick)

};

function onSortDayClick() {
    refs.dropdownPopularSortValue.textContent = 'за день';
}

function onSortWeekClick() {
    refs.dropdownPopularSortValue.textContent = 'за неделю';
}
