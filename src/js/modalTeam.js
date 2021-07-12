import { refs } from './refs.js';
const basicLightbox = require('basiclightbox');
import teamImage from '../images/footer/our-team.jpg';
import closeBtn from '../images/icon-close.svg';

console.log(refs.footerModal);

refs.footerModal.addEventListener('click', onFooterLinkClick);

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

  //   const html = `
  // 	<img class="modal-image" src="${teamImage}" />
  // <h2 class="modal-team-title">Разработчики:</h2>
  // <ul class="list-no-style list-team-links">
  //   <li>
  //     <a href="https://github.com/Dima-Penzev">Дмитрий</a>
  //   </li>
  //   <li>
  //     <a href="https://github.com/SvetlanaLeb">Светлана</a>
  //   </li>
  //   <li>
  //     <a href="https://github.com/KaterinaGerts">Екатерина</a>
  //   </li>
  //   <li>
  //     <a href="https://github.com/denis-tsibaev">Денис</a>
  //   </li>
  //   <li>
  //     <a href="https://github.com/JuliaZaykaS">Юлия</a>
  //   </li>
  //   <li>
  //     <a href="https://github.com/ialiev685">Ильфат</a>
  //   </li>
  //   <li>
  //     <a href="https://github.com/ABoklogov">Алексей</a>
  //   </li>
  //   <li>
  //     <a href="https://github.com/Grek-88">Георгий</a>
  //   </li>
  // </ul>
  // 	`;

  // basicLightbox
  //   .create(html, {
  //     // className: 'classNames one two three'
  //     className: 'modal-team-title modal-image list-team-links',
  //   })
  //   .show();

  const instance = basicLightbox.create(
    `
    <div class="modal">
    <img src="${closeBtn}" alt="close button" class="close-modal-team-btn" />

      <img class="modal-image" src="${teamImage}" />
<h2 class="modal-team-title">Разработчики:</h2>
<ul class="list-no-style list-team-links">
  <li>
    <a href="https://github.com/Dima-Penzev" target="_blank" class="link-no-style member-link">Дмитрий</a>
  </li>
  <li>
    <a href="https://github.com/SvetlanaLeb" target="_blank" class="link-no-style member-link">Светлана</a>
  </li>
  <li>
    <a href="https://github.com/KaterinaGerts" target="_blank" class="link-no-style member-link">Екатерина</a>
  </li>
  <li>
    <a href="https://github.com/denis-tsibaev" target="_blank" class="link-no-style member-link">Денис</a>
  </li>
  <li>
    <a href="https://github.com/JuliaZaykaS" target="_blank" class="link-no-style member-link">Юлия</a>
  </li>
  <li>
    <a href="https://github.com/ialiev685" target="_blank" class="link-no-style member-link">Ильфат</a>
  </li>
  <li>
    <a href="https://github.com/ABoklogov" target="_blank" class="link-no-style member-link">Алексей</a>
  </li>
  <li>
    <a href="https://github.com/Grek-88" target="_blank" class="link-no-style member-link">Георгий</a>
  </li>
</ul>
<div class="progect-link">
<a href="https://github.com/ialiev685/project-filmoteka"
        target="_blank"
        class="link-no-style member-link "
        >Ссылка на проект</a
      >
      </div>

    </div>

`,
    {
      onShow: instance => {
        instance.element().querySelector('.close-modal-team-btn').onclick = instance.close;
      },
    },
  );

  instance.show();

  // <img src="${closeBtn}" alt="close button" class="close-modal-team-btn" />
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

{/* <svg class="close-modal-team-btn"
    wigth="40"
    height="40">
              <use
                href="${closeBtn}"

              ></use>

      </svg> */}