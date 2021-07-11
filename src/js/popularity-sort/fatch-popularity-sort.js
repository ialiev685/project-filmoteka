import './popularity-sort';
import { KEY } from '../base-api.js';

const URL_DAY = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
const URL_WEEK = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`;

async function getTrendMoviesDay() {
    const response = await fetch(URL_DAY);
    const films = await response.json()
    return films.results;
};

async function getTrendMoviesWeek() {
    const response = await fetch(URL_WEEK);
    const films = await response.json();
    return films.results;
};

export {getTrendMoviesDay, getTrendMoviesWeek}