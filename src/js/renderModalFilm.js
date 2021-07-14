import {refs } from './refs.js';
import filmModalInfo from '../hbs/film-modal.hbs';
import { putRoundedPopularity } from './put-rounded-pop.js';
import { getFilmInfo } from './apiAboutFilm.js';

async function renderModalFilms(id) {
  const data = await getFilmInfo(id);
  refs.filmContainer.insertAdjacentHTML('beforeend', filmModalInfo(data));
  putRoundedPopularity(data.popularity);
  // const buttonWatched = document.querySelector('.js-watched');
  // const buttonQueue = document.querySelector('.js-queue');
  // console.log(buttonWatched);

  // return { buttonWatched, buttonQueue };

}
export {renderModalFilms}