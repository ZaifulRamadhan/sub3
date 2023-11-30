import CONFIG from '../../globals/config';

const createCafeItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <h2><a href = "/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
    <p>${restaurant.city}</p>
    <p>Rating: ${restaurant.rating}</p>
    <p>${restaurant.description}</p>
  </div>
`;

const createCafeDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3 id="information">Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Categories</h4>
    <ul>
      ${restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}
    </ul>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__menus">
    <h3>Menus</h3>
    <h4>Foods</h4>
    <ul>
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
    <h4>Drinks</h4>
    <ul>
      ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
  </div>
  <div class="restaurant__reviews">
    <h3>Customer Reviews</h3>
    <ul>
      ${restaurant.customerReviews.map((review) => `
        <li>
          <h4>${review.name}</h4>
          <p>${review.review}</p>
          <p>Date: ${review.date}</p>
        </li>
      `).join('')}
    </ul>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this cafe" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this cafe" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createCafeItemTemplate,
  createCafeDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
