import { refs } from './refs.js';
const basicLightbox = require('basiclightbox');
import teamImage from '../images/footer/our-team.jpg';
import closeBtn from '../images/icon-close.svg';

console.log(refs.footerModal);

refs.footerModal.addEventListener('click', onFooterLinkClick);

function onFooterLinkClick(e) {
  e.preventDefault();
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
              <a href="https://github.com/ialiev685/project-filmoteka" target="_blank" class="link-no-style member-link ">Ссылка на проект</a>
        </div>
      </div>`,
    {
      onShow: instance => {
        instance.element().querySelector('.close-modal-team-btn').onclick = instance.close;
      },
    },
  );

  instance.show();
}
