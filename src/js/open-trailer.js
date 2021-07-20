import * as basicLightbox from 'basiclightbox';
import { KEY } from './base-api.js';
import { sortBtnRemove } from './sortRenderFilms.js';
// const lang = localStorage.getItem('language');
// console.log(lang);

function fetchFilmTrailer(movieId, lang) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${KEY}&language=${lang}`;

  return fetch(url).then(response => response.json());
}


async function onTrailerBtnClick(movieId) {
  const lang = localStorage.getItem('language');
  const trailer = await fetchFilmTrailer(movieId, lang);
  if (trailer.results.length === 0) {
    // console.log(lang);
    if (lang === 'ru') {
      const instance = basicLightbox.create(
      `
      <div class="modal">
          <p class="trailer-info">Трейлер не найден</p>
      </div>
  `,
      {
        onShow: instance => {
          window.addEventListener('keydown', function onEscClick(e) {
            console.log(e);
            if (e.code === 'Escape') {
              instance.close();
              window.removeEventListener('keydown', onEscClick);
            }
          });

        },
      },
      );
      instance.show();


    } else {
      const instance = basicLightbox.create(
      `
      <div class="modal">
          <p class="trailer-info">Trailer not found</p>
      </div>
  `,
      {
        onShow: instance => {
          window.addEventListener('keydown', function onEscClick(e) {
            console.log(e);
            if (e.code === 'Escape') {
              instance.close();
              window.removeEventListener('keydown', onEscClick);
            }
          });

        },
      },
      );
      instance.show();

    }
  } else {

    const instance = basicLightbox.create(
      `
      <iframe class="video-trailer" src="https://www.youtube.com/embed/${trailer.results[0].key}"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
      </iframe>
  `,
      {
        onShow: instance => {
          window.addEventListener('keydown', function onEscClick(e) {
            console.log(e);
            if (e.code === 'Escape') {
              instance.close();
              window.removeEventListener('keydown', onEscClick);
            }
          });

        },
      },
    );
    instance.show();
  }
  // console.log(trailer);

};
export { onTrailerBtnClick };






