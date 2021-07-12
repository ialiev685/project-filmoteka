import { refs } from './refs.js';
const basicLightbox = require('basiclightbox');
import teamImage from '../images/footer/our-team.jpg';

console.log(refs.footerModal);

// refs.footerModal.addEventListener('click', onFooterLinkClick);

function onFooterLinkClick(e) {
  e.preventDefault();
  //     const instance = basicLightbox.create(`<img class="modal-image" src="${teamImage}" />
  //  	<h2 class="modal-team-title">Разработчики:</h2>
  //  	<ul class="list-no-style list-team-links">
  //    <li>
  //      <a href="https://github.com/Dima-Penzev" target="_blank" class="link-no-style member-link"></a>Дмитрий
  //   </li>
  //    <li>
  //      <a href="https://github.com/SvetlanaLeb" target="_blank" class="link-no-style"></a>Светлана
  //    </li>
  //    <li>
  //      <a href="https://github.com/KaterinaGerts" target="_blank" class="link-no-style"></a>Екатерина
  //    </li>
  //    <li>
  //      <a href="https://github.com/denis-tsibaev" target="_blank" class="link-no-style"></a>Денис
  //    </li>
  //    <li><a href="https://github.com/JuliaZaykaS" target="_blank" class="link-no-style"></a>Юлия</li>
  //    <li><a href="https://github.com/ialiev685" target="_blank" class="link-no-style"></a>Ильфат</li>
  //   <li><a href="https://github.com/ABoklogov" target="_blank" class="link-no-style"></a>Алексей</li>
  //    <li><a href="https://github.com/Grek-88" target="_blank" class="link-no-style"></a>Георгий</li>
  //  </ul>`);
  //     instance.show();

  const html = `
	<img class="modal-image" src="${teamImage}" />
<h2 class="modal-team-title">Разработчики:</h2>
<ul class="list-no-style list-team-links">
  <li>
    <a href="https://github.com/Dima-Penzev">Дмитрий</a>
  </li>
  <li>
    <a href="https://github.com/SvetlanaLeb">Светлана</a>
  </li>
  <li>
    <a href="https://github.com/KaterinaGerts">Екатерина</a>
  </li>
  <li>
    <a href="https://github.com/denis-tsibaev">Денис</a>
  </li>
  <li>
    <a href="https://github.com/JuliaZaykaS">Юлия</a>
  </li>
  <li>
    <a href="https://github.com/ialiev685">Ильфат</a>
  </li>
  <li>
    <a href="https://github.com/ABoklogov">Алексей</a>
  </li>
  <li>
    <a href="https://github.com/Grek-88">Георгий</a>
  </li>
</ul>
	`;

  basicLightbox
    .create(html, {
      // className: 'classNames one two three'
      className: 'modal-team-title modal-image list-team-links',
    })
    .show();

  // 	const teamLinks = document.querySelector('.list-team-links');
  // 	const memberLinks = document.querySelectorAll('.member-link');
  // 	console.log(memberLinks);
  // 	// console.log(teamLinks);
  // 	teamLinks.addEventListener('click', (e) => {
  // 		// console.log(e.target);
  // 		// console.log(e.currentTarget);
  // 		if (!e.target.classList.contains('member-link')) return;
  // 		// console.log(123);
  // 		[...memberLinks].forEach((el) => {
  // 			console.log(el.href);
  // 			const existingInstance = basicLightbox.create(el.href);
  // 			existingInstance.show;
  // 		})

  // 	})
}

// }
