import { addedFilm } from './pnotify';
import { removedFilm } from './pnotify';
import { renderLibrary } from './queue-header-btn.js';
// import { renderLibrary } from './queue-header-btn.js';
// import { renderQueueFilms } from './queue-header-btn.js';
// import { checkHasFilmImage } from './is-image.js';
// console.log(onRenderLibrary);
// import {removedFilmRu} from './pnotify';
// import {addedFilmRu} from './pnotify';

const Movie = {
  // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

export default class ButtonAction {
  constructor({ textQueue, textWatched, textAdd, textRemove }) {
    this.textQueue = textQueue;
    this.textWatched = textWatched;
    this.textAdd = textAdd;
    this.textRemove = textRemove;
  }
  selectButtonText(data, article) {
    let buttonText = this.textAdd;
    if (localStorage.getItem(data)) {
      const localStorageData = JSON.parse(localStorage.getItem(data));
      if (localStorageData.length !== 0) {
        localStorageData.forEach(elem => {
          if (article.id === elem.id) {
            buttonText = this.textRemove;
          }
        });
      }
    }
    return buttonText;
  }

  addButtonText(elem) {
    let newDataObject = { ...elem };

    const addQueueBtnText = this.selectButtonText(Movie.QUEUE, elem);
    const addWatchedBtnText = this.selectButtonText(Movie.WATCHED, elem);

    newDataObject.queueBtnText = addQueueBtnText;
    newDataObject.watchedBtnText = addWatchedBtnText;
    return newDataObject;
  }

  switchBtnText(button, e) {
    if (e.target.innerHTML === `${this.textAdd} ${button}`) {
      e.target.innerHTML = `${this.textRemove} ${button}`;
      return addedFilm.open();
    } else {
      e.target.innerHTML = `${this.textAdd} ${button}`;
      return removedFilm.open();
    }
  }

  clickButtonOverlay(newFilmsMarkup) {
    newFilmsMarkup.forEach(el => {
      const btn = document.querySelectorAll(`button[data-value="${el.id}"]`);
      const buttonQueue = Array.from(btn)[0];
      const buttonWatched = Array.from(btn)[1];

      buttonQueue.addEventListener('click', e => {
        const button = this.textQueue;
        this.switchBtnText(button, e);
        buttonWatched.innerHTML = `${this.textAdd} ${this.textWatched}`;
        this.writeDataToStorage(el.id, el, Movie.QUEUE);
        this.writeDataToStorage(el.id, el, Movie.WATCHED, buttonQueue);
      });

      buttonWatched.addEventListener('click', e => {
        const button = this.textWatched;
        this.switchBtnText(button, e);
        buttonQueue.innerHTML = `${this.textAdd} ${this.textQueue}`;
        this.writeDataToStorage(el.id, el, Movie.WATCHED);
        this.writeDataToStorage(el.id, el, Movie.QUEUE, buttonWatched);
      });
    });
  }

  clickButtonModal(buttonWatched, buttonQueue, movieId, newFilmMarkup) {
    const queueBtnOverlay = document.querySelector(`.js-queue[data-value='${newFilmMarkup.id}']`);
    const watchedBtnOverlay = document.querySelector(
      `.js-watched[data-value='${newFilmMarkup.id}']`,
    );
    buttonWatched.addEventListener('click', e => {
      const button = this.textWatched;
      this.switchBtnText(button, e);
      this.writeDataToStorage(movieId, newFilmMarkup, Movie.WATCHED);
      this.writeDataToStorage(movieId, newFilmMarkup, Movie.QUEUE, buttonWatched);
      buttonQueue.innerHTML = `${this.textAdd} ${this.textQueue}`;
      watchedBtnOverlay.innerHTML = buttonWatched.innerHTML;
      queueBtnOverlay.innerHTML = buttonQueue.innerHTML;
      renderLibrary(Movie.WATCHED);
    });

    // console.log(buttonQueue);

    buttonQueue.addEventListener('click', e => {
      const button = this.textQueue;
      this.switchBtnText(button, e);
      this.writeDataToStorage(movieId, newFilmMarkup, Movie.QUEUE);
      this.writeDataToStorage(movieId, newFilmMarkup, Movie.WATCHED, buttonWatched);
      buttonWatched.innerHTML = `${this.textAdd} ${this.textWatched}`;
      queueBtnOverlay.innerHTML = buttonQueue.innerHTML;
      watchedBtnOverlay.innerHTML = buttonWatched.innerHTML;
      // onRenderLibrary();
      renderLibrary(Movie.QUEUE);
      // console.log(123);
    });
  }

  writeDataToStorage(movieId, newFilmMarkup, storageData, deleteList) {
    let storageList = [];
    if (localStorage.getItem(storageData)) {
      storageList = JSON.parse(localStorage.getItem(storageData));

      if (storageList.length !== 0) {
        const data = storageList.find(elem => {
          return movieId === elem.id;
        });

        if (data) {
          const index = storageList.indexOf(data);

          storageList.splice(index, 1);
          localStorage.setItem(storageData, JSON.stringify(storageList));
        } else {
          if (deleteList) {
            return;
          }
          storageList.push(newFilmMarkup);
          localStorage.setItem(storageData, JSON.stringify(storageList));
        }
      } else {
        if (deleteList) {
          return;
        }
        storageList.push(newFilmMarkup);
        localStorage.setItem(storageData, JSON.stringify(storageList));
      }
    } else {
      if (deleteList) {
        return;
      }
      storageList.push(newFilmMarkup);
      localStorage.setItem(storageData, JSON.stringify(storageList));
    }
  }
}
