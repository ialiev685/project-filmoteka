import {refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';
import {getGenres} from './genres.js';
import { getReleaseYear } from './years.js';
import { checkHasFilmImage } from './is-image.js';
import {getVote} from './vote-avarage.js';

export function renderFilms(array) {
    refs.filmList.innerHTML = '';
    refs.filmList.insertAdjacentHTML('beforeend', cardForm(array));
    getGenres(array);
    getReleaseYear(array);
    getVote(array);
    checkHasFilmImage(array);

}
