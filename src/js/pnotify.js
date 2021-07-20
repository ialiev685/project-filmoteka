import {success, notice, error} from '@pnotify/core';
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
  width: '270px',
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

export const incorrectData = error({
  title: 'Oh No!',
  text: 'Something terrible happened, please, try again!',
  autoOpen: false,
  width: '270px',
  minHeight: '40px',
  delay: 500,
  sticker: false, 
  destroy:false,
});

export const incorrectDataRu = error({
  title: 'О, нет!',
  text: 'Что-то пошло не так, попробуйте еще раз!',
  autoOpen: false,
  width: '270px',
  minHeight: '40px',
  delay: 500,
  sticker: false, 
  destroy:false,
});
