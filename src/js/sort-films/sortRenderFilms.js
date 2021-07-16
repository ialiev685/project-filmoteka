import { refs } from '../refs.js';
import { renderFilms } from '../renderFilms.js';
import { getTrendItems } from '../base-api.js';
import { getGenres } from '../genres.js';



function sortFilms(arr) {

    // ------------Логика массивов:
    const arrayGenres = document.querySelectorAll('.name-genres');
    const arrayYear = document.querySelectorAll('.year-list');
    const arrayRating = document.querySelectorAll('.vote-average');
    
    
    const dataFilms = {
        genres: [],
        year: [],
        rating: [],
    };


   const startArray = [...arrayGenres].map((el) => {
       dataFilms.genres.push(el.innerHTML);
       return el.innerHTML
    });
    
    function sortGenresFilmsDown() {
       return dataFilms.genres.sort();
        
    };
    
    function sortGenresFilmsUp() {
        return dataFilms.genres.reverse();
    };

   // -------------------------------
    // arr.forEach((el) => {
    //     dataFilms.rating = el.vote_average;
    //     console.log(el.vote_average);
    // })
    // console.log(dataFilms.rating);
    // // function sortRating() {
    //     [...dataFilms.rating].sort((a, b) => {
    //         a.vote_average - b.vote_average
    //     })
    // // }
    // console.log(arr.vote_average);

    // --------------Логика кнопок:

    const btnGenre = refs.sortFilmsBtnGenre;
    const btnRating = refs.sortFilmsBtnRating;
    const btnYear = refs.sortFilmsBtnYear;
    // const btnClear = refs.sortFilmsBtnClear;
    
    btnGenre.addEventListener('click', onSortGenreClick);
    btnRating.addEventListener('click', onSortRatingClick);
    btnYear.addEventListener('click', onSortYearClick);
    // btnClear.addEventListener('click', onSortClearClick);

    if (refs.myLibraryBtn.classList.contains('current')) {
        refs.sortFilmsBox.classList.add('is-hidden');
    } else if (!refs.myLibraryBtn.classList.contains('current')) {
        refs.sortFilmsBox.classList.remove('is-hidden')
    };

    function onSortGenreClick() {
        
        if (!btnGenre.classList.contains('sort-films-btn-down') && !btnGenre.classList.contains('sort-films-btn-up')) {
            btnGenre.classList.add('sort-films-btn-down');
            
            // removeFilmList();
            // renderFilms();
            // console.log(sortGenresFilmsDown());
            
            ratingBtnRemove();
            yearBtnRemove();
            return
        }
        if (btnGenre.classList.contains('sort-films-btn-down')) {
            btnGenre.classList.add('sort-films-btn-up');
            btnGenre.classList.remove('sort-films-btn-down');

            // removeFilmList();
            // renderFilms(sortGenresFilmsUp);
            // console.log(sortGenresFilmsUp());
            return
        }
        if (btnGenre.classList.contains('sort-films-btn-up')) {
            btnGenre.classList.remove('sort-films-btn-up');

            // removeFilmList();
            // renderFilms(s);
            // console.log(s);
            return
        }
    };

    function onSortRatingClick() {
        if (!btnRating.classList.contains('sort-films-btn-down') && !btnRating.classList.contains('sort-films-btn-up')) {
            btnRating.classList.add('sort-films-btn-down');
            
            genreBtnRemove();
            yearBtnRemove();
            return
        }
        if (btnRating.classList.contains('sort-films-btn-down')) {
            btnRating.classList.add('sort-films-btn-up');
            btnRating.classList.remove('sort-films-btn-down');
            return
        }
        if (btnRating.classList.contains('sort-films-btn-up')) {
            btnRating.classList.remove('sort-films-btn-up');
            return
        } 
    };

    function onSortYearClick() {
        if (!btnYear.classList.contains('sort-films-btn-down') && !btnYear.classList.contains('sort-films-btn-up')) {
            btnYear.classList.add('sort-films-btn-down');

            genreBtnRemove();
            ratingBtnRemove();
            return
        }
        if (btnYear.classList.contains('sort-films-btn-down')) {
            btnYear.classList.add('sort-films-btn-up');
            btnYear.classList.remove('sort-films-btn-down');
            return
        }
        if (btnYear.classList.contains('sort-films-btn-up')) {
            btnYear.classList.remove('sort-films-btn-up');
            return
        } 
    };

    function yearBtnRemove() {
        btnYear.classList.remove('sort-films-btn-down');
        btnYear.classList.remove('sort-films-btn-up');
    };

    function ratingBtnRemove() {
        btnRating.classList.remove('sort-films-btn-down');
        btnRating.classList.remove('sort-films-btn-up');
    };

    function genreBtnRemove() {
        btnGenre.classList.remove('sort-films-btn-down');
        btnGenre.classList.remove('sort-films-btn-up');
    };

};

export { sortFilms };
