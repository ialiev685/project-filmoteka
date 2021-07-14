import { refs } from './refs.js';
const basicLightbox = require('basiclightbox');
// import teamImage from '../images/footer/our-team.jpg';
import teamImageMobile from '../images/footer/our-team-mobile300.jpg';
import teamImageTablet from '../images/footer/our-team-tablet600.jpg';
import teamImageDekstop from '../images/footer/our-team-dekstop1200.jpg';
import teamImageBigger from '../images/footer/our-team-bigger2400.jpg';
import closeBtn from '../images/icon-close.svg';

refs.footerModal.addEventListener('click', onFooterLinkClick);
// src="./images/main/adaptation.jpg"
//                 srcset="
//                   ./images/main/adaptation.jpg    1x,
//                   ./images/main/adaptation@2x.jpg 2x
//                 "
{
  /* <img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy"></img> */
}

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
        // console.log(instance);
        // console.log(instance.element());
        // console.log(instance.element().querySelector('.close-modal-team-btn'));
        // console.log(instance.close);

        instance
          .element()
          .querySelector('.close-modal-team-btn')
          .addEventListener('click', function onBtnClick() {
            instance.close();
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
          });
        // instance.element().querySelector('.close-modal-team-btn').onclick = {
        //   instance.close();
        //   document.getElementsByTagName("body")[0].style.overflow = 'scroll';
        // };
        // closeDialog(instance);
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
  // const modalTeam = document.querySelector('.basicLightbox');

  function showDialog() {
    // modalTeam.showModal();
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }
  function closeDialog() {
    // instance.close();
    document.getElementsByTagName('body')[0].style.overflow = 'scroll';
  }
}
