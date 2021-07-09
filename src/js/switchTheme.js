import { refs } from './refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switchThemeCheckbox.addEventListener('change', onInputCheck);

setBackgroud();

function onInputCheck(e) {
  if (e.target.checked) {
    saveDataLocalStorage(Theme.LIGHT);
  } else {
    saveDataLocalStorage(Theme.DARK);
  }
}

function saveDataLocalStorage(backgorund) {
  localStorage.setItem('theme', backgorund);
  setBackgroud();
}

function setBackgroud() {
  if (!localStorage.getItem('theme')) localStorage.setItem('theme', Theme.LIGHT);

  checkHowClassAndRemoveClass();
  const classArticle = localStorage.getItem('theme');

  if (classArticle === Theme.LIGHT) refs.switchThemeCheckbox.checked = true;
  if (classArticle === Theme.DARK) {
    refs.switchThemeCheckbox.checked = false;

    // refs.titleCardEl.classList.add(classArticle);
  }

  refs.articleEl.classList.add(classArticle);
}

function checkHowClassAndRemoveClass() {
  // if (refs.titleCardEl.classList.contains(Theme.DARK)) {
  //   refs.titleCardEl.classList.remove(Theme.DARK);
  // }
  if (refs.articleEl.classList.contains(Theme.LIGHT)) {
    refs.articleEl.classList.remove(Theme.LIGHT);
  } else if (refs.articleEl.classList.contains(Theme.DARK)) {
    refs.articleEl.classList.remove(Theme.DARK);
  }
}
