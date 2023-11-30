import CafeSource from '../../data/cafe-source'; // Ubah dari TheMovieDbSource ke CafeSource
import { createCafeItemTemplate } from '../templates/template-creator'; // Ubah dari createMovieItemTemplate

const NowPlaying = {
  async render() {
    return `
   <picture>
     <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.jpg">    
    <img class="hero" src="./images/heros/hero-image_1-large.jpg" alt="gambar utama" tabindex="0">
  </picture>
    <h3 tabindex="0">INFORMASI KAFE</h3>
      <div class="content">
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await CafeSource.homeResto(); // Mengambil data restoran
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createCafeItemTemplate(restaurant);
    });
  },
};

export default NowPlaying;
