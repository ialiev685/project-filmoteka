import { refs } from './refs.js';
import { getTrendItems } from './base-api.js';

let num = localStorage.length;

refs.filmList.addEventListener('click', e => {
  const id = e.target.getAttribute('id');
    
    if (e.target.classList.contains('js-overlay-watched')) {
      num += 1;
    addToWatched(1, id, num);
  } 
  return;
});

refs.filmList.addEventListener('click', e => {
  const id = e.target.getAttribute('id');
    
    if (e.target.classList.contains('js-overlay-queue')) {
      num += 1;
    addToQueue(1, id, num);
  } 
  return;
});

async function addToWatched(page, cardNum, filmNum) {
  const data = await getTrendItems(page);
    const properFilm = data.results.find(elem => elem.id === Number(cardNum));
    
    localStorage.setItem(`watched-${filmNum}`, JSON.stringify(properFilm));
}

async function addToQueue(page, cardNum, filmNum) {
  const data = await getTrendItems(page);
    const properFilm = data.results.find(elem => elem.id === Number(cardNum));
    
    localStorage.setItem(`queue-${filmNum}`, JSON.stringify(properFilm));
}

// console.log(JSON.parse(localStorage.getItem(localStorage.key(2))));
// console.log(localStorage.key(2));

function getFromLocalStorage() {
    const mixedFilmsArray = [];
    for (let j = 1; j <= localStorage.length; j += 1) {
        mixedFilmsArray.push(JSON.parse(localStorage.getItem(`watched-${j}`)));
    }
  console.log(mixedFilmsArray);
  const filmsArray = mixedFilmsArray.filter(elem => elem !== null);
  console.log(filmsArray);
    return filmsArray;
}

export {getFromLocalStorage}