import {success, notice, error} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const removedFilm = notice({
  title: 'Regular Notice',
  text: 'The movie was removed from the library!',
  autoOpen: false,
  width: '400px',
  minHeight: '40px',
  delay: 1000,
  sticker: false, 
  destroy:false, 
});

export const addedFilm = success({
  title: 'Success!',
  text: 'You have successfully added the movie to the library!',
  autoOpen: false,
  width: '400px',
  minHeight: '40px',
  delay: 1000,
  sticker: false, 
  destroy:false, 
});

export const deletedFilm = error({
  title: 'Super!',
  text: 'Your movie was successfully deleted!',
  autoOpen: false,
  width: '400px',
  minHeight: '40px',
  delay: 1000,
  sticker: false, 
  destroy:false, 
});