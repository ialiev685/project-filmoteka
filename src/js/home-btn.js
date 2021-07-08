import { refs } from './refs.js';
import { getTrendItems } from './base-api.js';
import { renderFilms } from './renderFilms.js';

refs.homeBtn.addEventListener('click', onHomeBtnClick);


function onHomeBtnClick() {
    refs.libraryBtns.classList.add('library-btns-hidden');
    refs.headerInput.classList.remove('header-input-hidden');
    getTrendItems()
           .then(result => {
            renderFilms(result.results)
        });


}
