import { refs } from './refs.js';
const basicLightbox = require('basiclightbox');
import teamImage from '../images/filmoteka-plug.jpg';


console.log(refs.footerModal);

refs.footerModal.addEventListener('click', onFooterLinkClick);

function onFooterLinkClick(e) {
    e.preventDefault();
    // const instance = basicLightbox.create(`<h2>ECMA-навты</h2>
	// 	<p>HTML inside a lightbox.</p>`);
    // instance.show();

    const html = `
		<h2>ECMA-навты</h2>
        <img src="teamImage" />
		<p>You can add custom classNames to the lightbox element.</p>
	`

	basicLightbox.create(html, {
		// className: 'classNames one two three'
		className: 'modal-team-title'
	}).show()

}