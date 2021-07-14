import movie from '../hbs/film-modal.hbs';
import { refs } from './refs.js';
import { checkHasFilmModalImage } from './is-image.js';

const Movie = {   // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};


refs.filmList.addEventListener('click', onMovieClick);

async function onMovieClick(e) {

    if (e.target.classList.value !== 'card-overlay') {
        return
    };
    const movieId = e.target.dataset.value;
    const article = await fetchFilm(movieId);
    await appendArticlesMarkup(article);
    checkHasFilmModalImage(article);


    const closeButton = document.querySelector('[data-action="close-modal"]');
    const backdrop = document.querySelector('.backdrop');
    const buttonWatched = document.querySelector('.js-watched');
    const buttonQueue = document.querySelector('.js-queue');


    clickButton(buttonWatched, buttonQueue, movieId);
    toggleClass(backdrop);
    closeModal(closeButton, backdrop)
};


function fetchFilm(movieId) {
    const KEY = '222d2b89e8701088edcf9049fa569980';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`;

    return fetch(url)
      .then(response => response.json());
};

function appendArticlesMarkup(article) {
   const newFilmMarkup= addButtonText(article);
    refs.body.insertAdjacentHTML('afterbegin', movie(newFilmMarkup));
};

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
    return buttonText
};

function toggleClass(backdrop) {

    backdrop.classList.toggle('is-hidden')
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

function closeModal(closeButton, backdrop) {

    closeButton.addEventListener('click', onButtonClick);
    backdrop.addEventListener('click', onBackdropClick);
    window.addEventListener('keydown', onEscKeyPress);

    function onButtonClick() {

        toggleClass(backdrop);
        function removeMovie() {
            backdrop.remove();
        };
        setTimeout(removeMovie, 500);

        window.removeEventListener('keydown', onEscKeyPress);
        backdrop.removeEventListener('click', onBackdropClick);
    }
    function onEscKeyPress(evt) {
        if (evt.code === 'Escape') {
            onButtonClick()}
    };
    function onBackdropClick(evt) {
        if (evt.currentTarget === evt.target) {
            onButtonClick()}
    };
};

