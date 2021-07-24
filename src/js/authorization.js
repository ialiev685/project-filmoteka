import { authWithEmailAndPassword } from './auth-api.js';
import { refs } from './refs.js';
import { modalAuth } from './auth-modal.js';

refs.authBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  modalAuth.show();

  const authForm = document.querySelector('.form-container');
  authForm.addEventListener('submit', handleSubmit, { once: true });
  authForm.reset();
}

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.querySelector('#email').value.trim();
  const password = event.target.querySelector('#password').value.trim();
  authWithEmailAndPassword(email, password);
  modalAuth.close();
}
