import { refs } from './refs.js';
// import sortCardForm from '../hbs/sortCardForm.hbs';
import { checkHasFilmImage } from './is-image.js';
import cardForm from '../hbs/cardForm.hbs';

const btnGenre = refs.sortFilmsBtnGenre;
const btnRating = refs.sortFilmsBtnRating;
const btnYear = refs.sortFilmsBtnYear;

function sortFilms(arr) {
  // ------------Логика массивов:
  const arrayGenres = document.querySelectorAll('.name-genres');
  const arrayYear = document.querySelectorAll('.year-list');

  // ------------Создаю дополнительные ключи индекса, года и жанра:
  arr.map((el, idx) => (el.index = idx));
  arr.map((el, idx) => (el.genre = idx));
  arr.map((el, idx) => (el.year = idx));

  // ---------Изменяю массыв объектов карточек на нормальные года и жанры:
  arr.map((obj, idx) => {
    obj.genre = [...arrayGenres][idx].innerText;
    obj.year = [...arrayYear][idx].innerText;
  });

  // -------функции сортировки:
  function sortGenresFilmsDown() {
    arr.sort((a, b) => {
      if (a.genre < b.genre) {
        return -1;
      }
      if (a.genre > b.genre) {
        return 1;
      }
      return 0;
    });
  }

  function sortGenresFilmsUp() {
    arr.sort((a, b) => {
      if (a.genre < b.genre) {
        return 1;
      }
      if (a.genre > b.genre) {
        return -1;
      }
      return 0;
    });
  }

  function sortYearFilmsDown() {
    arr.sort((a, b) => {
      if (a.year < b.year) {
        return -1;
      }
      if (a.year > b.year) {
        return 1;
      }
      return 0;
    });
  }

  function sortYearFilmsUp() {
    arr.sort((a, b) => {
      if (a.year < b.year) {
        return 1;
      }
      if (a.year > b.year) {
        return -1;
      }
      return 0;
    });
  }

  function sortRatingFilmsDown() {
    arr.sort((a, b) => {
      if (a.vote_average < b.vote_average) {
        return -1;
      }
      if (a.vote_average > b.vote_average) {
        return 1;
      }
      return 0;
    });
  }

  function sortRatingFilmsUp() {
    arr.sort((a, b) => {
      if (a.vote_average < b.vote_average) {
        return 1;
      }
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      return 0;
    });
  }

  function sortFilmsOriginalArray() {
    arr.sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      }
      if (a.index > b.index) {
        return 1;
      }
      return 0;
    });
  }

  // --------------Логика кнопок:
  btnGenre.addEventListener('click', onSortGenreClick);
  btnRating.addEventListener('click', onSortRatingClick);
  btnYear.addEventListener('click', onSortYearClick);

  onRemoveEventListenerSubmitClick();
  onRemoveEventListenerDayClick();
  onRemoveEventListenerWeekClick();
  onRemoveEventListenerPaginationClick();

  onRemoveEventListenerHomeBtnClick();

  function onSortGenreClick() {
    if (
      !btnGenre.classList.contains('sort-films-btn-down') &&
      !btnGenre.classList.contains('sort-films-btn-up')
    ) {
      btnGenre.classList.add('sort-films-btn-down');
      btnGenre.classList.remove('sort-films-btn-up');

      sortGenresFilmsDown();
      renderModifiedFilms(arr);

      ratingBtnRemove();
      yearBtnRemove();
      return;
    } else if (btnGenre.classList.contains('sort-films-btn-down')) {
      btnGenre.classList.add('sort-films-btn-up');
      btnGenre.classList.remove('sort-films-btn-down');

      sortGenresFilmsUp();
      renderModifiedFilms(arr);
      return;
    } else if (btnGenre.classList.contains('sort-films-btn-up')) {
      btnGenre.classList.remove('sort-films-btn-up');

      sortFilmsOriginalArray();
      renderModifiedFilms(arr);
      return;
    }
  }

  function onSortRatingClick() {
    if (
      !btnRating.classList.contains('sort-films-btn-down') &&
      !btnRating.classList.contains('sort-films-btn-up')
    ) {
      btnRating.classList.add('sort-films-btn-down');

      sortRatingFilmsDown();
      renderModifiedFilms(arr);

      genreBtnRemove();
      yearBtnRemove();
      return;
    } else if (btnRating.classList.contains('sort-films-btn-down')) {
      btnRating.classList.add('sort-films-btn-up');
      btnRating.classList.remove('sort-films-btn-down');

      sortRatingFilmsUp();
      renderModifiedFilms(arr);
      return;
    } else if (btnRating.classList.contains('sort-films-btn-up')) {
      btnRating.classList.remove('sort-films-btn-up');

      sortFilmsOriginalArray();
      renderModifiedFilms(arr);
      return;
    }
  }

  function onSortYearClick() {
    if (
      !btnYear.classList.contains('sort-films-btn-down') &&
      !btnYear.classList.contains('sort-films-btn-up')
    ) {
      btnYear.classList.add('sort-films-btn-down');

      sortYearFilmsDown();
      renderModifiedFilms(arr);

      genreBtnRemove();
      ratingBtnRemove();
      return;
    } else if (btnYear.classList.contains('sort-films-btn-down')) {
      btnYear.classList.add('sort-films-btn-up');
      btnYear.classList.remove('sort-films-btn-down');

      sortYearFilmsUp();
      renderModifiedFilms(arr);
      return;
    } else if (btnYear.classList.contains('sort-films-btn-up')) {
      btnYear.classList.remove('sort-films-btn-up');

      sortFilmsOriginalArray();
      renderModifiedFilms(arr);
      return;
    }
  }

  function yearBtnRemove() {
    btnYear.classList.remove('sort-films-btn-down');
    btnYear.classList.remove('sort-films-btn-up');
  }

  function ratingBtnRemove() {
    btnRating.classList.remove('sort-films-btn-down');
    btnRating.classList.remove('sort-films-btn-up');
  }

  function genreBtnRemove() {
    btnGenre.classList.remove('sort-films-btn-down');
    btnGenre.classList.remove('sort-films-btn-up');
  }

  function renderModifiedFilms(array) {
    refs.filmList.innerHTML = '';
    refs.filmList.insertAdjacentHTML('beforeend', cardForm(array));
    checkHasFilmImage(array);
  }
  function onRemoveEventListenerSubmitClick() {
    refs.searchBtn.addEventListener('click', RemoveEventListener);
    refs.headerInput.addEventListener('keydown', RemoveEventListener);

    function RemoveEventListener() {
      btnGenre.removeEventListener('click', onSortGenreClick);
      btnGenre.removeEventListener('keydown', onSortGenreClick);
      btnRating.removeEventListener('click', onSortRatingClick);
      btnRating.removeEventListener('keydown', onSortRatingClick);
      btnYear.removeEventListener('click', onSortYearClick);
      btnYear.removeEventListener('keydown', onSortYearClick);
    }
  }
  // Снятие слушателя при нажатии на кнопки day и week:
  function onRemoveEventListenerDayClick() {
    refs.dropdownListPopularSortDay.addEventListener('click', removeEventListenerBtnClick);
  }
  function onRemoveEventListenerWeekClick() {
    refs.dropdownListPopularSortWeek.addEventListener('click', removeEventListenerBtnClick);
  }
  // Снятие слушателя при нажатии на кнопки пагинации:
  function onRemoveEventListenerPaginationClick() {
    refs.paginListStart.addEventListener('click', removeEventListenerBtnClick);
  }
  // Снятие слушателя при нажатии на кнопку HOME:
  function onRemoveEventListenerHomeBtnClick() {
    refs.homeBtn.addEventListener('click', removeEventListenerBtnClick);
  }
  function removeEventListenerBtnClick() {
    btnGenre.removeEventListener('click', onSortGenreClick);
    btnRating.removeEventListener('click', onSortRatingClick);
    btnYear.removeEventListener('click', onSortYearClick);
  }
}

function sortBtnRemove() {
  btnGenre.classList.remove('sort-films-btn-down');
  btnGenre.classList.remove('sort-films-btn-up');
  btnRating.classList.remove('sort-films-btn-down');
  btnRating.classList.remove('sort-films-btn-up');
  btnYear.classList.remove('sort-films-btn-down');
  btnYear.classList.remove('sort-films-btn-up');
}

function correctionMargin() {
  if (refs.myLibraryBtn.classList.contains('current')) {
    refs.sortFilmsBox.classList.add('is-hidden');
  } else if (refs.homeBtn.classList.contains('current')) {
    refs.sortFilmsBox.classList.remove('is-hidden');
  }
}

export { sortFilms, sortBtnRemove, correctionMargin };
