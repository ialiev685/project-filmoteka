import cardForm from '../hbs/cardForm.hbs';
import { refs } from './refs.js';


export function renderFilms(array) {
    refs.filmList.insertAdjacentHTML('beforeend', cardForm(array));
}