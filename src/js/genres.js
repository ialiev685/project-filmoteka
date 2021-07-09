import genresList from '../json/genres.json';

export function getGenres(data) {
  const arrayGenres = data.map((elem) => {
    return elem.genre_ids;
  });
  
  const apiGenres = genresList.genres;
  const apiGenresfilter = arrayGenres.map((elem) => {
  
  return elem.map((el) => {  
    const genreName = apiGenres.find((element) => {    
      if(element.id === el) {     
        return element;
      }
    }) 
    return genreName.name;    
  });
  })
  
  const genresListName = document.querySelectorAll('.name-genres');
  
  [...genresListName].forEach((elem, index) => {  
    elem.innerText = apiGenresfilter[index].join(', ')}) 
}


