import { refs } from '../refs.js';

const sortInput = refs.dropdownPopularSort;
const sortDay = refs.dropdownListPopularSortDay;
const sortWeek = refs.dropdownListPopularSortWeek;
const sortValue = refs.dropdownPopularSortValue;

sortValue.addEventListener('click', onDropdownListClick);

function onDropdownListClick(e) {
    sortInput.classList.toggle('active');
    
    sortDay.addEventListener('click', onSortDayClick);
    sortWeek.addEventListener('click', onSortWeekClick);
   
    // if (sortInput.classList.contains('active')) {
    //     window.addEventListener('click', onInputSortRemoveClick);
    // }
};

// function onInputSortRemoveClick(e) {
//     sortInput.classList.remove('active');
//      sortDay.removeEventListener('click', onSortDayClick);
//     sortWeek.removeEventListener('click', onSortWeekClick);
// };

function onSortDayClick() {
    sortValue.textContent = 'за день';
    sortInput.classList.remove('active');
    sortDay.removeEventListener('click', onSortDayClick);
    sortWeek.removeEventListener('click', onSortWeekClick);
};

function onSortWeekClick() {
    sortValue.textContent = 'за неделю';
    sortInput.classList.remove('active');
     sortDay.removeEventListener('click', onSortDayClick);
    sortWeek.removeEventListener('click', onSortWeekClick);
};

