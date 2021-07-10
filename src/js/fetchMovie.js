import { refs } from './refs.js';
import { KEY } from './base-api.js';

const URL_MOVIE_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`;

export default class MovieApiService {
    constructor() {
        this.searchQuery = '';
    };
  
    async fetchMovie() {
        const url = `${URL_MOVIE_SEARCH}&query=${this.searchQuery}`;

        const response = await fetch(url);
        const films = await response.json();
        
        if (films.results === undefined || films.results.length === 0) {
            this.showWarningString();
            return
        }
        
        return films.results;
    };
    
    get query() {
        return this.searchQuery;
    };
    
    set query(newQuery) {
        this.searchQuery = newQuery;
    };
    
    showWarningString() {
        refs.warningString.classList.remove('is-hidden');
    }
}

