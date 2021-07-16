// import { refs } from './refs.js';
// import { getFromLocalStorageQueue } from './add-to-queue-btn.js';
// import { renderFilms } from './renderFilms.js';

// refs.queueHeaderBtn.addEventListener('click', () => {
//     refs.filmList.innerHTML = '';
//     renderFilms(getFromLocalStorageQueue());
// })

import { refs } from './refs.js';
import cardMarkup from '../hbs/cardForm.hbs';
import {getGenres} from './genres.js';
import { getReleaseYear } from './years.js';
// import { checkHasFilmImage } from './is-image.js';
import {getVote} from './vote-avarage.js';
import { openLibrary } from './library-btn.js';
// import { getReleaseYear } from './years.js';

const Movie = {
  // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

// const dataFromLocalQ = localStorage.getItem(Movie.QUEUE);
// // console.log(dataFromLocal);
// const dataForRenderQ = JSON.parse(dataFromLocalQ);
// // refs.watchedFilms.innerHTML = '';
// if (dataFromLocalQ) {
//     console.log(dataForRenderQ);
//     console.log(refs.queueBtn);

//     refs.queueBtn.addEventListener('click', renderQueueFilms(dataForRenderQ));
// }
// console.log(cardMarkup(dataForRender));
refs.queueBtn.addEventListener('click', () => {
    const dataFromLocalQ = localStorage.getItem(Movie.QUEUE);
    const dataForRenderQ = JSON.parse(dataFromLocalQ);
    if (dataFromLocalQ) {

        renderQueueFilms(dataForRenderQ);
    }
});


function renderQueueFilms(films) {
    // openLibrary();
refs.watchedFilms.innerHTML = '';
    refs.watchedFilms.insertAdjacentHTML('beforeend', cardMarkup(films));

  getGenres(films);
//   console.log(films);
//   films.forEach(el => {
//     const genres = el.genres.map((elem) => {
//       return elem.name;
//     });
//     const arrayOfGenres = document.querySelectorAll('.name-genres');
//     [...arrayOfGenres].forEach((el) => {
//       el.innerHTML = genres.join(', ');
//     })


//   });
    getReleaseYear(films);
    getVote(films);

}



