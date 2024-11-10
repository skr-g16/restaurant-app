import CONFIG from '../../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetail = (resto) => `
  <div class="card-detail">
  <h2 tabindex="0" class="card-detail-name">${resto.name}</h2>
  <img class="image-detail lazyload" data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL + resto.pictureId}" alt="${resto.name}">
  <div class="card-detail-info">
    <h3 tabindex="0">Location</h3>
    <p tabindex="0">${resto.address}, ${resto.city}</p>
    </br>
    <h3 class="rating" tabindex="0">Rating ⭐${resto.rating}</h3>
    </br>
    <h3 tabindex="0">Description</h3>
    <p tabindex="0" class="description-detail">${resto.description}</p>
  </div>

    <div class="menu-foods">
    <h3 tabindex="0"> Foods</h3>
    <ul>
      ${resto.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')}
    </ul></div>
    <div class="menu-drinks">
    <h3 tabindex="0">Drinks</h3>
    <ul>
      ${resto.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')}
    </ul></div>
    <div class="customer-reviews">
    <h3 tabindex="0">Customer Reviews</h3>
    <ul class="reviews">
        ${resto.customerReviews
          .map(
            (review) => `
        <div class="reviews-item">
        <h4 tabindex="0">${review.name}</h4> 
        <p tabindex="0" class="review-text">${review.review}</p>
        <p tabindex="0" class="review-date">${review.date}</p></div>`,
          )
          .join('')}
    </ul>
    </div>
  </div>
  <div class="card-reviews">
    <form-review></form-review>
  </div>


`;

const createRestoItem = (resto) => `
<div class="card" id="card-${resto.id}">
        <div class="card2">
          <div class="card-image">
            <img tabindex="0" class="image lazyload" data-src="${CONFIG.BASE_IMAGE_SMALL_URL + resto.pictureId}" alt="${resto.name}">
          </div>
          <div class="card-content">
            <a class="name" href="/#/detail/${resto.id}">${resto.name}</a>
            <p class="city" tabindex="0">${resto.city}</p>
            <p class="description" tabindex="0">${resto.description}</p>
            <p class="rating" tabindex="0"><strong>Rating</strong> ⭐${resto.rating}</p>
          </div>
        </div>
      </div>
`;

const createFavoriteButton = () => `
  <button aria-label="like this movie" id="favoriteButton" class="favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
  `;

const createUnfavoriteButton = () => `
  <button aria-label="unlike this movie" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
  `;

export {
  createRestoItem,
  createRestoDetail,
  createFavoriteButton,
  createUnfavoriteButton,
};
