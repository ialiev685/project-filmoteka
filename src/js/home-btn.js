import { refs } from './refs.js';
import { getTrendItems } from './base-api.js';
import { renderFilms } from './renderFilms.js';

refs.homeBtn.addEventListener('click', onHomeBtnClick);


async function onHomeBtnClick() {
    refs.libraryBtns.classList.add('library-btns-hidden');
    refs.headerInput.classList.remove('header-input-hidden');
    refs.filmList.innerHTML = '';
    const data = await getTrendItems();
    renderFilms(data.results);

}
