import MoviesApiService from './fetchMovie.js';
import { refs } from './refs.js';
import cardForm from '../hbs/cardForm.hbs'; /* походу больше не используется, наверно можно удалаять строчку*/
import { renderFilms } from './renderFilms.js';

const moviesApiService = new MoviesApiService();

refs.searchBtn.addEventListener('click', onMovieSearchClick);
refs.headerInput.addEventListener('keydown', onEnterInputClick);
refs.headerInput.addEventListener('focus', DeleteWarningString);
refs.headerInput.addEventListener('input', DeleteWarningString);

let page = 1;
async function onMovieSearchClick(page) {
  try {
    if (moviesApiService.searchQuery !== refs.headerInput.value) {
      page = 1;
      newPage();
    } else {
      page = getPage();
    }
    moviesApiService.query = refs.headerInput.value.trim();

    if (!moviesApiService.query) {
      showWarningString();
    }

    if (refs.headerInput.value !== '' && moviesApiService.query) {
      let fatch = await moviesApiService.fetchMovie(page);

      if (fatch.results !== undefined) {
        renderFilmsCards(fatch.results);

        refs.paginListStart.style.display = 'none';
        let pagesTotalSearch = fatch.total_pages;
        renderPaginationSearch(pagesTotalSearch, page);
      }
    }
  } catch (error) {
    console.log('Ошибка catch ' + error);
  }
}

function renderFilmsCards(films) {
  removeFilmList();
  DeleteWarningString();
  renderFilms(films);
  // refs.filmList.insertAdjacentHTML('beforeend', cardForm(films)); /* походу больше не используется, наверно можно удалаять строчку*/
}

function removeFilmList() {
  refs.filmList.innerHTML = '';
}

function onEnterInputClick(e) {
  if (e.key === 'Enter') {
    onMovieSearchClick(page);
  }
}

function DeleteWarningString() {
  refs.warningString.classList.add('is-hidden');
}

function showWarningString() {
  refs.warningString.classList.remove('is-hidden');
}

export { moviesApiService };

function renderPaginationSearch(pagesTotalSearch, page) {
  const numbers = Array(pagesTotalSearch)
    .fill(0)
    .map((el, i) => i + 1);

  const elements = numbers.map(
    el => `<button class="pagination-btn ${el === page ? 'active' : ''}">${el}</button>`,
  );

  const backArrow = `<svg width="40" height="40" fill="none" class='arrow' id="back-arrow">
      <rect width="40" height="40" rx="5" class="arrow-rect" />
      <path
        d="M24.667 20h-9.334M20 24.667L15.333 20 20 15.334"
     class='arrow-path'
        stroke-width="1.333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`;
  const nextArrow = `<svg width="40" height="40" fill="none" class='arrow' id="next-arrow">
  <rect class="arrow-rect" width="40" height="40" rx="5" transform="matrix(-1 0 0 1 40 0)" />
  <path d="M15.333 20h9.334M20 24.667L24.667 20 20 15.334"  class='arrow-path'  stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  // выдернул из svg
  //fill="#F7F7F7"  у rect
  //stroke="#000" у patch
  const step = 3;
  const startCondition = page - step > 1;
  const endCondition = page + step <= elements.length;
  const endConditionArrow = page + step < elements.length;
  const start = startCondition ? page - step : 0;
  const end = page + step - 1;
  const slicedElements = elements.slice(start, end);

  refs.paginListSearch.innerHTML =
    (page === 1 ? '' : backArrow) +
    (startCondition ? elements[0] + '&#8943' : '') +
    slicedElements.join('') +
    (endConditionArrow ? '&#8943' : '') +
    (endCondition ? elements[elements.length - 1] : '') +
    (page === elements.length ? '' : nextArrow);
  nextArrow;
}

refs.paginListSearch.addEventListener('click', ev => {
  if (ev.target === ev.currentTarget || ev.target.textContent === `${page}`) {
    return;
  }

  if (ev.target.parentElement.id === 'next-arrow') {
    incremRenderMarcupSearch();
    return;
  }

  if (ev.target.parentElement.id === 'back-arrow') {
    decremRenderMarcupSearch();
    return;
  }

  page = Number(ev.target.textContent);
  onMovieSearchClick(page);
});

function incremRenderMarcupSearch() {
  page += 1;
  onMovieSearchClick(page);
}

function decremRenderMarcupSearch() {
  page -= 1;
  onMovieSearchClick(page);
}

function getPage() {
  return page;
}

function newPage() {
  page = 1;
  return page;
}
