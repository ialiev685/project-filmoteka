import { refs } from './refs.js';
const basicLightbox = require('basiclightbox');
import teamImageMobile from '../images/footer/our-team-mobile300.jpg';
import teamImageTablet from '../images/footer/our-team-tablet600.jpg';
import teamImageDekstop from '../images/footer/our-team-dekstop1200.jpg';
import teamImageBigger from '../images/footer/our-team-bigger2400.jpg';
import closeBtn from '../images/icon-close.svg';

refs.footerModal.addEventListener('click', onFooterLinkClick);

function onFooterLinkClick(e) {
  e.preventDefault();
  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${closeBtn}" alt="close button" class="close-modal-team-btn" />
        <img class="modal-image"
        srcset="${teamImageMobile} 280w, ${teamImageTablet} 600w, ${teamImageDekstop} 1200w,
             ${teamImageBigger} 2400w"
     sizes="(max-width: 320px) 280px,
            (max-width: 768px) 600px,
            (max-width: 1024px) 1024px,
            2400px"
     src="${teamImageMobile}" alt="team-foto">
        />
        <h2 class="modal-team-title">Разработчики:</h2>
        <ul class="list-no-style list-team-links">
          <li>
              <a href="https://github.com/Dima-Penzev" target="_blank" rel="noopener noreferrer" class="link-no-style member-link">Дмитрий</a>
          </li>
          <li>
              <a href="https://github.com/SvetlanaLeb" target="_blank" rel="noopener noreferrer" class="link-no-style member-link">Светлана</a>
          </li>
          <li>
              <a href="https://github.com/KaterinaGerts" target="_blank" rel="noopener noreferrer" class="link-no-style member-link">Екатерина</a>
          </li>
          <li>
              <a href="https://github.com/denis-tsibaev" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer" class="link-no-style member-link">Денис</a>
          </li>
          <li>
              <a href="https://github.com/JuliaZaykaS" target="_blank" rel="noopener noreferrer" class="link-no-style member-link">Юлия</a>
          </li>
          <li>
              <a href="https://github.com/ialiev685" target="_blank" rel="noopener noreferrer" class="link-no-style member-link">Ильфат</a>
          </li>
          <li>
              <a href="https://github.com/ABoklogov" target="_blank" rel="noopener noreferrer" class="link-no-style member-link">Алексей</a>
          </li>
          <li>
              <a href="https://github.com/Grek-88" target="_blank" rel="noopener noreferrer" class="link-no-style member-link">Георгий</a>
          </li>
        </ul>
        <div class="progect-link">
              <a href="https://github.com/ialiev685/project-filmoteka" target="_blank" rel="noopener noreferrer" class="link-no-style member-link ">Ссылка на проект</a>
        </div>
      </div>`,
    {
      onShow: instance => {
        instance
          .element()
          .querySelector('.close-modal-team-btn')
          .addEventListener('click', function onBtnClick() {
            instance.close();
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
          });

        window.addEventListener('keydown', function onEscClick(e) {
          if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscClick);
          }
        });
      },
    },
  );

  instance.show();
  showDialog();

}

function showDialog() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }