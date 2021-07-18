export function onFilmLibClick() {
const filmLib = document.querySelectorAll('.film-card');
    // console.log(filmLib);
    [...filmLib].forEach((el) => {
      el.addEventListener('click', (e) => {
        // console.log(e.target.classList);
        // console.log(e.currentTarget);
        if (e.target.classList.contains('js-watched') || e.target.classList.contains('js-queue')) {

          e.currentTarget.style.display = 'none';
        }
      });
    });
}