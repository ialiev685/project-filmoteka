import { refs } from '../refs.js';
import { renderFilms } from '../renderFilms.js';
// import { getTrendItems } from '../base-api.js';
// import cardForm from '../../hbs/cardForm.hbs';
// import { getGenres } from '../genres.js';
// import { getVote } from '../vote-avarage.js';
// import { getReleaseYear } from '../years.js';
import sortCardForm from '../../hbs/sortCardForm.hbs';

function sortFilms(arr) {
    
    // ------------Логика массивов:
    const arrayGenres = document.querySelectorAll('.name-genres');
    const arrayYear = document.querySelectorAll('.year-list');
    const arrayRating = document.querySelectorAll('.vote-average');

    function s() {
        const s = arr
    return s
    }
    // const dataFilms = {
    //     genres: [],
    //     year: [],
    //     rating: [],
    // };

//    const startArray = [...arrayGenres].map((el) => {
//        dataFilms.genres.push(el.innerHTML);
//        return el.innerHTML
//     });
    

   // ---------Изменяю массыв объектов карточек на нормальные года и жанры:
arr.map((obj, idx) => {
    obj.genre_ids = [...arrayGenres][idx].innerText;
    obj.release_date = [...arrayYear][idx].innerText;
    });

    // -------функции сортировки:
function sortGenresFilmsDown() {
    arr.sort((a, b) => {
    if(a.genre_ids < b.genre_ids) { return -1; }
    if(a.genre_ids > b.genre_ids) { return 1; }
    return 0;
    })
};
    
    // console.log(arr);
    
function sortGenresFilmsUp() {
    arr.sort((a, b) => {
    if(a.genre_ids < b.genre_ids) { return 1; }
    if(a.genre_ids > b.genre_ids) { return -1; }
    return 0;
    })
};

    

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
            
            sortGenresFilmsDown();
            console.log(arr);
            // renderModifiedFilms(arr)
          
            
            ratingBtnRemove();
            yearBtnRemove();
            return
        }
        if (btnGenre.classList.contains('sort-films-btn-down')) {
            btnGenre.classList.add('sort-films-btn-up');
            btnGenre.classList.remove('sort-films-btn-down');

            sortGenresFilmsUp();
            console.log(arr);
            // renderModifiedFilms(arr);
            
            return
        }
        if (btnGenre.classList.contains('sort-films-btn-up')) {
            btnGenre.classList.remove('sort-films-btn-up');

            s()
            console.log(s());
            // renderModifiedFilms(s);
            
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

    
    function renderModifiedFilms(array) {
        // console.log(array);
        refs.filmList.innerHTML = '';
        refs.filmList.insertAdjacentHTML('beforeend', sortCardForm(array));
    };
};

export { sortFilms };
