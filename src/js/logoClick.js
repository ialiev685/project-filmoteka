import { refs } from './refs.js';
import { getTrendItems } from './base-api.js';
import { renderFilms } from './renderFilms.js';

refs.logo.addEventListener('click', onLogoClick);


function onLogoClick(e) {
    e.preventDefault();
    if (!refs.libraryBtns.classList.contains('library-btns-hidden')) {
        refs.libraryBtns.classList.add('library-btns-hidden');
    };
    refs.headerInput.classList.remove('header-input-hidden');
    getTrendItems()
           .then(result => {
            renderFilms(result.results)
        });


}
