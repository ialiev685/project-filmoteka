// import { refs } from '../refs.js';

// const btnGenre = refs.sortFilmsBtnGenre;
// const btnRating = refs.sortFilmsBtnRating;
// const btnYear = refs.sortFilmsBtnYear;
// // const btnClear = refs.sortFilmsBtnClear;

// btnGenre.addEventListener('click', onSortGenreClick);
// btnRating.addEventListener('click', onSortRatingClick);
// btnYear.addEventListener('click', onSortYearClick);
// // btnClear.addEventListener('click', onSortClearClick);

// if (refs.myLibraryBtn.classList.contains('current')) {
//     refs.sortFilmsBox.classList.add('is-hidden');
// } else if (!refs.myLibraryBtn.classList.contains('current')) {
//     refs.sortFilmsBox.classList.remove('is-hidden')
// };

// function onSortGenreClick() {
    
//     if (!btnGenre.classList.contains('sort-films-btn-down') && !btnGenre.classList.contains('sort-films-btn-up')) {
//         btnGenre.classList.add('sort-films-btn-down');

//         ratingBtnRemove();
//         yearBtnRemove();
//         return
//     }
//     if (btnGenre.classList.contains('sort-films-btn-down')) {
//         btnGenre.classList.add('sort-films-btn-up');
//         btnGenre.classList.remove('sort-films-btn-down');
//         return
//     }
//     if (btnGenre.classList.contains('sort-films-btn-up')) {
//         btnGenre.classList.remove('sort-films-btn-up');
//         return
//     }
// };

// function onSortRatingClick() {
//     if (!btnRating.classList.contains('sort-films-btn-down') && !btnRating.classList.contains('sort-films-btn-up')) {
//         btnRating.classList.add('sort-films-btn-down');
        
//         genreBtnRemove();
//         yearBtnRemove();
//         return
//     }
//     if (btnRating.classList.contains('sort-films-btn-down')) {
//         btnRating.classList.add('sort-films-btn-up');
//         btnRating.classList.remove('sort-films-btn-down');
//         return
//     }
//     if (btnRating.classList.contains('sort-films-btn-up')) {
//         btnRating.classList.remove('sort-films-btn-up');
//         return
//     } 
// };

// function onSortYearClick() {
//     if (!btnYear.classList.contains('sort-films-btn-down') && !btnYear.classList.contains('sort-films-btn-up')) {
//         btnYear.classList.add('sort-films-btn-down');

//         genreBtnRemove();
//         ratingBtnRemove();
//         return
//     }
//     if (btnYear.classList.contains('sort-films-btn-down')) {
//         btnYear.classList.add('sort-films-btn-up');
//         btnYear.classList.remove('sort-films-btn-down');
//         return
//     }
//     if (btnYear.classList.contains('sort-films-btn-up')) {
//         btnYear.classList.remove('sort-films-btn-up');
//         return
//     } 
// };

// function yearBtnRemove() {
//     btnYear.classList.remove('sort-films-btn-down');
//     btnYear.classList.remove('sort-films-btn-up');
// };

// function ratingBtnRemove() {
//     btnRating.classList.remove('sort-films-btn-down');
//     btnRating.classList.remove('sort-films-btn-up');
// };

// function genreBtnRemove() {
//     btnGenre.classList.remove('sort-films-btn-down');
//     btnGenre.classList.remove('sort-films-btn-up');
// };
// function onSortClearClick() {
//     btnGenre.classList.remove('sort-films-btn-down');
//     btnGenre.classList.remove('sort-films-btn-up');
//     btnRating.classList.remove('sort-films-btn-down');
//     btnRating.classList.remove('sort-films-btn-up');
//     btnYear.classList.remove('sort-films-btn-down');
//     btnYear.classList.remove('sort-films-btn-up');
// };

