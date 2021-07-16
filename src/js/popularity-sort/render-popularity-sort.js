import { getTrendMoviesDay, getTrendMoviesWeek } from './fatch-popularity-sort.js';
import { removeFilmList } from '../movieSearch.js';
import { renderFilms } from '../renderFilms.js';

async function serverRequestMoviesDay() {
    try {
        let fatch = await getTrendMoviesDay();
        removeFilmList();
        renderFilms(fatch);
    } catch (error) {
        console.log(error);
    }
};

async function serverRequestMoviesWeek() {
    try {
        let fatch = await getTrendMoviesWeek();
        removeFilmList();
        renderFilms(fatch);
    } catch (error) {
        console.log(error);
    }
};

export {serverRequestMoviesDay, serverRequestMoviesWeek}