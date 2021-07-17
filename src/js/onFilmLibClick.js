export function onFilmLibClick() {
const filmLib = document.querySelectorAll('.film-card');
    // console.log(filmLib);
    [...filmLib].forEach((el) => {
      el.addEventListener('click', (e) => {

        if (e.target.classList.contains('js-watched') || e.target.classList.contains('js-queue')) {
          e.currentTarget.style.display = 'none';
        }
      });
    });
}