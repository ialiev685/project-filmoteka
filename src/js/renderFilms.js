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
    const newFilmsMarkup = newArr.map((elem) => { return btnSwitch.addButtonText(elem) });
    refs.filmList.insertAdjacentHTML('beforeend', cardForm(newFilmsMarkup));
    btnSwitch.clickButtonOverlay(newFilmsMarkup);
    getGenres(array);
    getReleaseYear(array);
    getVote(array);
    checkHasFilmImage(array);
};
