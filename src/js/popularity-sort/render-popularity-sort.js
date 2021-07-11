import { getTrendMoviesDay, getTrendMoviesWeek } from './fatch-popularity-sort.js';
import cardForm from '../../hbs/cardForm.hbs';
import { refs } from '../refs.js';
import { removeFilmList } from '../movieSearch.js';

async function serverRequestMoviesDay() {
    try {
        let fatch = await getTrendMoviesDay();
        renderFilmsCards(fatch);
    } catch (error) {
        console.log(error);
    }
};

async function serverRequestMoviesWeek() {
    try {
        let fatch = await getTrendMoviesWeek();
        renderFilmsCards(fatch);
    } catch (error) {
        console.log(error);
    }
};

function renderFilmsCards(films) {
    removeFilmList();
   refs.filmList.insertAdjacentHTML('beforeend', cardForm(films)); 
};

export {serverRequestMoviesDay, serverRequestMoviesWeek}