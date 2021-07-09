const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';
const KEY = '222d2b89e8701088edcf9049fa569980';


function getTrendItems(page) {
try {  const url = `${BASE_URL}${KEY}&page=${page}`;

  const result = fetch(url).then(response => response.json());
  return result;
  
} catch (error) {
  console.log(`Ошбика + ${error}`);
  // поидее здесь должна быть нотификация, что что-то пошло не так и типо перезагрузите страницу
}

}
export { getTrendItems };

//  *для теста, если кто будет работать с этим*

  
// import { getTrendItems } from './js/base-api.js';
  
  



// async function test() {
//   const t = await getTrendItems();
// console.log(t);
// }

// test();
