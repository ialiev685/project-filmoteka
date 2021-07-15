import { getTrendItems } from "../js/base-api.js";
import { getMarcup } from "../js/start-site.js";
import { refs } from "./refs.js";

let page = 1;
async function grtTotalPages() {
  const data = await getTrendItems(page);
  return data.total_pages;
}

async function renderPagination() {
  let pagesTotalStartSite = await grtTotalPages();

  const numbers = Array(pagesTotalStartSite)
    .fill(0)
    .map((el, i) => i + 1);

  refs.paginListStart.innerHTML = getStringPagin(numbers, page);
}
renderPagination();

refs.paginListStart.addEventListener("click", listenerPagin);

function nextRenderMarcup(page) {
  refs.filmList.innerHTML = "";
  getMarcup(page);
}

function incremRenderMarcup() {
  page += 1;
  nextRenderMarcup(page);
  renderPagination();
}

function decremRenderMarcup() {
  page -= 1;
  nextRenderMarcup(page);
  renderPagination();
}

function listenerPagin(ev) {
  if (ev.target === ev.currentTarget || ev.target.textContent === `${page}`) {
    return;
  }

  const btns = [...ev.currentTarget.children];
  btns.forEach((btn) => btn.classList.remove("active"));
  ev.target.classList.add("active");

  if (ev.target.parentElement.id === "next-arrow") {
    incremRenderMarcup();
    return;
  }

  if (ev.target.parentElement.id === "back-arrow") {
    decremRenderMarcup();
    return;
  }

  page = Number(ev.target.textContent);
  nextRenderMarcup(page);

  renderPagination();
}

function getStringPagin(numbers, page) {
  const elements = numbers.map(
    (el) =>
      `<button class="pagination-btn ${
        el === page ? "active" : ""
      }">${el}</button>`
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

  const stringPagin =
    (page === 1 ? "" : backArrow) +
    (startCondition ? elements[0] + "&#8943" : "") +
    slicedElements.join("") +
    (endConditionArrow ? "&#8943" : "") +
    (endCondition ? elements[elements.length - 1] : "") +
    (page === elements.length ? "" : nextArrow);
  nextArrow;
  return stringPagin;
}

export { getStringPagin };
