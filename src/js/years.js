export function getReleaseYear(data) {
  const years = data.map(elem => {
    return elem.release_date.slice(0, 4) 
  });
 
  const arrayOfYears = document.querySelectorAll('.year-list');
  
  [...arrayOfYears].forEach((elem, index) => {    
  elem.innerText = years[index]})  
}
