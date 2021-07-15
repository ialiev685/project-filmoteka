// import { refs } from './refs.js';
// import { getTrendItems } from './base-api.js';

// let num = localStorage.length;

// refs.filmList.addEventListener('click', e => {
//   const id = e.target.getAttribute('id');

//   if (e.target.classList.contains('js-overlay-queue')) {
//     addToQueue(1, id);
//   }
//   return;
// });

// async function addToQueue(page, cardNum) {
//   const data = await getTrendItems(page);
//   const properFilm = data.results.find(elem => elem.id === Number(cardNum));
//   const queuedStorage = getFromLocalStorageQueue();
//   const similarFilm = queuedStorage.find(elem => elem.id === properFilm.id);

//   putProperFilm(similarFilm, properFilm);
// }

// function getFromLocalStorageQueue() {
//   const mixedFilmsArray = [];

//   for (let j = 1; j <= localStorage.length; j += 1) {
//     mixedFilmsArray.push(JSON.parse(localStorage.getItem(`queue-${j}`)));
//   }

//   const queuedFilmsArray = mixedFilmsArray.filter(elem => elem !== null);

//   return queuedFilmsArray;
// }

// function putProperFilm(params, film) {
//     if (params) {
//         return alert('Этот фильм уже есть в очереди');
//     }
//     num += 1;
//     localStorage.setItem(`queue-${num}`, JSON.stringify(film));
// }

// export { getFromLocalStorageQueue };
