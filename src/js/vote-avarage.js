export function getVote(data) {
  const votes = data.map(elem => {
    let voteValue = String(elem.vote_average);
    let regExp = '[.]+';
    if(voteValue.match(regExp) == null) {
    voteValue += '.0';
    } return voteValue;
  });

  const arrayOfVotes = document.querySelectorAll('.vote-average');
  // const arrayOfBoxVotes = document.querySelectorAll('.data-vote');

  // [...arrayOfBoxVotes].forEach((el) => {
  //   el.classList.remove('is-hidden');
  // });

 [...arrayOfVotes].forEach((elem, index) => {
 elem.innerText = votes[index];
 });
};

export function getVoteModal(film) {

    let voteValue = String(film.vote_average);
    let regExp = '[.]+';
    if(voteValue.match(regExp) == null) {
    voteValue += '.0';
  };

  const filmModalVote = document.querySelector('.modal__flm-rating');
    filmModalVote.innerText = voteValue;

};


