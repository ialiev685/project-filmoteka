export function getVote(data) {  
  const votes = data.map(elem => {   
    let voteValue = String(elem.vote_average);    
    let regExp = '[.]+';
    if(voteValue.match(regExp) == null) {
    voteValue += '.0';     
    } return voteValue;    
  });
 
  const arrayOfVotes = document.querySelectorAll('.vote-average');

 [...arrayOfVotes].forEach((elem, index) => {
 elem.innerText = votes[index]; 
 });   
};


