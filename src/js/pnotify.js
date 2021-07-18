import {success, notice} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const removedFilm = notice({
  title: 'Regular Notice',
  text: 'The movie was removed from the library!',
  autoOpen: false,
  width: '270px',
  minHeight: '40px',
  delay: 500,
  sticker: false, 
  destroy:false, 
});

export const removedFilmRu = notice({
  title: 'Оповещение',
  text: 'Фильм был удалён из библиотеки!',
  autoOpen: false,
  width: '2700px',
  minHeight: '40px',
  delay: 500,
  sticker: false, 
  destroy:false, 
});

export const addedFilm = success({
  title: 'Success!',
  text: 'You have successfully added the movie to the library!',
  autoOpen: false,
  width: '270px',
  minHeight: '40px',
  delay: 500,
  sticker: false, 
  destroy:false, 
});

export const addedFilmRu = success({
  title: 'Операция выполнена успешно!',
  text: 'Вы успешно добавили фильм в библиотеку!',
  autoOpen: false,
  width: '270px',
  minHeight: '40px',
  delay: 500,
  sticker: false, 
  destroy:false, 
});

