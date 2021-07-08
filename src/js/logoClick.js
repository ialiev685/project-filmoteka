import { refs } from './refs.js';
import { getTrendItems } from './base-api.js';
import { renderFilms } from './renderFilms.js';

refs.logo.addEventListener('click', onLogoClick);


async function onLogoClick(e) {
    e.preventDefault();
    refs.filmList.innerHTML = '';
    if (!refs.libraryBtns.classList.contains('library-btns-hidden')) {
        refs.libraryBtns.classList.add('library-btns-hidden');
    };
    refs.headerInput.classList.remove('header-input-hidden');
    const data = await getTrendItems();
    renderFilms(data.results);

}
