import { refs } from './refs.js';
import langArray from '../json/lang.json';
import { getTrendItems } from './base-api.js';
import { renderFilms } from './renderFilms.js';


const Language = {
  EN: 'en',
  RU: 'ru',
};

refs.switchLangCheckbox.addEventListener('change', e => {
  changeSignColor(e);
  const lang = switchLanguage(e);
  onChangeLang();
    translateInterface(lang);
    
});

async function onChangeLang() {
  const films = await getTrendItems(1);

  renderFilms(films);
}

export function switchLanguage(evt) {
  const result = evt.target.checked ? Language.RU : Language.EN;
  localStorage.setItem('language', result);
  return result;
}

function changeSignColor(evt) {
  if (evt.target.checked) {
    refs.signLangEng.classList.remove('is-active-lang');
    refs.signLangRus.classList.add('is-active-lang'); 
  } else {
    refs.signLangEng.classList.add('is-active-lang');
    refs.signLangRus.classList.remove('is-active-lang');
  }
}

checkAndSetLanguage();

function checkAndSetLanguage() {
  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', Language.EN);
  } else {
    localStorage.getItem('language');
  }

}

export function translateInterface(lang, arrayTrans) {
  for (let key in arrayTrans) {
    document.querySelector(`.lang-${key}`).textContent = langArray[`${key}`][lang];
  }
}

moveProperPositionOfToggle();

function moveProperPositionOfToggle() {
  if (localStorage.getItem('language') === Language.RU) {
    refs.switchLangCheckbox.checked = true;
    refs.signLangRus.classList.add('is-active-lang');
  } else {
    refs.signLangEng.classList.add('is-active-lang');
  }
};