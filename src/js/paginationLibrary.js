import { renderWatchedFilms } from './watched-header-btn.js';
import { renderQueueFilms } from './queue-header-btn.js';
import { refs } from './refs.js';

let page = 1;
let dataFilms = null;
let type = null;

function renderPagination(total_pages, curPage, { prop, films }) {
  type = prop;

  dataFilms = films;
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

  const step = 3;
  const startCondition = page - step > 1;
  const endCondition = page + step <= elements.length;
  const endConditionArrow = page + step < elements.length;
  const start = startCondition ? page - step : 0;
  const end = page + step - 1;
  const slicedElements = elements.slice(start, end);

  refs.paginListLibrary.innerHTML =
    (page === 1 ? '' : backArrow) +
    (startCondition ? elements[0] + '&#8943' : '') +
    slicedElements.join('') +
    (endConditionArrow ? '&#8943' : '') +
    (endCondition ? elements[elements.length - 1] : '') +
    (page === elements.length ? '' : nextArrow);
  nextArrow;
}

refs.paginListLibrary.addEventListener('click', listener, false);

function nextRenderMarcup(page) {
  refs.watchedFilms.innerHTML = '';
  refs.paginListLibrary.dataset.page = page;

  // на самом деле нет разницы какую функцию запускать, они индентичны.
  if (type === 'watched') renderWatchedFilms(dataFilms, page, type);

  if (type === 'queue') renderQueueFilms(dataFilms, page, type);
}

function incremRenderMarcup() {
  page += 1;
  nextRenderMarcup(page);
}

function decremRenderMarcup() {
  page -= 1;
  nextRenderMarcup(page);
}

function listener(ev) {
  if (ev.target === ev.currentTarget || ev.target.textContent === `${page}`) {
    return;
  }

  const btns = [...ev.currentTarget.children];
  btns.forEach(btn => btn.classList.remove('active'));
  ev.target.classList.add('active');

  if (ev.target.parentElement.id === 'next-arrow') {
    console.dir(ev.target);
    incremRenderMarcup();
    return;
  }

  if (ev.target.parentElement.id === 'back-arrow') {
    decremRenderMarcup();
    return;
  }

  page = Number(ev.target.textContent);
  nextRenderMarcup(page);

  // renderPagination();
}

export { renderPagination };
