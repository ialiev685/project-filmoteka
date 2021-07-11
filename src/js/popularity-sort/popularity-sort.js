import { refs } from '../refs.js';
import { getTrendMoviesDay, getTrendMoviesWeek } from './fatch-popularity-sort.js';
import { removeFilmList } from '../movieSearch.js';
import cardForm from '../../hbs/cardForm.hbs';

const sortInput = refs.dropdownPopularSort;
const sortDay = refs.dropdownListPopularSortDay;
const sortWeek = refs.dropdownListPopularSortWeek;
const sortValue = refs.dropdownPopularSortValue;
sortValue.addEventListener('click', onDropdownListClick);

function onDropdownListClick(e) {
    sortInput.classList.toggle('active');
    
    
    sortDay.addEventListener('click', onSortDayClick);
    sortWeek.addEventListener('click', onSortWeekClick);
   
};

function onSortDayClick() {
    sortValue.textContent = 'за день';
    sortInput.setAttribute('data-sort', 'day');

    removeFilmList();
    getTrendMoviesDay();

    getTrendMoviesDay().then(data => 
        renderFilmsCards(data)
    );
    

    sortInput.classList.remove('active');
    sortDay.removeEventListener('click', onSortDayClick);
    sortWeek.removeEventListener('click', onSortWeekClick);
};

function onSortWeekClick() {
    sortValue.textContent = 'за неделю';
    sortInput.setAttribute('data-sort', 'weed');

    getTrendMoviesWeek().then(data => 
        renderFilmsCards(data)
    );

    sortInput.classList.remove('active');
     sortDay.removeEventListener('click', onSortDayClick);
    sortWeek.removeEventListener('click', onSortWeekClick);
};

function renderFilmsCards(films) {
   refs.filmList.insertAdjacentHTML('beforeend', cardForm(films)); 
}
