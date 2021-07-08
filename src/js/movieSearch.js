import MoviesApiService from './fetchMovie.js';

// const refs = {
//     inputCountriesEl: document.querySelector('[name="countries"]'),
//     cardContainer: document.querySelector('.card-container'),
//     listContainer: document.querySelector('#list-container'),
// };

const moviesApiService = new MoviesApiService();

// refs.inputCountriesEl.addEventListener('input', debounce(onCountiesInput, 500));

const d = moviesApiService.fetchMovie().then(r => console.log(r));
export {moviesApiService, d}