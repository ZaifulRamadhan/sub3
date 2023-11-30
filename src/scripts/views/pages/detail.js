import UrlParser from '../../routes/url-parser';
import CafeSource from '../../data/cafe-source';
import { createCafeDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail-container"></div>
      <div id="cafe" class="cafe"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cafeDetail = await CafeSource.detailResto(url.id);

    const detailContainer = document.getElementById('detail-container');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer,
      cafe: {
        id: cafeDetail.id,
        name: cafeDetail.name,
        city: cafeDetail.city,
        description: cafeDetail.description,
        pictureId: cafeDetail.pictureId,
        rating: cafeDetail.rating,
      },
    });

    if (cafeDetail) {
      const detailHtml = createCafeDetailTemplate(cafeDetail);
      detailContainer.innerHTML = detailHtml;
    } else {
      // Handle jika data cafeDetail tidak ditemukan
      detailContainer.innerHTML = '<p>Detail cafe tidak ditemukan</p>';
    }

    // Tambahkan event listener untuk anchor link "skip to content"
    const skipToContentLink = document.querySelector('.skip-link');
    skipToContentLink.addEventListener('click', (event) => {
      event.preventDefault();
      const mainContent = document.querySelector('#mainContent');
      mainContent.scrollIntoView({ behavior: 'smooth' });
    });
  },
};

export default Detail;
