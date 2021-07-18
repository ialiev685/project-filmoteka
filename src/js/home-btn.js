import { refs } from './refs.js';
import { getTrendItems } from './base-api.js';
import { renderFilms } from './renderFilms.js';
import { onClickDisappearVote } from './appear-votes.js';
import { onBoxPopularitySortAddClick } from './popularity-sort/popularity-sort.js';
import { correctionMargin } from './sortRenderFilms.js';

refs.homeBtn.addEventListener('click', onHomeBtnClick);

async function onHomeBtnClick() {
  refs.paginListLibrary.classList.add('is-hidden'); //тест
  refs.paginListStart.classList.remove('is-hidden'); //тест

  refs.libraryBtns.classList.add('library-btns-hidden');
  // refs.filmList.innerHTML = '';
  refs.watchedFilms.innerHTML = '';

  refs.spinner.classList.remove('spinner-hidden');
  const data = await getTrendItems(1);
  renderFilms(data);
  refs.spinner.classList.add('spinner-hidden');
  refs.searchContainer.classList.remove('header-input-hidden');
  refs.overlay.classList.replace('overlay-library', 'overlay');
  refs.myLibraryBtn.classList.remove('current');
  refs.homeBtn.classList.add('current');
  refs.queueBtn.classList.remove('current-btn');
  // refs.paginationBox.classList.remove('is-hidden');

  refs.headerInput.value = '';
  onBoxPopularitySortAddClick();
  correctionMargin();
  // onClickDisappearVote();
}
