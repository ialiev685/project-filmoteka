import { refs } from './refs.js';
import { onBackdropClick, OnCloseModalByEscape } from './modal-close.js';
import { renderModalFilms } from './renderModalFilm.js';

// export function openModal(callback) {
//     refs.filmList.addEventListener('click', e => {
//         console.log(e.target);
//         console.log(callback);

//     //   const id = e.target.dataset.overlayid;
//     //   const id = getDataAtr(dataAtr);
//       const id = callback();
//       console.log(id);

// //   if (!e.target.classList.contains(cssClass)) {
// //     return;
// //   }

//   window.addEventListener('keydown', OnCloseModalByEscape);

//   refs.filmContainer.classList.remove('is-hidden');

//       renderModalFilms(id);
//     //   console.log(renderModalFilms(id));
//   onBackdropClick(refs.filmContainer);
// });
// }

// export function checkAboutBtnClick() {
//     if (!e.target.classList.contains('js-overlay-about')) {
//     return;
//     }
//     return e.target.dataset.overlayid;
// }

// export function checkOverlayClick() {
// if (!e.target.classList.contains('film-card')) {
//     return;
//   }
// }

// export function getDataAtr(dataAtr) {
//     return e.target.dataset.dataAtr;
// }

// export function openModal() {
// refs.filmList.addEventListener('click', e => {

//     const id = e.target.dataset.overlayid || e.target.dataset.value;


//     // console.log(e.currentTarget);
//     // console.log(e.target);

//   if (!e.target.classList.contains('js-overlay-about') && !e.target.classList.contains('card-overlay') ) {
//     return;
//   }

//   window.addEventListener('keydown', OnCloseModalByEscape);

//   refs.filmContainer.classList.remove('is-hidden');

//   renderModalFilms(id);
//   onBackdropClick(refs.filmContainer);
// });
// }

export function openModal(e) {
    const id = e.target.dataset.overlayid || e.target.dataset.value;


    // console.log(e.currentTarget);
    // console.log(e.target);

//   if (!e.target.classList.contains('js-overlay-about') && !e.target.classList.contains('card-overlay') ) {
//     return;
//   }

  window.addEventListener('keydown', OnCloseModalByEscape);

  refs.filmContainer.classList.remove('is-hidden');

//   renderModalFilms(id);
    onBackdropClick(refs.filmContainer);
    return id;
    // const buttonWatched = document.querySelector('.js-watched');
    // const buttonQueue = document.querySelector('.js-queue');
    // console.log(buttonWatched);

}

function onAboutClick(e) {
     if (!e.target.classList.contains('js-overlay-about')) {
         return;

    }
    openModal(e);
}

function onOverlayClick(e) {
    if (!e.target.classList.contains('card-overlay') ) {
    return;
    }
    // console.log(openModal(e));
    // openModal(e);
}