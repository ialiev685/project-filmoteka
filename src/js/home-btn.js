import { refs } from './refs.js';
import { getTrendItems } from './base-api.js';
import { renderFilms } from './renderFilms.js';

refs.homeBtn.addEventListener('click', onHomeBtnClick);


async function onHomeBtnClick() {
    refs.libraryBtns.classList.add('library-btns-hidden');
    refs.headerInput.classList.remove('header-input-hidden');
    refs.filmList.innerHTML = '';
    refs.spinner.classList.remove('spinner-hidden');
    const data = await getTrendItems();
    renderFilms(data.results);
    refs.spinner.classList.add('spinner-hidden');

}
