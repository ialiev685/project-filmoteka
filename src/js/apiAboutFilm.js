import { KEY } from './base-api.js';

const url = 'https://api.themoviedb.org/3/movie/';

export function getFilmInfo(movieId) {
  try {
    const fullUrl = `${url}${movieId}?api_key=${KEY}`;

      const result = fetch(fullUrl).then(response => response.json());

    return result;
  } catch (error) {
    console.log(`Ошибка + ${error}`);
    // поидее здесь должна быть нотификация, что что-то пошло не так и типо перезагрузите страницу
  }
}

