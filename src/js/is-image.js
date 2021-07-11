import defaultImage from '../images/filmoteka-plug.jpg';

export function checkHasFilmImage(data) {
  const filmImg = document.querySelectorAll('.js-film-image');

  data.forEach((elem, index) => {
    if (elem.poster_path === null) {
      filmImg[index].src = defaultImage;
    }
  });
}
