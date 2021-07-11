import MoviesApiService from "./fetchMovie.js";
import { refs } from "./refs.js";
import cardForm from "../hbs/cardForm.hbs";

const moviesApiService = new MoviesApiService();

refs.searchBtn.addEventListener("click", onMovieSearchClick);
refs.headerInput.addEventListener("keydown", onEnterInputClick);
refs.headerInput.addEventListener("focus", DeleteWarningString);
refs.headerInput.addEventListener("input", DeleteWarningString);

let page = 1;
async function onMovieSearchClick() {
  try {
    moviesApiService.query = refs.headerInput.value.trim();

    if (!moviesApiService.query) {
      showWarningString();
    }
    if (refs.headerInput.value !== "" && moviesApiService.query) {
      let fatch = await moviesApiService.fetchMovie(page);

      if (fatch !== undefined) {
        renderFilmsCards(fatch);
      }
    }
  } catch (error) {
    console.log("Ошибка catch" + error);
  }
}

function renderFilmsCards(films) {
  removeFilmList();
  DeleteWarningString();

  refs.filmList.insertAdjacentHTML("beforeend", cardForm(films));
}

function removeFilmList() {
  refs.filmList.innerHTML = "";
}

function onEnterInputClick(e) {
  if (e.key === "Enter") {
    onMovieSearchClick();
  }
}

function DeleteWarningString() {
  refs.warningString.classList.add("is-hidden");
}

function showWarningString() {
  refs.warningString.classList.remove("is-hidden");
}

export { moviesApiService };
