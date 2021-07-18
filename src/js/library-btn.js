import { refs } from './refs.js';
import { renderFilms } from './renderFilms.js';
// import { getFromLocalStorageWatched } from './add-to-watched-btn.js';
import { onClickAppearVote } from './appear-votes.js';
import { onBoxPopularitySortRemoveClick } from './popularity-sort/popularity-sort.js';
import { correctionMargin } from './sortRenderFilms.js';

refs.myLibraryBtn.addEventListener('click', openLibrary);
refs.watchedBtn.addEventListener('click', onWatchedBtn);
refs.queueBtn.addEventListener('click', onQueueBtn);

export function openLibrary() {
  refs.paginListStart.classList.add('is-hidden'); //тест
  refs.paginListLibrary.classList.remove('is-hidden'); //тест

  refs.libraryBtns.classList.remove('library-btns-hidden');
  refs.myLibraryBtn.classList.add('current');
  refs.searchContainer.classList.add('header-input-hidden');
  refs.watchedBtn.classList.add('current-btn');

  refs.overlay.classList.replace('overlay', 'overlay-library');
  refs.homeBtn.classList.remove('current');
  onBoxPopularitySortRemoveClick();
  correctionMargin();
  // refs.paginationBox.classList.add('is-hidden');
  // refs.navContainer.style.marginBottom = '49px';
  // refs.watchedFilms.style.marginTop = '49px';
  refs.filmList.innerHTML = '';
  // renderFilms(getFromLocalStorageWatched());

  onClickAppearVote();
}

function onWatchedBtn() {
  refs.watchedBtn.classList.add('current-btn');
  refs.queueBtn.classList.remove('current-btn');
}

function onQueueBtn() {
  refs.watchedBtn.classList.remove('current-btn');
  refs.queueBtn.classList.add('current-btn');
}
