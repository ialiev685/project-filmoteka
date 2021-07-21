import genresList from '../json/genres.json';

export function getGenres(data) {
  const arrayGenres = data.map(elem => {
    return elem.genre_ids;
  });

  let apiGenres;
  const apiGenresfilter = arrayGenres.map(elem => {
    return elem.map(el => {
      if (localStorage.getItem('language') === 'ru') {
        apiGenres = genresList.genresRus;
      } else {
        apiGenres = genresList.genres;
      }
      const genreName = apiGenres.find(element => {
        if (element.id === el) {
          return element;
        }
      });
      return genreName.name;
    });
  });

  const genresListName = document.querySelectorAll('.name-genres');

  [...genresListName].forEach((elem, index) => {
    // console.log(elem);
    elem.innerText = apiGenresfilter[index].join(', ');
  });
}
