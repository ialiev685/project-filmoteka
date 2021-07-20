import defaultImage from '../images/filmoteka-plug.jpg';
import { renderLibrary } from './queue-header-btn.js';
// console.log(renderLibrary);

export function checkHasFilmImage(data) {
  const filmImg = document.querySelectorAll('.js-film-image');

  data.forEach((elem, index) => {
    if (elem.poster_path === null) {
      filmImg[index].src = defaultImage;
    }
  });
}

export function checkHasFilmModalImage(film) {
  const filmModalImg = document.querySelector('.js-modal-film-image');
  if (film.poster_path === null) {
    filmModalImg.src = defaultImage;
  }
}
