import {refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs';
import {getGenres} from './genres.js';
import { getReleaseYear } from './years.js';
import { checkHasFilmImage } from './is-image.js';
import { getVote } from './vote-avarage.js';
import ButtonAction from './button-action.js';

const btnSwitch = new ButtonAction({
    textAdd: "add to",
    textRemove: "remove from"
});

export function renderFilms(array) {
    const newArr = array.slice();
    const newFilmMarkup = newArr.map((elem) => { return btnSwitch.addButtonText(elem) });
    refs.filmList.insertAdjacentHTML('beforeend', cardForm(newFilmMarkup));
    const queueList = document.querySelectorAll('.js-queue');
    const watchedList = document.querySelectorAll('.js-watched');
    const deleteList = document.querySelectorAll('.js-delete');
   
    btnSwitch.clickButtonOverlay(queueList,watchedList,deleteList);
    getGenres(array);
    getReleaseYear(array);
    getVote(array);
    checkHasFilmImage(array);
};
