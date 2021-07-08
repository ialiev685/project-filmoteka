import {refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';

export function renderFilms(array) {
    refs.filmList.insertAdjacentHTML('beforeend', cardForm(array));
}