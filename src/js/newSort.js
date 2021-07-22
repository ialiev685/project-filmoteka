import cardFormRus from '../hbs/cardFormRus.hbs';

function newSortFilms(arr) {
    const arrayGenres = document.querySelectorAll('.name-genres');
    const arrayYear = document.querySelectorAll('.year-list');
    const newSortBtnGenreEl = document.querySelector('#new-sort-btn-genre');
    const newSortBtnYearEl = document.querySelector('#new-sort-btn-year');
    const newSortBtnRating = document.querySelector('#new-sort-btn-reting');
    const listGenresEl = document.querySelector('.new-sort-list-genre');
    const listYearEl = document.querySelector('.new-sort-list-year');
    const listRatingEl = document.querySelector('.new-sort-list-rating');
    const arrayComeGenres = [];
    const arrayGenresNames = [];
    const normArrayGenresNames = [];

    const arrayComeYear = [];
    const arrayComeRating = [];
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
        arrayComeRating.push(obj.vote_average);
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
    const shortArrayRating = arrayComeRating.filter((el, idx, arr) => {
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

    const newShortArrayRating = shortArrayRating.map(element => {
        const rating = document.createElement('li');
        rating.textContent = element;
        rating.classList.add('new-sort-subitem');
        return rating
    });
    listRatingEl.append(...newShortArrayRating);

    // ---------добавляю слушатели на кнопки сортиравки:
    newSortBtnGenreEl.addEventListener('click', onAdditionGenresClick);
    newSortBtnYearEl.addEventListener('click', onAdditionYearClick);
    newSortBtnRating.addEventListener('click', onAdditionRatingClick);

//-------------Жанры:
    function onAdditionGenresClick() {
        listGenresEl.classList.toggle('is-hidden');
        window.addEventListener('click', onRemoveSortInputClick);

        function onRemoveSortInputClick(e) {
            if (e.target.classList[0] === 'new-sort-subitem') {
                e.target.classList.toggle('new-sort-subitem-check-mark');
            } else if (!listGenresEl.classList.contains('is-hidden') && e.target.className !== 'new-sort-btn' && e.target.classList[0] !== 'new-sort-subitem') {
            removeNewSortInput();
            };
        };

        function removeNewSortInput() {
            listGenresEl.classList.add('is-hidden');
            window.removeEventListener('click', onRemoveSortInputClick);
        };
    };

//-------------Года:
    function onAdditionYearClick() {
        listYearEl.classList.toggle('is-hidden');
        window.addEventListener('click', onRemoveSortInputClick);

        function onRemoveSortInputClick(e) {
            if (e.target.classList[0] === 'new-sort-subitem') {
                e.target.classList.toggle('new-sort-subitem-check-mark');
            } else if (!listYearEl.classList.contains('is-hidden') && e.target.className !== 'new-sort-btn' && e.target.classList[0] !== 'new-sort-subitem') {
            removeNewSortInput();
            };
        };

        function removeNewSortInput() {
            listYearEl.classList.add('is-hidden');
            window.removeEventListener('click', onRemoveSortInputClick);
        };
    };

// ------------Рейтинги:
    function onAdditionRatingClick() {
         listRatingEl.classList.toggle('is-hidden');
        window.addEventListener('click', onRemoveSortInputClick);

        function onRemoveSortInputClick(e) {
            if (e.target.classList[0] === 'new-sort-subitem') {
                e.target.classList.toggle('new-sort-subitem-check-mark');
            } else if (!listRatingEl.classList.contains('is-hidden') && e.target.className !== 'new-sort-btn' && e.target.classList[0] !== 'new-sort-subitem') {
            removeNewSortInput();
            };
        };

        function removeNewSortInput() {
            listRatingEl.classList.add('is-hidden');
            window.removeEventListener('click', onRemoveSortInputClick);
        };
    }
}

export {newSortFilms} 