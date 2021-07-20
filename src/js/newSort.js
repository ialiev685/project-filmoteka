import cardFormRus from '../hbs/cardFormRus.hbs';
import { refs } from './refs.js';
import { checkHasFilmImage } from './is-image.js';
import cardForm from '../hbs/cardForm.hbs';
import ButtonAction from './button-action.js';

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
    })
}