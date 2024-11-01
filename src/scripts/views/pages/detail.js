import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestoDetail,
  createFavoriteButton,
} from '../templates/template-creator';
import urlParser from '../../routes/url-parser';
import favoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="detail"></div>
      <div id="favoriteButtonContainer"></div>
      
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const listContainer = document.querySelector('.detail');
    listContainer.innerHTML = createRestoDetail(restaurant);
    favoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
        menus: {
          foods: restaurant.menus.foods,
          drinks: restaurant.menus.drinks,
        },
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
