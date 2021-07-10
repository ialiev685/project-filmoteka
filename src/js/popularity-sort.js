import { refs } from './refs.js';

refs.dropdownPopularSort.addEventListener('click', onDropdownListClick);

function onDropdownListClick() {
    refs.dropdownPopularSort.classList.toggle('active');
};

