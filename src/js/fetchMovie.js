import { refs } from './refs.js';
import { KEY } from './base-api.js';
import { checkAndSetPopulation } from './popularity-sort/popularity-sort.js';
checkAndSetPopulation();
// const valueSort = localStorage.getItem('popularity');

const currentLang = localStorage.getItem('language');
const URL_MOVIE_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=${currentLang}&append_to_response=images&include_image_language=${currentLang}&include_adult=false`;
export default class MovieApiService {
  constructor() {
    this.searchQuery = "";
  }

  async fetchMovie(page) {
    const url = `${URL_MOVIE_SEARCH}&page=${page}&query=${this.searchQuery}`;

    const response = await fetch(url);
    const films = await response.json();

    if (films.results === undefined || films.results.length === 0) {
      this.showWarningString();
      return;
    }

    return films;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  showWarningString() {
    refs.warningString.classList.remove("is-hidden");
  }
}
