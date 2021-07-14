import { refs } from './refs.js';
import { renderModalFilms } from './renderModalFilm.js';
import { openModal } from './modal-open.js';

const Movie = {   // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

refs.filmList.addEventListener('click', onOverlayClick);

async function onOverlayClick(e) {
    if (!e.target.classList.contains('card-overlay') ) {
    return;
    }
    const id = openModal(e);
    await renderModalFilms(id);
    const buttonWatched = document.querySelector('.js-watched');
    const buttonQueue = document.querySelector('.js-queue');
    clickButton(buttonWatched, buttonQueue, id);

}

function addButtonText(article) {
    let newDataObject = { ...article };
   const addQueueBtnText= selectButtonText(Movie.QUEUE, article);
    const addWatchedBtnText = selectButtonText(Movie.WATCHED, article);
    newDataObject.queueBtnText = addQueueBtnText;
    newDataObject.watchedBtnText = addWatchedBtnText;
    return newDataObject;

}

function selectButtonText(data, article) {
    let buttonText = "add to";
    if (localStorage.getItem(data)) {
        const  localStorageData = JSON.parse(localStorage.getItem(data));
        if (localStorageData.length !== 0) {

            localStorageData.map(elem => {
                if (String(article.id)===elem) {
                    buttonText = "remove from"
                };
            })
        };
    };
    return buttonText;
};

function clickButton(buttonWatched, buttonQueue, movieId) {
    buttonWatched.addEventListener('click', (e) => {
        const button = 'watched';
        switchBtnText(button, e);
        writeDataToStorage(movieId, Movie.WATCHED)
    });

    buttonQueue.addEventListener('click', (e) => {
        const button = 'queue';
        switchBtnText(button, e);
        writeDataToStorage(movieId, Movie.QUEUE)
    });

};

function switchBtnText(button,e) {
    if (e.target.innerHTML === `add to ${button}`) {

            e.target.innerHTML = `remove from ${button}`;
        } else {
            e.target.innerHTML = `add to ${button}`
        }
}

function writeDataToStorage(movieId, storageData) {
  let storageList = [];
        if (localStorage.getItem(storageData)) {
        storageList = JSON.parse(localStorage.getItem(storageData));
        if (!storageList.includes(movieId)) {
            storageList.push(movieId);
            localStorage.setItem(storageData, JSON.stringify(storageList));

        } else {
            const index = storageList.indexOf(movieId);
            storageList.splice(index, 1);
            localStorage.setItem(storageData, JSON.stringify(storageList));
        }
    } else {
        storageList.push(movieId);
        localStorage.setItem(storageData, JSON.stringify(storageList))
    }
};


