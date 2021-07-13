import {refs } from './refs.js';
import filmModalInfo from '../hbs/film-modal.hbs';


export function renderModalFilms(array, id) {
    const properFilm = array.find(elem => elem.id === Number(id));
  // console.log(cardNum);
    console.log(properFilm);
  const result = filmModalInfo(properFilm);
  refs.filmContainer.insertAdjacentHTML('beforeend', result);

}