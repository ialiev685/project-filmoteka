import cardFormRus from '../hbs/cardFormRus.hbs';



function newSortFilms(arr) {
    const arrayGenres = document.querySelectorAll('.name-genres');
    const arrayYear = document.querySelectorAll('.year-list');
    const newSortBtnGenreEl = document.querySelector('#new-sort-btn-genre');
    const newSortBtnYearEl = document.querySelector('#new-sort-btn-year');
    const listGenresEl = document.querySelector('.new-sort-list-genre');
    const listRatingEl = document.querySelector('.new-sort-list-rating');
    const listYearEl = document.querySelector('.new-sort-list-year');
    const arrayComeGenres = [];
    const arrayGenresNames = [];
    const normArrayGenresNames = [];

    const arrayComeYear = [];
    
    // ------------Создаю дополнительные ключи индекса, года и жанра:
    // arr.map((el, idx) => (el.index = idx));
    // arr.map((el, idx) => (el.genre = idx));
    // arr.map((el, idx) => (el.year = idx));
    
    // ---------Изменяю массив объектов карточек на нормальные года и жанры:
    arr.map((obj, idx) => {
        obj.genre = [...arrayGenres][idx].innerText;
        obj.year = [...arrayYear][idx].innerText;
        arrayComeGenres.push(obj.genre);
        arrayComeYear.push(obj.year);
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

    // -------убираем повторяющиеся жанры, года и рейтинги в массиве:
   const shortArrayGenres = normArrayGenresNames.filter((el, idx, arr) => {
      return arr.lastIndexOf(el) === idx
    });
   const shortArrayYear = arrayComeYear.filter((el, idx, arr) => {
      return arr.lastIndexOf(el) === idx
   });
    
    // --------добавление жанров, годов и рейтингов в всплывающее меню при клике:
    const newShortArrayGenres = shortArrayGenres.map(element => {
        const genre = document.createElement('li');
        genre.textContent = element;
        genre.classList.add('new-sort-subitem');
        return genre
    });
    listGenresEl.append(...newShortArrayGenres);

    const newShortArrayYear = shortArrayYear.map(element => {
        const year = document.createElement('li');
        year.textContent = element;
        year.classList.add('new-sort-subitem');
        return year
    });
    listYearEl.append(...newShortArrayYear);

    // -------делаю добавление галочек:
    newSortBtnGenreEl.addEventListener('click', onAdditionGenresClick);
    newSortBtnYearEl.addEventListener('click', onAdditionYearClick);

    function onAdditionGenresClick() {
        listGenresEl.classList.toggle('is-hidden');

        const itemGenreEl = listGenresEl.querySelectorAll('.new-sort-subitem');
        [...itemGenreEl].forEach(el => {
            el.addEventListener('click', () => el.classList.toggle('new-sort-subitem-check-mark'));
            if (listGenresEl.classList.contains('is-hidden')) {
                el.removeEventListener('click', () => el.classList.toggle('new-sort-subitem-check-mark'));
            }
        })
    };

    function onAdditionYearClick() {
        listYearEl.classList.toggle('is-hidden');

        const itemYearEl = listYearEl.querySelectorAll('.new-sort-subitem');
        [...itemYearEl].forEach(el => {
            el.addEventListener('click', () => el.classList.toggle('new-sort-subitem-check-mark'));
            if (listYearEl.classList.contains('is-hidden')) {
                el.removeEventListener('click', () => el.classList.toggle('new-sort-subitem-check-mark'));
            }
        })
    };
}

export {newSortFilms} 