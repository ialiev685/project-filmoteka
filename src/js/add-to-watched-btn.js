import { refs } from './refs.js';
import { getTrendItems } from './base-api.js';

let num = localStorage.length;

refs.filmList.addEventListener('click', e => {
  const id = e.target.getAttribute('id');

  if (e.target.classList.contains('js-overlay-watched')) {
    addToWatched(1, id);
  }
  return;
});

async function addToWatched(page, cardNum) {
  const data = await getTrendItems(page);
  const properFilm = data.results.find(elem => elem.id === Number(cardNum));
  const watchedStorage = getFromLocalStorageWatched();
  const similarFilm = watchedStorage.find(elem => elem.id === properFilm.id);

  putProperFilm(similarFilm, properFilm);
}

function getFromLocalStorageWatched() {
  const mixedFilmsArray = [];

  for (let j = 1; j <= localStorage.length; j += 1) {
    mixedFilmsArray.push(JSON.parse(localStorage.getItem(`watched-${j}`)));
  }

  const watchedFilmsArray = mixedFilmsArray.filter(elem => elem !== null);

  return watchedFilmsArray;
}

function putProperFilm(params, film) {
  if (params) {
    return alert('Этот фильм уже есть в списке просмотренных');
  }
  num += 1;
  localStorage.setItem(`watched-${num}`, JSON.stringify(film));
}

export { getFromLocalStorageWatched };
