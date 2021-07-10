// import defaultImage from '../images/plug-image.png';
// import defaultImage from '../images/filmoteka.png';
import defaultImage from '../images/filmoteka-plug.jpg';

console.log(defaultImage);
// console.log('../images/plug-image.png');
export function checkHasFilmImage(data) {
    const filmImg = document.querySelectorAll('.js-film-image');
    // console.log(filmImg);
    // [...filmImg].forEach((elem) => {
    //     console.log(elem.src);
    //     if (elem.src !== '') return;
    //     // elem.src = '../images/plug-image.png';

    // })
    // SORORITY GIRL'S REVENGE
    // console.log(data);
    // console.dir(File);
    // console.log(File.webkitRelativePath);
    // const objectURL = window.URL.createObjectURL();
    // console.log(objectURL);
    data.forEach((elem, index) => {
        // console.log(images);
        // console.log(elem);
        // console.log(index);
        // console.log(elem.poster_path);
        if (elem.poster_path === null) {
            // filmImg[index].src = 'images/plug-image.png';
            console.log(filmImg[index]);
            filmImg[index].src = defaultImage;
            console.log(filmImg[index]);
            // filmImg[index].src = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg';
        }


    });



}