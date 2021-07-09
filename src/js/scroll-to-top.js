import { refs } from './refs.js';

refs.btnToTop.addEventListener('click', onBtnTopClick);
function onBtnTopClick(e) {
    e.preventDefault();
    window.scrollTo(pageYOffset, 0);
}

const observerOn = new IntersectionObserver(observerHandlerOn, {
  threshold: 0.15,
});

observerOn.observe(refs.overlay);

function observerHandlerOn([entries]) {
  if (!entries.isIntersecting) {
    refs.btnToTop.classList.remove("arrow-top-is-hidden");
  } else if (entries.isIntersecting) {
    refs.btnToTop.classList.add("arrow-top-is-hidden");
  }
}




