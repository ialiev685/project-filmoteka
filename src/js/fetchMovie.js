import { refs } from './refs.js';

const KEY = '222d2b89e8701088edcf9049fa569980';
const URL_MOVIE_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&include_adult=false`;

export default class MovieApiService {
  constructor() {
    this.searchQuery = '';
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
    refs.warningString.classList.remove('is-hidden');
  }
}
