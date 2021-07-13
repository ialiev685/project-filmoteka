import {refs } from './refs.js';
import filmModalInfo from '../hbs/film-modal.hbs';
import { putRoundedPopularity } from './put-rounded-pop.js';
// import { modalFilm, getFilmInfo } from './apiAboutFilm.js';



export function renderModalFilms(data) {
  // const data = getFilmInfo(id);
  // console.log(data);
  // console.log(filmModalInfo(data));

    // const properFilm = array.find(elem => elem.id === Number(id));
  // console.log(cardNum);
    // console.log(properFilm);
  // const result = filmModalInfo(properFilm);
  // refs.filmContainer.insertAdjacentHTML('beforeend', result);
  refs.filmContainer.insertAdjacentHTML('beforeend', filmModalInfo(data));
  putRoundedPopularity(data.popularity);


}