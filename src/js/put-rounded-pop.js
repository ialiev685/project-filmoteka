function putRoundedPopularity(value) {
  const rounded = Math.round(value * 10) / 10;
  const placePopulariry = document.querySelector('.modal-flm-popularity');
  placePopulariry.textContent = rounded;
};

export { putRoundedPopularity }; 