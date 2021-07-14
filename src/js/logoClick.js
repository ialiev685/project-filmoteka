// import { refs } from './refs.js';
// import { getTrendItems } from './base-api.js';
// import { renderFilms } from './renderFilms.js';

// refs.logo.addEventListener('click', onLogoClick);


// async function onLogoClick(e) {
//     e.preventDefault();
//     refs.filmList.innerHTML = '';
//     if (!refs.libraryBtns.classList.contains('library-btns-hidden') || refs.searchContainer.classList.contains('header-input-hidden')) {
//         refs.libraryBtns.classList.add('library-btns-hidden');
//         refs.searchContainer.classList.remove('header-input-hidden');

//     };
//     refs.spinner.classList.remove('spinner-hidden');
//     const data = await getTrendItems(1);
//     renderFilms(data.results);
//     refs.spinner.classList.add('spinner-hidden');


// }
