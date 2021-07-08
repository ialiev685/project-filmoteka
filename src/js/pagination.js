import { getTrendItems } from "../js/base-api.js";
import { getMarcup } from "../js/start-site.js";

const paginList = document.querySelector("#pagination");
const listFilm = document.querySelector(".films-list");

let page = 1;
async function grtTotalPages() {
  const data = await getTrendItems(page);
  // console.log(data.total_pages);
  return data.total_pages;
}

async function renderPagination() {
  const pagesTotal = await grtTotalPages();

  const numbers = Array(pagesTotal)
    .fill(0)
    .map((el, i) => i + 1);

  const elements = numbers.map(
    (el) =>
      `<button class="pagination-btn ${
        el === page ? "active" : ""
      }">${el}</button>`
  );

  // (el) =>
  //   `<button class="${paginationBtnClassName} ${
  //     el === pageNumber ? 'active' : ''
  //   }">${el}</button>`);

  //   const step = 3;
  // const startCondition = pageNumber - step > 0;
  // const endCondition = pageNumber + step < elements.length - 1;
  // const start = startCondition ? pageNumber - step : 0;
  // const end = pageNumber + step;
  // const slicedElements = elements.slice(start, end + 1);

  // paginList.innerHTML = (startCondition ? elements[0] + '...' : '') + slicedElements.join('') + (endCondition ? '...' + elements[elements.length - 1] : '');
  paginList.innerHTML = elements.join("");
}
renderPagination();

paginList.addEventListener("click", (ev) => {
  if (ev.target === ev.currentTarget || ev.target.textContent === `${page}`) {
    return;
  }

  console.log(ev.target.textContent);
  page = ev.target.textContent;
  nextRenderMarcup(page);

  const btns = [...ev.currentTarget.children];
  btns.forEach((btn) => btn.classList.remove("active"));
  ev.target.classList.add("active");
});

function nextRenderMarcup(page) {
  listFilm.innerHTML = "";
  paginList.innerHTML = "Загружаю...";
  getMarcup(page);
}
