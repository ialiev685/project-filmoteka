import cardFormRus from '../hbs/cardFormRus.hbs';



function newSortFilms(arr) {
    const arrayGenres = document.querySelectorAll('.name-genres');
    const arrayYear = document.querySelectorAll('.year-list');
    const newSortBtnEl = document.querySelector('.new-sort-btn');
    const listGenresEl = document.querySelector('.new-sort-list-genre');
    const listRatingEl = document.querySelector('.new-sort-list-rating');
    const listYearEl = document.querySelector('.new-sort-list-year');
    const arrayComeGenres = [];
    const arrayGenresNames = [];
    const normArrayGenresNames = [];
    // ------------Создаю дополнительные ключи индекса, года и жанра:
    // arr.map((el, idx) => (el.index = idx));
    // arr.map((el, idx) => (el.genre = idx));
    // arr.map((el, idx) => (el.year = idx));
    
    // ---------Изменяю массив объектов карточек на нормальные года и жанры:
    arr.map((obj, idx) => {
        obj.genre = [...arrayGenres][idx].innerText;
        obj.year = [...arrayYear][idx].innerText;
        arrayComeGenres.push(obj.genre);
    })

    // --------Делаю нормальный массив жанров:
    arrayComeGenres.map((el) => {
        const arrGenresEl = el.split(' ');
        arrGenresEl.forEach(genre => {
            if (arrGenresEl.includes(genre)) {
                arrayGenresNames.push(genre)
            }
        });
    });

    // -------убираем лишние запятые в массиве жанров:
    arrayGenresNames.map((genre) => {
            if (genre[genre.length - 1] !== ',') {
                normArrayGenresNames.push(genre);
            } else if (genre[genre.length - 1] === ',') {
               const noCommaGenres = genre.slice(0,-1)
                normArrayGenresNames.push(noCommaGenres);
            }
    });

    // -------убираем повторяющиеся жанры в массиве:
   const shortArrayGenres = normArrayGenresNames.filter((el, idx, arr) => {
      return arr.lastIndexOf(el) === idx
    });
    
    // --------добавление жанров в всплывающее меню при клике:

    const newShortArrayGenres = shortArrayGenres.map(element => {
        const genre = document.createElement('li');
        genre.textContent = element;
        genre.classList.add('new-sort-item-genre');
        return genre
    });

    listGenresEl.classList.add('is-hidden')
    listGenresEl.append(...newShortArrayGenres);

    newSortBtnEl.addEventListener('click', onAdditionGenresClick)
    
    function onAdditionGenresClick() {
        listGenresEl.classList.toggle('is-hidden');
    };
    
}

export {newSortFilms} 