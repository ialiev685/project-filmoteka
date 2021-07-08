const KEY = '222d2b89e8701088edcf9049fa569980';
const URL_MOVIE_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`;

export default class MovieApiService {
    constructor() {
        this.searchQuery = '';
    }
  
    fetchMovie() {
    const url = `${URL_MOVIE_SEARCH}&query=${this.searchQuery}`;

    return fetch(url)
        .then(response => {
            return response.json();
        })
    };

    get query() {
        return this.searchQuery;
    };

    set query(newQuery) {
        this.searchQuery = newQuery;
    };
}

