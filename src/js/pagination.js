import { getTrendItems } from '../js/base-api.js';
import { getMarcup } from '../js/start-site.js';
import { refs } from './refs.js';
import { checkAndSetPopulation } from './popularity-sort/popularity-sort.js';
import MoviesApiService from './fetchMovie.js';
import { renderFilms } from './renderFilms.js';
import { renderFilmsCards } from './movieSearch.js';
const moviesApiService = new MoviesApiService();

checkAndSetPopulation();

let page = 1;
let dataSearch = '';

function renderPagination(total_pages, curPage, searchValue) {
  dataSearch = searchValue;
  page = curPage;
  const numbers = Array(total_pages)
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

  refs.paginListStart.innerHTML =
    (page === 1 ? '' : backArrow) +
    (startCondition ? elements[0] + '&#8943' : '') +
    slicedElements.join('') +
    (endConditionArrow ? '&#8943' : '') +
    (endCondition ? elements[elements.length - 1] : '') +
    (page === elements.length ? '' : nextArrow);
  nextArrow;
}
// renderPagination();

refs.paginListStart.addEventListener('click', listener, false);

async function nextRenderMarcup(page) {
  refs.filmList.innerHTML = '';

  if (dataSearch === 'empty') {
    getMarcup(page);
  } else if (dataSearch !== 'empty' && dataSearch !== undefined) {
    moviesApiService.query = dataSearch;
    const value = dataSearch;
    const data = await moviesApiService.fetchMovie(page);
    renderFilms(data, value);
  }
}

function incremRenderMarcup() {
  page += 1;
  nextRenderMarcup(page);
  // renderPagination();
}

function decremRenderMarcup() {
  page -= 1;
  nextRenderMarcup(page);
  // renderPagination();
}

function listener(ev) {
  if (ev.target === ev.currentTarget || ev.target.textContent === `${page}`) {
    return;
  }

  const btns = [...ev.currentTarget.children];
  btns.forEach(btn => btn.classList.remove('active'));
  ev.target.classList.add('active');

  if (ev.target.parentElement.id === 'next-arrow') {
    incremRenderMarcup();
    return;
  }

  if (ev.target.parentElement.id === 'back-arrow') {
    decremRenderMarcup();
    return;
  }

  page = Number(ev.target.textContent);
  nextRenderMarcup(page);

  renderPagination();
}

export { renderPagination };
