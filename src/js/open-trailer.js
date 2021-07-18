import * as basicLightbox from 'basiclightbox';
import { KEY } from './base-api.js';

function fetchFilmTrailer(movieId) {
  // const KEY = '222d2b89e8701088edcf9049fa569980';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${KEY}&language=en-US`;

  return fetch(url).then(response => response.json());
}

async function onTrailerBtnClick(movieId) {

  const trailer = await fetchFilmTrailer(movieId);
  console.log(trailer);
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
};
export { onTrailerBtnClick };






