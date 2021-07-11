import { getTrendItems } from './base-api.js';

let num = localStorage.length;

window.addEventListener('click', e => {
  const id = e.target.getAttribute('id');
    
    if (!e.target.classList.contains('js-overlay-watched')) {
        return;
    }
    
    num += 1;
    // console.log(num);
  addToWatched(1, id, num);
});

async function addToWatched(page, cardNum, filmNum) {
  const data = await getTrendItems(page);
    const properFilm = data.results.find(elem => elem.id === Number(cardNum));
    
    localStorage.setItem(`watched-${filmNum}`, JSON.stringify(properFilm));
}

// console.log(JSON.parse(localStorage.getItem(localStorage.key(2))));
// console.log(localStorage.key(2));

function getFromLocalStorage() {
    const filmsArray = [];
    for (let j = 1; j <= localStorage.length; j += 1) {
        filmsArray.push(JSON.parse(localStorage.getItem(`watched-${j}`)));
    }
    console.log('done');
    console.log(filmsArray);
    return filmsArray;
}

export {getFromLocalStorage}