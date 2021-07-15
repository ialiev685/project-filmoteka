import MoviesApiService from "./fetchMovie.js";
import { refs } from "./refs.js";
import { renderFilms } from "./renderFilms.js";
import { getStringPagin } from "./pagination.js";

const moviesApiService = new MoviesApiService();

refs.searchBtn.addEventListener("click", onMovieSearchClick);
refs.headerInput.addEventListener("keydown", onEnterInputClick);
refs.headerInput.addEventListener("focus", DeleteWarningString);
refs.headerInput.addEventListener("input", DeleteWarningString);

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

    if (refs.headerInput.value !== "" && moviesApiService.query) {
      let fatch = await moviesApiService.fetchMovie(page);

      if (fatch.results !== undefined) {
        renderFilmsCards(fatch.results);

        refs.paginListStart.style.display = "none";
        let pagesTotalSearch = fatch.total_pages;
        renderPaginationSearch(pagesTotalSearch, page);
      }
    }
  } catch (error) {
    console.log("Ошибка catch " + error);
  }
}

function renderFilmsCards(films) {
  removeFilmList();
  DeleteWarningString();
  renderFilms(films);
}

function removeFilmList() {
  refs.filmList.innerHTML = "";
}

function onEnterInputClick(e) {
  if (e.key === "Enter") {
    onMovieSearchClick(page);
  }
}

function DeleteWarningString() {
  refs.warningString.classList.add("is-hidden");
}

function showWarningString() {
  refs.warningString.classList.remove("is-hidden");
}

export { moviesApiService };

function renderPaginationSearch(pagesTotalSearch, page) {
  const numbers = Array(pagesTotalSearch)
    .fill(0)
    .map((el, i) => i + 1);

  refs.paginListSearch.innerHTML = getStringPagin(numbers, page);
}

refs.paginListSearch.addEventListener("click", (ev) => {
  if (ev.target === ev.currentTarget || ev.target.textContent === `${page}`) {
    return;
  }

  if (ev.target.parentElement.id === "next-arrow") {
    incremRenderMarcupSearch();
    return;
  }

  if (ev.target.parentElement.id === "back-arrow") {
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
