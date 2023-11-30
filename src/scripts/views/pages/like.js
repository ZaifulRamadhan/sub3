import FavoriteCafeIdb from '../../data/favorite-cafe-idb';
import { createCafeItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Cafe</h2>
        <div id="cafes" class="cafes"></div>
      </div>
    `;
  },

  async afterRender() {
    const cafes = await FavoriteCafeIdb.getAllCafe();
    const cafesContainer = document.querySelector('#cafes');

    cafes.forEach((cafe) => {
      const cafeItemElement = document.createElement('div');
      cafeItemElement.classList.add('restaurant-item');
      cafeItemElement.innerHTML = createCafeItemTemplate(cafe);

      cafesContainer.appendChild(cafeItemElement);
    });

    // Tambahkan event listener untuk anchor link "skip to content"
    const skipToContentLink = document.querySelector('.skip-link');
    skipToContentLink.addEventListener('click', (event) => {
      event.preventDefault();
      const mainContent = document.querySelector('#mainContent');
      mainContent.scrollIntoView({ behavior: 'smooth' });
      mainContent.focus();
    });
  },
};

export default Like;
