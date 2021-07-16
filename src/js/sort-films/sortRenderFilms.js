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
    
    // const dataFilms = {
    //     genres: [],
    //     year: [],
    //     rating: [],
    // };


//    const startArray = [...arrayGenres].map((el) => {
//        dataFilms.genres.push(el.innerHTML);
//        return el.innerHTML
//     });
    

   // -------------------------------
    
    console.dir(arrayGenres);

    arr.forEach(obj => {
            // console.log(obj);
        arrayGenres.forEach(stringGenres => {
            // console.dir(stringGenres.innerText);
            // obj.genre_ids = stringGenres.innerText;
        });
        // arrayYear.forEach((years) => {
        //     obj.release_date = years.innerText;
        // });
    });



    // function sortGenresFilmsDown() {
    //     arr.sort((a, b) => {
    //        a.genre_ids - b.genre_ids
    //     })
    //     return
    // };
    
    // function sortGenresFilmsUp() {
    //     return dataFilms.genres.reverse();
    // };

    

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
            
            sortGenresFilmsDown()
            // console.log(arr);
            // renderModifiedFilms(arr)
          
            
            ratingBtnRemove();
            yearBtnRemove();
            return
        }
        if (btnGenre.classList.contains('sort-films-btn-down')) {
            btnGenre.classList.add('sort-films-btn-up');
            btnGenre.classList.remove('sort-films-btn-down');

            
            renderModifiedFilms(newArrayFilms);
            
            return
        }
        if (btnGenre.classList.contains('sort-films-btn-up')) {
            btnGenre.classList.remove('sort-films-btn-up');

            
            renderModifiedFilms(newArrayFilms);
            
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
