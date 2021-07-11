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
  const classbody = localStorage.getItem('theme');

  if (classbody === Theme.LIGHT) refs.switchThemeCheckbox.checked = true;
  if (classbody === Theme.DARK) refs.switchThemeCheckbox.checked = false;

  refs.bodyEl.classList.add(classbody);
}

function checkHowClassAndRemoveClass() {
  if (refs.bodyEl.classList.contains(Theme.LIGHT)) {
    refs.bodyEl.classList.remove(Theme.LIGHT);
  } else if (refs.bodyEl.classList.contains(Theme.DARK)) {
    refs.bodyEl.classList.remove(Theme.DARK);
  }
}
