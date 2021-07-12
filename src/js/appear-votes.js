
export function onClickAppearVote() {   
const dataVote = document.querySelectorAll('.data-vote');
dataVote.forEach(elem => {
 return elem.classList.remove('is-hidden');   
});
}


export function onClickDisappearVote(){
const dataVote = document.querySelectorAll('.data-vote');
dataVote.forEach(elem => {
 return elem.classList.add('is-hidden');   
});
}