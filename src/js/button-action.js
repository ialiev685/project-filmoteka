const Movie = {
  // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

export default class ButtonAction {
  constructor({ textAdd, textRemove }) {
    this.textAdd = textAdd;
    this.textRemove = textRemove;
  }
  selectButtonText(data, article) {
    let buttonText = this.textAdd;
    if (localStorage.getItem(data)) {
      const localStorageData = JSON.parse(localStorage.getItem(data));
      if (localStorageData.length !== 0) {
        localStorageData.map(elem => {
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
    if (e.target.innerHTML === `add to ${button}`) {
      e.target.innerHTML = `remove from ${button}`;
    } else {
      e.target.innerHTML = `add to ${button}`;
    }
  }

  clickButtonOverlay(newFilmsMarkup) {
    newFilmsMarkup.map(el => {
      const btn = document.querySelectorAll(`button[data-value="${el.id}"]`);
      const buttonQueue = Array.from(btn)[0];
      const buttonWatched = Array.from(btn)[1];
      const buttonDelete = Array.from(btn)[2];

      buttonQueue.addEventListener('click', e => {
        const button = 'queue';
        this.switchBtnText(button, e);
        buttonWatched.innerHTML = 'add to watched';
        this.writeDataToStorage(el.id, el, Movie.QUEUE);
        this.writeDataToStorage(el.id, el, Movie.WATCHED, buttonQueue);
      });

      buttonWatched.addEventListener('click', e => {
        const button = 'watched';
        this.switchBtnText(button, e);
        buttonQueue.innerHTML = 'add to queue';
        this.writeDataToStorage(el.id, el, Movie.WATCHED);
        this.writeDataToStorage(el.id, el, Movie.QUEUE, buttonWatched);
      });

      buttonDelete.addEventListener('click', e => {
        Array.from(btn)[0].innerHTML = 'add to queue';
        Array.from(btn)[1].innerHTML = 'add to watched';

        this.writeDataToStorage(el.id, el, Movie.WATCHED, buttonDelete);
        this.writeDataToStorage(el.id, el, Movie.QUEUE, buttonDelete);
      });
    });
  }
  clickButtonModal(buttonWatched, buttonQueue, movieId, newFilmMarkup) {
    const queueBtnOverlay = document.querySelector(`.js-queue[data-value='${newFilmMarkup.id}']`);
    const watchedBtnOverlay = document.querySelector(
      `.js-watched[data-value='${newFilmMarkup.id}']`,
    );
    buttonWatched.addEventListener('click', e => {
      const button = 'watched';
      this.switchBtnText(button, e);
      this.writeDataToStorage(movieId, newFilmMarkup, Movie.WATCHED);
      this.writeDataToStorage(movieId, newFilmMarkup, Movie.QUEUE, buttonWatched);
      buttonQueue.innerHTML = 'add to queue';
      watchedBtnOverlay.innerHTML = buttonWatched.innerHTML;
      queueBtnOverlay.innerHTML = buttonQueue.innerHTML;
    });

    buttonQueue.addEventListener('click', e => {
      const button = 'queue';
      this.switchBtnText(button, e);
      this.writeDataToStorage(movieId, newFilmMarkup, Movie.QUEUE);
      this.writeDataToStorage(movieId, newFilmMarkup, Movie.WATCHED, buttonWatched);
      buttonWatched.innerHTML = 'add to watched';
      queueBtnOverlay.innerHTML = buttonQueue.innerHTML;
      watchedBtnOverlay.innerHTML = buttonWatched.innerHTML;
    });
  }

  writeDataToStorage(movieId, newFilmMarkup, storageData, deleteList) {
    let storageList = [];
    if (localStorage.getItem(storageData)) {
      storageList = JSON.parse(localStorage.getItem(storageData));

      if (storageList.length !== 0) {
        const dfg = storageList.find(elem => {
          return movieId === elem.id;
        });

        if (
          storageList.find(elem => {
            return movieId === elem.id;
          })
        ) {
          const index = storageList.indexOf(dfg);

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
