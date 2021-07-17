import { refs } from './refs.js';
import sortCardForm from '../hbs/sortCardForm.hbs';
import { checkHasFilmImage } from './is-image.js';

const btnGenre = refs.sortFilmsBtnGenre;
const btnRating = refs.sortFilmsBtnRating;
const btnYear = refs.sortFilmsBtnYear;

function sortFilms(arr) {
    
    // ------------Логика массивов:
    const arrayGenres = document.querySelectorAll('.name-genres');
    const arrayYear = document.querySelectorAll('.year-list');

    // ------------Создаю дополнительный ключ index:
    arr.map((el, idx) => el.index = idx);

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
    
    function sortGenresFilmsUp() {
        arr.sort((a, b) => {
            if(a.genre_ids < b.genre_ids) { return 1; }
            if(a.genre_ids > b.genre_ids) { return -1; }
            return 0;
        })
    };
    
    function sortYearFilmsDown() {
        arr.sort((a, b) => {
            if(a.release_date < b.release_date) { return -1; }
            if(a.release_date > b.release_date) { return 1; }
            return 0;
        })
    };

    function sortYearFilmsUp() {
        arr.sort((a, b) => {
            if(a.release_date < b.release_date) { return 1; }
            if(a.release_date > b.release_date) { return -1; }
            return 0;
        })
    };

    function sortRatingFilmsDown() {
        arr.sort((a, b) => {
            if(a.vote_average < b.vote_average) { return -1; }
            if(a.vote_average > b.vote_average) { return 1; }
            return 0;
        })
    };

    function sortRatingFilmsUp() {
        arr.sort((a, b) => {
            if(a.vote_average < b.vote_average) { return 1; }
            if(a.vote_average > b.vote_average) { return -1; }
            return 0;
        })
    };

    function sortFilmsOriginalArray() {
        arr.sort((a, b) => {
            if(a.index < b.index) { return -1; }
            if(a.index > b.index) { return 1; }
            return 0;
        })
    };

    // --------------Логика кнопок:
    btnGenre.addEventListener('click', onSortGenreClick);
    btnRating.addEventListener('click', onSortRatingClick);
    btnYear.addEventListener('click', onSortYearClick);
    
    if (refs.myLibraryBtn.classList.contains('current')) {
        refs.sortFilmsBox.classList.add('is-hidden');
    } else if (!refs.myLibraryBtn.classList.contains('current')) {
        refs.sortFilmsBox.classList.remove('is-hidden');
    };
    
    function onSortGenreClick() {
        
        if (!btnGenre.classList.contains('sort-films-btn-down') && !btnGenre.classList.contains('sort-films-btn-up')) {
            btnGenre.classList.add('sort-films-btn-down');
            btnGenre.classList.remove('sort-films-btn-up');
            
            sortGenresFilmsDown();
            renderModifiedFilms(arr);
          
            ratingBtnRemove();
            yearBtnRemove();
            return
        } else if (btnGenre.classList.contains('sort-films-btn-down')) {
            btnGenre.classList.add('sort-films-btn-up');
            btnGenre.classList.remove('sort-films-btn-down');
          
            sortGenresFilmsUp();
            renderModifiedFilms(arr);
            return
        } else if (btnGenre.classList.contains('sort-films-btn-up')) {
            btnGenre.classList.remove('sort-films-btn-up');
           
            sortFilmsOriginalArray();
            renderModifiedFilms(arr);
            return
        }
    };

    function onSortRatingClick() {
        if (!btnRating.classList.contains('sort-films-btn-down') && !btnRating.classList.contains('sort-films-btn-up')) {
            btnRating.classList.add('sort-films-btn-down');
            
            sortRatingFilmsDown();
            renderModifiedFilms(arr);
            
            genreBtnRemove();
            yearBtnRemove();
            return
        } else if (btnRating.classList.contains('sort-films-btn-down')) {
            btnRating.classList.add('sort-films-btn-up');
            btnRating.classList.remove('sort-films-btn-down');

            sortRatingFilmsUp();
            renderModifiedFilms(arr);
            return
        } else if (btnRating.classList.contains('sort-films-btn-up')) {
            btnRating.classList.remove('sort-films-btn-up');

            sortFilmsOriginalArray();
            renderModifiedFilms(arr);
            return
        } 
    };

    function onSortYearClick() {
        if (!btnYear.classList.contains('sort-films-btn-down') && !btnYear.classList.contains('sort-films-btn-up')) {
            btnYear.classList.add('sort-films-btn-down');

            sortYearFilmsDown();
            renderModifiedFilms(arr);
            
            genreBtnRemove();
            ratingBtnRemove();
            return
        } else if (btnYear.classList.contains('sort-films-btn-down')) {
            btnYear.classList.add('sort-films-btn-up');
            btnYear.classList.remove('sort-films-btn-down');

            sortYearFilmsUp();
            renderModifiedFilms(arr);
            return
        } else if (btnYear.classList.contains('sort-films-btn-up')) {
            btnYear.classList.remove('sort-films-btn-up');

            sortFilmsOriginalArray();
            renderModifiedFilms(arr);
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
        refs.filmList.innerHTML = '';
        refs.filmList.insertAdjacentHTML('beforeend', sortCardForm(array));
        checkHasFilmImage(array);
    };
};
   
  function sortBtnRemove() {
  btnGenre.classList.remove('sort-films-btn-down');
  btnGenre.classList.remove('sort-films-btn-up');
  btnRating.classList.remove('sort-films-btn-down');
  btnRating.classList.remove('sort-films-btn-up');
  btnYear.classList.remove('sort-films-btn-down');
  btnYear.classList.remove('sort-films-btn-up');
};

export { sortFilms, sortBtnRemove };

