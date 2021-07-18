// import * as basicLightbox from 'basiclightbox';


// // const trailerBtn = document.querySelector('.js-trailer');

export function fetchFilmTrailer(movieId) {
  const KEY = '222d2b89e8701088edcf9049fa569980';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${KEY}&language=en-US`;

  return fetch(url).then(response => response.json());
}




// const instance = basicLightbox.create(`
//     <video controls>
//         <source src="assets/videos/video.mp4" type="video/mp4">
//     </video>
// `)

// instance.show();
